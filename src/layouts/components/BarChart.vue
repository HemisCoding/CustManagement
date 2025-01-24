<template>
    <div>
      <BarChart :chart-data="chartData" :options="chartOptions"/>
    </div>
  </template>
  
  <script setup>
  import { BarChart } from 'vue-chart-3';
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  import axios from 'axios';
  
  Chart.register(...registerables);
  
  // API URL for fetching bank data
  // const API_URL = 'http://127.0.0.1:8080/api/interestrate/';
  const API_URL = import.meta.env.VITE_BACKEND_HOST;
  
  // Reactive data for the chart
  const chartData = ref({
    labels: [], // Bank names will be loaded here
    datasets: [
      {
        label: 'Dobânzile Actuale ale Băncilor',
        backgroundColor: '#42A5F5',
        data: [], // Interest rates will be loaded here
      },
    ],
  });
  
  // Chart options
  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Legend text color
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: false,
        ticks: {
          color: 'white',
        },
      },
      y: {
        stacked: false,
        ticks: {
          color: 'white',
          beginAtZero: true,
        },
      },
    },
  });
  
  // Fetch data from the API
  const fetchBankData = async () => {
    try {
      const response = await axios.get(API_URL + 'interestrate/');
  
      // Update chart data with sorted API response
      const banks = response.data;
  
      // Sort banks by interest_rate in ascending order
      const sortedBanks = banks.sort((a, b) => a.interest_rate - b.interest_rate);
  
      // Update chart data
      chartData.value.labels = sortedBanks.map((bank) => bank.name); // Sorted bank names
      chartData.value.datasets[0].data = sortedBanks.map((bank) => bank.interest_rate); // Sorted interest rates
    } catch (error) {
      console.error('Error fetching bank data:', error);
    }
  };
  
  // Fetch data when component is mounted
  onMounted(() => {
    fetchBankData();
  });
  </script>
  
  
  <style scoped>
div {
  width: 480px;
  height: 300px;
}
  </style>
  