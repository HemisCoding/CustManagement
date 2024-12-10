<template>
  <v-container class="pa-5 container" fluid>
    <v-card class="align-center pa-3 card-style1">
      <v-row>
        <!-- Coloana pentru titlu și text - prima simulare -->
        <v-col cols="12" md="4">
          <v-card-title>Simulare Plată Credit</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                label="Perioada creditului (luni)"
                v-model="creditPeriod"
                type="number"
                min="1"
                required
              ></v-text-field>
              <v-text-field
                label="Suma totală (RON)"
                v-model="totalAmount"
                type="number"
                min="1"
                required
              ></v-text-field>
              <v-text-field
                label="Dobândă anuală (%)"
                v-model="interestRate"
                type="number"
                step="0.01"
                min="0"
                required
              ></v-text-field>
              <v-btn @click="calculateGraph" color="primary">Calculează și afișează graficul</v-btn>
            </v-form>
          </v-card-text>
        </v-col>

        <!-- Coloana pentru graficul principal -->
        <v-col cols="12" md="8" class="d-flex align-center justify-center">
          <canvas id="creditChart" style="max-width: 100%; height: 400px;"></canvas>
        </v-col>
      </v-row>
    </v-card>

    <!-- Calculatorul de rata anticipată -->
    <v-card class="align-center pa-3 card-style1 mt-4">
      <v-row>
        <!-- Form pentru rambursare anticipată, cu variabile separate -->
        <v-col cols="12" md="4">
          <v-card-title>Calculator Rambursare Anticipată</v-card-title>
          <v-card-text>
            <v-form ref="formPrepayment">
              <v-text-field
                label="Suma totală (RON)"
                v-model="prepaymentTotalAmount"
                type="number"
                min="1"
                required
              ></v-text-field>
              <v-text-field
                label="Dobândă anuală (%)"
                v-model="prepaymentInterestRate"
                type="number"
                step="0.01"
                min="0"
                required
              ></v-text-field>
              <v-text-field
                label="Suma rambursată lunar (RON)"
                v-model="prepaymentAmount"
                type="number"
                min="0"
                required
              ></v-text-field>
              <v-select
                :items="metodaRambursareOptions"
                label="Metoda Rambursare"
                v-model="prepaymentSelectedMetoda"
                required
              ></v-select>
              <v-btn @click="calculatePREPAYMENT" color="primary">Calculează Rambursare Anticipată</v-btn>
            </v-form>
          </v-card-text>
        </v-col>

        <!-- Coloana pentru graficul de rambursare anticipată -->
        <v-col cols="12" md="8" class="d-flex align-center justify-center">
          <canvas id="prepaymentChart" style="max-width: 100%; height: 400px;"></canvas>
        </v-col>
      </v-row>
      <v-row class="pa-3" v-if="adjustedPeriod !== null">
        <v-col cols="12" class="text-center">
          <div style="color: white;">Perioada ajustată: {{ adjustedPeriod }} luni</div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "CreditSimulator",
  data() {
    return {
      // Variabile pentru graficul principal
      creditPeriod: 360,
      totalAmount: 288660,
      interestRate: 4.9,
      creditChart: null,

      // Variabile pentru graficul de rambursare anticipată
      prepaymentTotalAmount: 288660,
      prepaymentInterestRate: 4.9,
      prepaymentAmount: 0,
      prepaymentSelectedMetoda: "Scadere din Perioada",
      prepaymentChart: null,
      adjustedPeriod: null,

      metodaRambursareOptions: ["Scadere din Perioada", "Scaderea Ratei"],
    };
  },
  methods: {
    destroyChart(chart) {
      if (chart) {
        chart.destroy();
        chart = null;
      }
    },
    createGraph(ctx, labels, datasets) {
      return new Chart(ctx, {
        type: "line",
        data: {
          labels,
          datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              labels: {
                color: "white",
                font: {
                  size: 14,
                  weight: "bold",
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Luna",
                color: "white",
              },
              ticks: {
                color: "white",
              },
            },
            y: {
              title: {
                display: true,
                text: "Sumă (RON)",
                color: "white",
              },
              ticks: {
                color: "white",
              },
            },
          },
        },
      });
    },

    // Calcul grafic principal
    calculateGraph() {
      const monthlyInterestRate = this.interestRate / 100 / 12;
      const numPayments = this.creditPeriod;
      const principal = this.totalAmount;

      const monthlyPayment =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numPayments));

      const interestData = [];
      const principalData = [];
      const totalData = [];
      let remainingPrincipal = principal;

      for (let i = 1; i <= numPayments; i++) {
        const interest = remainingPrincipal * monthlyInterestRate;
        const principalPayment = monthlyPayment - interest;

        interestData.push(interest);
        principalData.push(principalPayment);
        totalData.push(interest + principalPayment);

        remainingPrincipal -= principalPayment;
      }

      // Resetează graficul anterior
      this.destroyChart(this.creditChart);

      const ctx = document.getElementById("creditChart").getContext("2d");
      this.creditChart = this.createGraph(
        ctx,
        Array.from({ length: numPayments }, (_, i) => i + 1),
        [
          {
            label: "Dobândă către bancă",
            data: interestData,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Principal către bancă",
            data: principalData,
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Total plată lunară",
            data: totalData,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ]
      );
    },

    // Calcul rambursare anticipată
    calculatePREPAYMENT() {
      const monthlyInterestRate = this.prepaymentInterestRate / 100 / 12;
      let remainingPrincipal = this.prepaymentTotalAmount;
      let currentPeriod = 0;

      const interestData = [];
      const principalData = [];
      const totalData = [];

      // Resetăm perioada ajustată
      this.adjustedPeriod = null;

      if (this.prepaymentSelectedMetoda === "Scadere din Perioada") {
        // Pentru "Scadere din Perioada", calculăm rata lunară standard fără prepayment:
        const monthlyPayment = 
          (remainingPrincipal * monthlyInterestRate) / 
          (1 - Math.pow(1 + monthlyInterestRate, -this.creditPeriod));

        // În fiecare lună plătim monthlyPayment + prepaymentAmount
        while (remainingPrincipal > 0) {
          currentPeriod++;
          const interest = remainingPrincipal * monthlyInterestRate;
          const totalMonthlyPaid = monthlyPayment + this.prepaymentAmount;
          const principalPayment = totalMonthlyPaid - interest;

          interestData.push(interest);
          principalData.push(Math.min(principalPayment, remainingPrincipal));
          totalData.push(interest + Math.min(principalPayment, remainingPrincipal));

          remainingPrincipal -= principalPayment;
        }

      } else if (this.prepaymentSelectedMetoda === "Scaderea Ratei") {
        // Pentru "Scaderea Ratei", logica originală se poate păstra similar:
        const monthlyPayment =
          (remainingPrincipal * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -this.creditPeriod));

        while (remainingPrincipal > 0) {
          currentPeriod++;
          const interest = remainingPrincipal * monthlyInterestRate;
          const totalPrincipalPayment = (monthlyPayment - interest) + this.prepaymentAmount;

          interestData.push(interest);
          principalData.push(Math.min(totalPrincipalPayment, remainingPrincipal));
          totalData.push(interest + Math.min(totalPrincipalPayment, remainingPrincipal));

          remainingPrincipal -= totalPrincipalPayment;
        }
      }

      // Actualizează graficul
      this.destroyChart(this.prepaymentChart);
      const ctx = document.getElementById("prepaymentChart").getContext("2d");
      this.prepaymentChart = this.createGraph(
        ctx,
        Array.from({ length: currentPeriod }, (_, i) => i + 1),
        [
          { label: "Dobândă către bancă", data: interestData, borderColor: "rgba(255, 99, 132, 1)", borderWidth: 1 },
          { label: "Principal către bancă", data: principalData, borderColor: "rgba(54, 162, 235, 1)", borderWidth: 1 },
          { label: "Total plată lunară", data: totalData, borderColor: "rgba(75, 192, 192, 1)", borderWidth: 1 },
        ]
      );

      this.adjustedPeriod = currentPeriod;
      console.log(`Perioada ajustată: ${currentPeriod} luni`);
      console.log(this.adjustedPeriod);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  height: 100%;
}

.card-style1 {
  color: white;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 70%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-style1:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
