<template>
  <div>
    <LineChart :chart-data="chartData" :options="chartOptions"/>
  </div>
</template>

<script setup>
import { LineChart } from 'vue-chart-3';
import { ref } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// Datele pentru grafic
const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Cresterea Anuala a Dobanzilor',
      
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      pointRadius: 1,
      data: [0, 20, 40, 50, 60, 80],
      fill: true,
    }
  ]
});

// Opțiunile pentru grafic
const chartOptions = ref({
  responsive: true, // Asigură-te că graficul este responsiv
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white', // Culoarea textului pentru legenda graficului
        font: {
          size: 14,
          weight: 'bold'
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
});
</script>

<style scoped>
div {
  width: 480px;
  height: 300px;
}
</style>
