<template>
  <v-container class="services-container" fluid>
    <v-row class="text-center" justify="center">
      <v-col cols="12" md="3" v-for="(service, index) in services" :key="index">
        <v-icon large class="service-icon">{{ service.icon }}</v-icon>
        <h4 class="service-title">{{ service.title }}</h4>
        <div class="divider mx-auto"></div>
        <p class="service-description">{{ service.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServicesSection',
  data() {
    return {
      services: [
  { 
    icon: 'mdi-flash', 
    title: 'RAPIDITATE', 
    description: 'Experiență fără bătăi de cap! Instalăm cu viteză și precizie pentru ca tu să te bucuri cât mai repede de confortul dorit. Fără deranj, fără stres!' 
  },
  { 
    icon: 'mdi-cog', 
    title: 'IZOLARE TERMICĂ DE TOP', 
    description: 'Economisește energie și bani! noastre păstrează căldura iarna și răcoarea vara – facturi mai mici și un ambient plăcut pe tot parcursul anului.' 
  },
  { 
    icon: 'mdi-pencil', 
    title: 'DURABILITATE', 
    description: 'O investiție care durează! Folosim doar materiale premium, rezistente la uzură, pentru ferestre și uși ce rezistă ani întregi, fără compromisuri la calitate.' 
  },
  { 
    icon: 'mdi-puzzle', 
    title: 'ESTETICĂ MODERNĂ', 
    description: 'Stilul întâlnește funcționalitatea! Ferestrele și ușile noastre sunt create să se potrivească perfect în case moderne, adăugând eleganță și rafinament spațiului tău.' 
  },
]

    };
  }
});
</script>

<style scoped>
.services-container {
  background-color: #0d1b2a; /* Fundal întunecat */
  padding: 15vh 10vw;
}

.service-icon {
  color: #1e88e5; /* Albastru pentru icon */
  margin-bottom: 10px;
  font-size: 48px; /* Ajustează dimensiunea după preferință */

}

.service-title {
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.divider {
  width: 1.5vw;
  height: 0.1vh;
  background-color: #1e88e5	; /* Albastru pentru subliniere */
}

.service-description {
  color: #f2f4f5; /* Gri deschis pentru text */
  font-size: 13px;
  margin-top: 10px;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
