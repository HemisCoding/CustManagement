<template>
  <v-container class="pa-5 container" fluid>
    <h2>Gestionare Bănci și Dobânzi</h2>
    <v-row>
      <v-btn color="primary" class="mt-5 text-white addbank" @click="addBank">Adaugă Bancă</v-btn>
      <v-btn color="success" class="mt-5 text-white" @click="saveBanks">Salvează Modificările</v-btn>
    </v-row>
    <v-row>
      <v-col
        v-for="(bank, index) in banks"
        :key="index"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="card-style1">
          <v-card-text>
            <v-text-field
              v-model="bank.name"
              label="Numele băncii"
              outlined
              dense
              class="mb-3 text-white"
            ></v-text-field>
            <v-text-field
              v-model.number="bank.interest_rate"
              label="Dobânda Credit Ipotecar"
              outlined
              dense
              type="number"
              class="text-white"
            ></v-text-field>
            <v-btn
              color="blue"
              class="mt-3 text-white"
              :href="getAWSConsoleLink(bank.name)"
              target="_blank"
              block
            >
              Vezi Documentație
            </v-btn>
            <v-btn
              color="red"
              class="mt-3 text-white"
              @click="removeBank(index)"
              block
            >
              Șterge
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';

// URL-ul API-ului
const API_GET = import.meta.env.VITE_BACKEND_HOST;
const API_BULK_UPDATE_URL = import.meta.env.VITE_BACKEND_HOST;

// Lista băncilor
const banks = ref([]);
const deletedBanks = ref([]); // Lista ID-urilor băncilor care trebuie șterse

// URL-ul S3
const S3_BUCKET_URL = "https://documentatie-banci.s3.eu-central-1.amazonaws.com/";




// Adaugă o bancă nouă
const addBank = () => {
  banks.value.push({ name: '', interest_rate: 0 });
};

// Șterge o bancă
const removeBank = (index) => {
  const bankToDelete = banks.value[index];
  if (bankToDelete.id) {
    // Adaugă banca în lista de ștergeri doar dacă are un ID (există în DB)
    deletedBanks.value.push(bankToDelete.id);
  }
  banks.value.splice(index, 1); // Elimină banca din interfață
};

// Salvează modificările (POST la backend)
const saveBanks = async () => {
  try {
    const plainData = JSON.parse(JSON.stringify(banks.value)); // Date pentru actualizare/adăugare
    console.log("Date trimise la backend:", { banks: plainData, deleted: deletedBanks.value });

    // Trimitem datele la backend
    await axios.post(API_BULK_UPDATE_URL + 'interestrate/bulk_update/', {
      banks: plainData,
      deleted: deletedBanks.value,
    });

    // Resetează lista de bănci șterse
    deletedBanks.value = [];
    alert("Modificările au fost salvate!");
    fetchBanks(); // Actualizează lista după salvare
  } catch (error) {
    console.error("Eroare la salvarea băncilor:", error);
    alert("Eroare la salvare!");
  }
};

// Preia datele existente din backend
const fetchBanks = async () => {
  try {
    const response = await axios.get(API_GET + 'interestrate/');
    banks.value = response.data; // Asigură-te că răspunsul conține id, name și interest_rate
    console.log("Date preluate din backend:", banks.value);
  } catch (error) {
    console.error('Eroare la preluarea băncilor:', error);
  }
};

// Generează linkul documentației din S3
const getAWSConsoleLink = (bankName) => {
  if (!bankName) return "#";
  const baseURL = "https://eu-central-1.console.aws.amazon.com/s3/buckets/documentatie-banci";
  return `${baseURL}?region=eu-central-1&bucketType=general&prefix=${encodeURIComponent(bankName)}/&showversions=false`;
};



// Încarcă datele la montare
fetchBanks();
</script>

<style scoped>
.container {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  min-height: 100vh;
  color: white;
}

.card-style1 {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-style1:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.addbank {
  margin-right: 1vw !important;
  margin-left: 0.7vw !important;
}
</style>
