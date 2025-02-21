  <template>
    <div>
      <PieChart :chart-data="chartData" :options="chartOptions"/>
    </div>

  </template>
  
  <script setup>
  import { PieChart } from 'vue-chart-3';
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  import axios from 'axios';
  
  Chart.register(...registerables);
  
  const api_url = import.meta.env.VITE_BACKEND_HOST;
  
  // 🔥 Tipuri de credite urmărite
  const creditTypes = ['Ipotecar', 'NP', 'OVD', 'CC'];
  const creditCount = {
    Ipotecar: 0,
    NP: 0,
    OVD: 0,
    CC: 0,
  };
  
  // ✅ Inițializăm datele pentru Pie Chart
  const chartData = ref({
    labels: creditTypes,
    datasets: [
      {
        label: 'Distribuția Creditelor',
        data: [0, 0, 0, 0], // Se va popula dinamic
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
      },
    ],
  });
  
  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'white',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  });
  
  const fetchCustomers = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(api_url + `customers/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const customers = response.data;

    // 🔥 Numărăm tipurile de credite
    customers.forEach((customer) => {
      if (customer.credit_details) {
        customer.credit_details.forEach((credit) => {
          if (creditTypes.includes(credit.tip_credit)) {
            creditCount[credit.tip_credit]++;
          }
        });
      }
    });

    // 🔥 Actualizăm datele pentru Pie Chart
    chartData.value.datasets[0].data = creditTypes.map(
      (type) => creditCount[type]
    );

    // 🔥 Forțăm reactivitatea în Vue 3
    chartData.value = {
      ...chartData.value, // Copiem datele existente
      datasets: [
        {
          ...chartData.value.datasets[0], // Copiem dataset-ul existent
          data: [...chartData.value.datasets[0].data], // Forțăm update-ul cu .slice()
        },
      ],
    };


  } catch (error) {
    console.error('❌ Eroare la preluarea clienților:', error);
  }
};

  
  // ✅ Preluăm datele atunci când componenta este montată
  onMounted(() => {
    fetchCustomers();
  });
  </script>
  
  <style scoped>
  .v-container {
    background: linear-gradient(to top, #09203f, #537895);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .v-row {
    justify-content: center;
  }
  
  .v-col {
    text-align: center;
  }
  
  div {
    width: 400px;
    height: 200px;
  }
  </style>
  