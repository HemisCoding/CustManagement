<template>
    <div>
      <BarChart :chart-data="chartData" :options="chartOptions"/>
    </div>
  </template>
  
  <script setup>
  import { BarChart } from 'vue-chart-3';
  import { ref } from 'vue';
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  // Datele pentru graficul de bare
  const chartData = ref({
    labels: ['Raiffeisen', 'BCR', 'BT', 'Libra Bank', 'Alpha Bank', 'UniCredit'],
    datasets: [
      {
        label: 'Dobanzile Actuale ale Bancilor',
        backgroundColor: '#42A5F5',
        data: [50, 60, 70, 180, 190, 200],
      },
    ]
  });
  
  // Opțiunile pentru graficul de bare
  const chartOptions = ref({
    responsive: true,
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
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
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
  