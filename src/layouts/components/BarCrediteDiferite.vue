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

  const api_url = import.meta.env.VITE_BACKEND_HOST;

  
  const chartData = ref({
    labels: ['Banca A', 'Banca B', 'Banca C', 'Banca D', 'Banca E'],
    datasets: [
      {
        label: 'N. Pers.',
        data: [5, 6, 7, 5.5, 6.5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Auto',
        data: [4.5, 4.8, 4.3, 4.9, 4.4],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Ipotecare',
        data: [3.5, 3.8, 3.2, 3.9, 3.4],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }
    ]
  });

//   const fetchCreditStatus = async () => {
//     try {
//     const token = localStorage.getItem('token');
//     const response = await axios.get(api_url + `customers/`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const customers = response.data;
//     console.log('clienti pentru credit status', customers)
//   }

//   catch (error) {
//     console.error('Eroare la citirea fetchCreditStatus', error)
//   }
// },

  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
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
      y: {
        title: {
          display: true,
          text: 'Dobânzi (%)'
        }
      }
    }
  });
  </script>
  
  <style scoped>
  div {
    width: 450px;
    height: 200px; 
  }
  </style>
  