<template>
    <v-container class="pa-5 container" fluid>
      <!-- Calculatorul de rata anticipată -->
      <v-card class="align-center pa-3 card-style1 mt-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-card-title>Calculator Rata Anticipată</v-card-title>
            <v-card-text>
              <v-form ref="formPrepayment">

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
                <v-text-field
                  label="Suma rambursată lunar (RON)"
                  v-model="prepaymentAmount"
                  type="number"
                  min="0"
                  required
                ></v-text-field>
                <v-btn @click="calculatePrepaymentGraph">Calculează rata anticipată</v-btn>
              </v-form>
            </v-card-text>
          </v-col>
  
          <v-col cols="12" md="8" class="d-flex align-center justify-center">
            <canvas id="prepaymentChart" style="max-width: 100%; height: 400px;"></canvas>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>

<script>
import { defineComponent, ref } from "vue";
import Chart from "chart.js/auto";

export default defineComponent({
  name: "CalculatorAnticipat",
  setup() {
    const totalAmount = ref(288660); // Suma totală în RON
    const interestRate = ref(4.9); // Dobândă anuală în %
    const prepaymentAmount = ref(0); // Rambursarea lunară suplimentară în RON
    let prepaymentChart = null;

    const calculatePrepaymentGraph = () => {
      const monthlyInterestRate = interestRate.value / 100 / 12;
      let numPayments = 0; // Inițial, setăm perioada de rambursare la 0 luni
      let remainingPrincipal = totalAmount.value;

      const monthlyPayment =
        (remainingPrincipal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -360)); // Calcul pentru o perioadă standard de 30 ani (360 luni)

      const interestData = [];
      const principalData = [];
      const totalData = [];

      while (remainingPrincipal > 0) {
        const interest = remainingPrincipal * monthlyInterestRate;
        const principalPayment = monthlyPayment - interest;
        const totalPrincipalPayment = principalPayment + prepaymentAmount.value;

        if (totalPrincipalPayment >= remainingPrincipal) {
          interestData.push(interest);
          principalData.push(remainingPrincipal);
          totalData.push(interest + remainingPrincipal);
          remainingPrincipal = 0; // Creditul este rambursat complet
        } else {
          interestData.push(interest);
          principalData.push(totalPrincipalPayment);
          totalData.push(interest + totalPrincipalPayment);
          remainingPrincipal -= totalPrincipalPayment;
        }

        numPayments += 1; // Incrementăm numărul de luni
      }

      // Curățarea graficului anterior
      const canvas = document.getElementById("prepaymentChart");
      if (prepaymentChart) {
        prepaymentChart.destroy();
      }

      const ctx = canvas.getContext("2d");

      // Crearea graficului
      prepaymentChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: Array.from({ length: numPayments }, (_, i) => i + 1),
          datasets: [
            {
              label: "Dobândă către bancă",
              data: interestData,
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              fill: false,
            },
            {
              label: "Principal către bancă",
              data: principalData,
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
              fill: false,
            },
            {
              label: "Total plată lunară",
              data: totalData,
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              fill: false,
            },
          ],
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

      console.log(`Creditul va fi rambursat complet în ${numPayments} luni.`);
    };

    return {
      totalAmount,
      interestRate,
      prepaymentAmount,
      calculatePrepaymentGraph,
    };
  },
});
</script>


<style scoped>
.container {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  height: 100%;
}

.card-style1 {
  color: white;
  background-color: transparent; /* Fundal alb pentru un aspect curat */
  border-radius: 10px; /* Colțuri rotunjite */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Umbra de bază */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Linie subtilă pentru contur */
  height: 70%; /* Înălțime consistentă */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Tranziții pentru un efect de hover lin */
}

/* Efect dinamic la hover */
.card-style1:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Umbra devine mai pronunțată */
}</style>

  