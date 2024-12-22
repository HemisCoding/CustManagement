<template>
    <div>
      <PieChart :chart-data="chartData" :options="chartOptions"/>
    </div>
  </template>
  
  <script setup>
  import { PieChart } from 'vue-chart-3';
  import { ref } from 'vue';
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  // Datele pentru graficul Pie
  const chartData = ref({
    labels: ['Credite ipotecare', 'Credite de consum', 'Credite auto', 'Credite studențești'],
    datasets: [
      {
        label: 'Distribuția Creditelor',
        data: [300, 250, 200, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)'
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ]
      }
    ]
  });
  
  const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'right', // Schimbă poziția legendei în dreapta
      labels: {
        color: 'white', // Setează culoarea textului la alb
        font: {
          size: 14, // Mărimea fontului pentru text
          weight: 'bold' // Face textul bold
        }
      }
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        }
      }
    }
  }
});
  </script>
  
  <style scoped>
  div {
    width: 400px;
    height: 200px;
  }
  </style>
  