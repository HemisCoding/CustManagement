<template>
    <div>
      <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  // Register Chart.js components
  Chart.register(...registerables);
  
  // Data pentru grafic
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Demo Line Chart',
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgb(75, 192, 192)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  
  // Referința pentru elementul canvas
  const chartRef = ref(null);
  
  onMounted(() => {
    const ctx = chartRef.value.getContext('2d');
    const myChart = new Chart(ctx, config); // Inițializarea graficului
  });
  </script>
  
  <style scoped>
  /* Stiluri opționale pentru centrarea canvas-ului */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  