


<template>
  <v-container class="pa-5 container" fluid>
    <v-row>
      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-account-group</v-icon>
          <v-card-title>Total Clienți</v-card-title>
          <v-card-text>{{ totalClients }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-progress-check</v-icon>
          <v-card-title>Aplicații în Progres</v-card-title>
          <v-card-text>{{ applicationsInProgress }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-check-bold</v-icon>
          <v-card-title>Aplicații Finalizate</v-card-title>
          <v-card-text>{{ completedApplications }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="5" md="2">
        <v-card class="d-flex flex-column align-center pa-3 card-style1">
          <v-icon large color="primary">mdi-cash-multiple</v-icon>
          <v-card-title>Total Sumă Aprobată</v-card-title>
          <v-card-text>{{ formatNumber(totalCreditSum) }} RON</v-card-text>
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
          <v-card-title>Dobândă minimă</v-card-title>
          <v-card-text>{{ minimumInterestRate ? minimumInterestRate.toFixed(2) : '-' }} %</v-card-text>
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
            <div class="font-weight-medium">{{ userProfile.name || 'Nume Utilizator' }}</div>
            <div class="text-caption">Rol: {{ userProfile.role || 'Manager Clienti' }}</div>
            <div class="text-caption">Status: Activ</div>
            <div class="text-caption">Nr. Clienți: {{ userProfile.totalClients || 0 }}</div>
            <div class="text-caption">Clienti în progres: {{ userProfile.clientsInProgress || 0 }}</div>
            <div class="text-caption">Clienti închisi 28 zile: {{ userProfile.clientsClosed || 0 }}</div>

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
        <div class="text-caption3 text-white">Sărbătoriti:</div>
        <v-col cols="2" md="12">
          <v-row>
            <v-col v-for="(client, index) in displayedClients" :key="index" cols="2" md="6">
              <v-card class="d-flex align-center pa-3 card-style4">
                <v-icon size="48" class="me-4" color="blue" icon="mdi-account"></v-icon>
                <!-- Detalii utilizator -->
                <div class="account-card">
                  <div class="text-caption2">
                    {{ client.nume }} {{ client.prenume }}
                  </div>
                  <div class="text-caption2">Zi nastere: {{ formatBirthday(client.ziNastere) }}</div>
                </div>
              </v-card>
            </v-col>
          </v-row>
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
import axios from "axios";
import dayjs from "dayjs"; // Pentru lucrul cu date


const api_clients = import.meta.env.VITE_BACKEND_HOST;

const totalClients = ref(0);
const applicationsInProgress = ref(0);
const completedApplications = ref(0);
const totalCreditSum = ref(0);
const minimumInterestRate = ref(null);
const clients = ref([]); // ✅ Definim corect lista de clienți


// User profile data
const userProfile = ref({
  name: "",
  role: "",
  totalClients: 0,
  clientsInProgress: 0,
  clientsClosed: 0,
  progress: 0,
});

const formatNumber = (value) => {
  return new Intl.NumberFormat('ro-RO', { maximumFractionDigits: 0 }).format(value);
};


const fetchClientStats = async () => {
  try {
    // const response = await axios.get(api_clients + 'customers/total_clients/');

    const token = localStorage.getItem("token");
    const response = await axios.get(api_clients + 'customers/total_clients/', {
      headers: {
        Authorization: `Bearer ${token}`,  // ✅ Include JWT token in the request
      },
    });
    totalClients.value = response.data.total_clients;
    applicationsInProgress.value = response.data.applications_in_progress;
    completedApplications.value = response.data.completed_applications;
    totalCreditSum.value = response.data.total_credit_sum;
  } catch (error) {
    console.error("Error fetching client statistics:", error);
  }
};

// Fetch User Profile
const fetchClientProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("email");

    if (!token || !userEmail) {
      console.error("No authentication token or email found.");
      return;
    }

    console.log("Fetching user profile from:", `${api_clients}users/`);
    console.log("Looking for email:", userEmail);

    const response = await axios.get(`${api_clients}users/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("User profile response:", response.data);

    // ✅ Convert both emails to lowercase to fix case-sensitivity issues
    const user = response.data.find(u => u.email.toLowerCase() === userEmail.toLowerCase());

    if (user) {
      userProfile.value = {
        name: user.first_name || "Nume Utilizator",
        email: user.email,
        phone: user.phone || "N/A",
        role: user.role || "Manager Clienti",
        totalClients: user.total_clients || 0,
        clientsInProgress: user.clients_in_progress || 0,
        clientsClosed: user.clients_closed || 0,
        progress: user.progress || 0,
      };
      console.log("User details loaded:", userProfile.value);
    } else {
      console.error("Logged-in user not found in user list.");
      console.log("API returned these users:", response.data);
    }

  } catch (error) {
    console.error("Error fetching user profile:", error.response ? error.response.data : error.message);
  }
};


const fetchClients = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${api_clients}customers/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    clients.value = response.data.map(client => ({
      nume: client.nume,
      prenume: client.prenume,
      ziNastere: client.zi_nastere, // Format: YYYY-MM-DD
      etapaCreditare: client.etapa_creditare,
    }));

  } catch (error) {
    console.error("❌ Eroare la încărcarea clienților:", error);
  }
};


// 🔹 Filtrare aniversări (doar clienții cu ziua de naștere azi)
const birthdayClients = computed(() => {
  const today = dayjs().format("MM-DD"); // Formatăm ziua de naștere ca MM-DD

  return clients.value.filter(client =>
    client.ziNastere && dayjs(client.ziNastere).format("MM-DD") === today
  );
});

const displayedClients = computed(() => {
  return birthdayClients.value; // Show all clients with a birthday today
});


// 🔹 Calculează câte zile mai sunt până la ziua de naștere
const getDaysUntilBirthday = (date) => {
  if (!date) return "N/A";
  
  const today = dayjs();
  const birthday = dayjs(date).year(today.year());

  if (birthday.isBefore(today)) {
    return birthday.add(1, "year").diff(today, "day");
  }
  
  return birthday.diff(today, "day");
};

// 🔹 Deschide fisa clientului
const openClientDetails = (client) => {
  console.log("Deschidem fișa clientului:", client);
};

const formatBirthday = (date) => {
  if (!date) return "N/A";  
  return dayjs(date).format("DD MMMM"); // Example: "05 Februarie"
};



  // Fetch data from the API
  const fetchBankData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(api_clients + 'interestrate/', {
      headers: {
        Authorization: `Bearer ${token}`,  // ✅ Include JWT token in the request
      },
    });
      // Update chart data with sorted API response
      const banks = response.data;
      console.log(banks)

        // Calculate the minimum interest rate
      minimumInterestRate.value = Math.min(...banks.map((bank) => bank.interest_rate));
  
    } catch (error) {
      console.error('Error fetching bank data:', error);
    }
  };
  

onMounted(() => {
  fetchClientStats();
  fetchBankData();
  fetchClientProfile();
  fetchClients();

});
</script>


<style lang="scss" scoped>
.container {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  min-height: 100vh;
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
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  font-size: 60% !important;
}

.text-caption3 {
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  margin-left: 2vw;
}

</style> 