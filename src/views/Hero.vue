


<template>
  <v-container class="pa-5 container" fluid>
    <v-row>
      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-account-group</v-icon>
          <v-card-title>Total Clienti</v-card-title>
          <v-card-text>120</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-progress-check</v-icon>
          <v-card-title>Aplicatii in Progres</v-card-title>
          <v-card-text>15</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-check-bold</v-icon>
          <v-card-title>Aplicatii Finalizate</v-card-title>
          <v-card-text>400</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-cash-multiple</v-icon>
          <v-card-title>Total Suma Creditata</v-card-title>
          <v-card-text>$1.2M</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-alert-box</v-icon>
          <v-card-title>Contactat Urgent</v-card-title>
          <v-card-text>7</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-offer</v-icon>
          <v-card-title>Dobanda minima</v-card-title>
          <v-card-text>4,9%</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" md="4">
        <v-card class="d-flex align-center pa-3 card-style2">
          <!-- Imagine utilizator -->

          <v-icon size="128" class="me-4" color="blue" icon="mdi-account">
          </v-icon>
          
          <!-- Detalii utilizator -->
          <div class="account-card">
            <div class="font-weight-medium">Nume Utilizator</div>
            <div class="text-caption">Rol: Manager Clienti</div>
            <div class="text-caption">Status: Activ</div>
            <div class="text-caption">Nr. Clienti: 120</div>
            <div class="text-caption">Clienti in progres: 15</div>
            <div class="text-caption">Clienti inchisi 28 zile: 10</div>

            <!-- Progress bar -->
            <v-progress-linear
              value="75"
              color="yellow"
              height="10"
              class="mt-2"
            ></v-progress-linear>
            <div class="text-caption mt-1">Progres: 75%</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="2" md="4">
        <v-card class="d-flex align-center pa-3 card-style2">
          <div><BarCrediteDiferite/></div>
        </v-card>
      </v-col>
      <v-col cols="2" md="4">
        <v-card class="d-flex align-center pa-3 card-style2">
          <div><PieChart/></div>
        </v-card>
      </v-col>
  </v-row>


  <v-row>
  <v-col cols="2" md="4">
    <v-row>
      <v-col cols="2" md="6">
        <v-card class="d-flex align-center pa-3 card-style4">
          <v-icon size="48" class="me-4" color="blue" icon="mdi-account">
          </v-icon>
          
          <!-- Detalii utilizator -->
          <div class="account-card">
            <div class="text-caption2">Nume Client</div>
            <div class="text-caption2">De contactat: 2 zile</div>
            <div class="text-caption2">Etapa credit: pre-aprobare</div>
            <div class="text-caption2">Fisa Client</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="2" md="6">
        <v-card class="d-flex align-center pa-3 card-style4">
          <v-icon size="48" class="me-4" color="blue" icon="mdi-account">
          </v-icon>
          
          <!-- Detalii utilizator -->
          <div class="account-card">
            <div class="text-caption2">Nume Client</div>
            <div class="text-caption2">De contactat: 2 zile</div>
            <div class="text-caption2">Etapa credit: pre-aprobare</div>
            <div class="text-caption2">Fisa Client</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" md="6">
        <v-card class="d-flex align-center pa-3 card-style4">
          <v-icon size="48" class="me-4" color="blue" icon="mdi-account">
          </v-icon>
          
          <!-- Detalii utilizator -->
          <div class="account-card">
            <div class="text-caption2">Nume Client</div>
            <div class="text-caption2">De contactat: 2 zile</div>
            <div class="text-caption2">Etapa credit: pre-aprobare</div>
            <div class="text-caption2">Fisa Client</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="2" md="6">
        <v-card class="d-flex align-center pa-3 card-style4">
          <v-icon size="48" class="me-4" color="blue" icon="mdi-account">
          </v-icon>
          
          <!-- Detalii utilizator -->
          <div class="account-card">
            <div class="text-caption2">Nume Client</div>
            <div class="text-caption2">De contactat: 2 zile</div>
            <div class="text-caption2">Etapa credit: pre-aprobare</div>
            <div class="text-caption2">Fisa Client</div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
  <v-col cols="2" md="8">
    <v-row>
      <v-col cols="2" md="6">
        <v-card class="d-flex flex-column pa-4 card-style5">
            <div><LineChart/></div>
        </v-card>

      </v-col>
      <v-col cols="2" md="6">
        <v-card class="d-flex align-center pa-3 card-style5">
          <div><BarChart/></div>
        </v-card>
      </v-col>
    </v-row>
    
  </v-col>
</v-row>



  </v-container>
</template>

<script setup>
import { reactive } from "vue";
import LineChart from "@/layouts/components/LineChart.vue";
import BarChart from "@/layouts/components/BarChart.vue";
import PieChart from "@/layouts/components/PieChart.vue";
import BarCrediteDiferite from "@/layouts/components/BarCrediteDiferite.vue";

</script>


<style lang="scss" scoped>
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
  height: 15vh; /* Înălțime consistentă */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Tranziții pentru un efect de hover lin */
}

/* Efect dinamic la hover */
.card-style1:hover {
  transform: scale(1.05); /* Cardul se mărește ușor */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Umbra devine mai pronunțată */
}

.card-style2 {
  color: white;
  background-color: transparent; /* Fundal alb pentru un aspect curat */
  border-radius: 10px; /* Colțuri rotunjite */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Umbra de bază */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Linie subtilă pentru contur */
  height: 27vh; /* Înălțime consistentă */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Tranziții pentru un efect de hover lin */
}

/* Efect dinamic la hover */
.card-style2:hover {
  transform: scale(1.05); /* Cardul se mărește ușor */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Umbra devine mai pronunțată */
}

.card-style3 {
  color: white;
  background-color: transparent; /* Fundal alb pentru un aspect curat */
  border-radius: 10px; /* Colțuri rotunjite */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Umbra de bază */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Linie subtilă pentru contur */
  height: 35vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Tranziții pentru un efect de hover lin */
}

/* Efect dinamic la hover */
.card-style3:hover {
  transform: scale(1.05); /* Cardul se mărește ușor */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Umbra devine mai pronunțată */
}

.card-style4 {
  color: white;
  background-color: transparent; /* Fundal alb pentru un aspect curat */
  border-radius: 10px; /* Colțuri rotunjite */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Umbra de bază */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Linie subtilă pentru contur */
  height: 20vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Tranziții pentru un efect de hover lin */
}

/* Efect dinamic la hover */
.card-style4:hover {
  transform: scale(1.05); /* Cardul se mărește ușor */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Umbra devine mai pronunțată */
}

.card-style5 {
  color: white;
  background-color: transparent; /* Fundal alb pentru un aspect curat */
  border-radius: 10px; /* Colțuri rotunjite */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Umbra de bază */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Linie subtilă pentru contur */
  height: 43vh;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Tranziții pentru un efect de hover lin */
}

/* Efect dinamic la hover */
.card-style5:hover {
  transform: scale(1.05); /* Cardul se mărește ușor */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Umbra devine mai pronunțată */
}

.account-card {
  color: white;
  font-size: larger;
}

.text-caption {
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  font-size: 80% !important;
}

.text-caption2 {
  font-weight: 300;
  font-family: 'Courier New', Courier, monospace;
  font-size: 60% !important;
}

</style> 