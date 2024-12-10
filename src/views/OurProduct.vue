<template>
  <v-container class="about-container" fluid>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-icon large class="icon mb-2">mdi-vector-circle</v-icon>
        <h3>DESPRE SERVICIILE NOASTRE</h3>
        <v-divider class="divider mx-auto"></v-divider>
      </v-col>
    </v-row>
    <v-row class="mt-8" justify="center" style="max-width: 800px; margin: 0 auto;">
      <v-col cols="12" md="4" class="text-center">
        <div class="section">
          <p class="subtitle">Productivitate Maximă</p>
          <h4>CREȘTE-ȚI VENITURILE</h4>
          <v-divider class="line mx-auto"></v-divider>
          <p class="description">Maximizează eficiența locuinței tale cu geamuri termopan de înaltă calitate.</p>
          <!-- <p class="description">Acestea nu doar că reduc costurile energetice, dar îmbunătățesc și confortul casei tale, contribuind la o viață mai sustenabilă și economică.</p> -->
          <p class="number">01</p>
        </div>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <div class="section">
          <p class="subtitle">Oferte Speciale</p>
          <h4>PREȚURI ACCESIBILE</h4>
          <v-divider class="line mx-auto"></v-divider>
          <p class="description">Obține cele mai bune soluții de termopane la prețuri avantajoase, fără a compromite calitatea.</p>
          <p class="number">02</p>
        </div>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <div class="section">
          <p class="subtitle">Protecție Premium</p>
          <h4>SECURITATE ȘI SIGURANȚĂ</h4>
          <v-divider class="line mx-auto"></v-divider>
          <p class="description">Pe lângă confortul termic, termopanele noastre îți oferă o protecție suplimentară împotriva zgomotelor exterioare și a intemperiilor. </p>
          <p class="number">03</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutOurProduct',
});
</script>

<style scoped>
.about-container {
  padding: 40px 20px;
}

.icon {
  color: black;
}

h3 {
  font-weight: bold;
  letter-spacing: 1px;
}

.divider {
  width: 50px;
  height: 2px;
  background-color: black;
}

.section {
  position: relative;
  margin-top: 20px;
  max-width: 250px; /* Lățimea maximă a fiecărei secțiuni */
  margin-left: auto;
  margin-right: auto;
}

.subtitle {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

h4 {
  font-weight: bold;
  letter-spacing: 1px;
  margin: 10px 0;
}

.line {
  width: 40px;
  height: 2px;
  background-color: #1e88e5; /* Albastru pentru subliniere */
}

.description {
  color: #666;
  font-size: 14px;
  margin: 15px 0;
}

.number {
  font-size: 40px;
  color: #403d3d;
  position: relative;
  top: 0;
  right: 10px;
  opacity: 0.3;
  font-weight: bold;
}
</style>
