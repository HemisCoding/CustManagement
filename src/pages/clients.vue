<template>
  <v-container class="pa-5 container" fluid>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Caută"
          solo-inverted
          hide-details
          
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6"></v-col>
      <v-col cols="12" md="2">
        <v-select
          color="white"
          v-model="sortOrder"
          :items="sortOptions"
          label="Sortează după"
          solo-inverted
          @change="sortCards"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="card in filteredCards"
        :key="card.id"
        cols="12" sm="6" md="3"
      >
        <v-card class="card-style1">
          <v-card-title>
            <v-avatar size="56">
              <img :src="card.avatar" alt="Avatar">
            </v-avatar>
            {{ card.title }}
          </v-card-title>
          <v-card-text class="text-caption2">
            <div v-for="([key, value], index) in card.detailsPreview" :key="key">
              <strong>{{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</strong> {{ value }}
            </div>
            <v-divider class="my-3 devider-page"></v-divider>

            <v-btn
              v-if="Object.keys(card.details).length > card.detailsPreview.length"
              text color="primary"
              @click="openDialog(card)"
              class="text-caption2 see-more-button"
            >
              Vezi mai mult
            </v-btn>
          </v-card-text>
        </v-card>

        <!-- Dialog -->
        <v-dialog v-model="card.dialog" persistent max-width="800px">
          <v-card class="pa-3 custom-dialog">
            <!-- Titlu și linia separatoare -->
            <v-card-title class="headline grey lighten-2 pa-3">
              Fișa Client: {{ card.title }}
            </v-card-title>
            <v-divider class="my-3 devider-page"></v-divider>

            <!-- Datele clientului organizate în stânga și dreapta -->
            <v-card-text>
              <v-row>
                <!-- Prima coloană cu primele 10 proprietăți -->
                <v-col cols="6">
                  <div v-for="([key, value], index) in Object.entries(card.details).slice(0, 10)" :key="index">
                    <strong>{{ String(key).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</strong> {{ value }}
                  </div>
                </v-col>

                <!-- A doua coloană cu restul proprietăților -->
                <v-col cols="6">
                  <div v-for="([key, value], index) in Object.entries(card.details).slice(10)" :key="index">
                    <strong>{{ String(key).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</strong> {{ value }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider class="my-3 devider-page"></v-divider>

            <v-row align="center">
              <!-- Primul buton -->
              <v-col cols="12" md="3">
                <v-card-actions>
                  <v-btn class="docs" color="primary" text @click="">
                    Documente Client
                  </v-btn>
              </v-card-actions>
              </v-col>

              <!-- Al doilea buton -->
              <v-col cols="12" md="3">
                <v-btn
                  v-if="card.details.stareCivila === 'da'"
                  color="primary"
                  text
                  @click="openPartnerDialog"
                >
                  Vezi profil partener
                </v-btn>
              </v-col>

              <!-- Buton de închidere -->
              <v-col cols="12" md="6" class="text-end">
                <v-btn color="red" text @click="closeDialog(card)">
                  Închide
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
            <!-- Dialog pentru profilul partenerului -->
          <v-dialog v-model="partnerDialog" persistent max-width="600px">
            <v-card class="pa-3 custom-dialog">
              <v-card-title class="headline grey lighten-2 pa-3">
                Profil Partener
              </v-card-title>
              <v-divider class="my-3 devider-page"></v-divider>
              <v-card-text>
                <p>Momentan nu există date pentru partener.</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="closePartnerDialog">Închide</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-dialog>
      </v-col>
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="Math.ceil(filteredCards.length / pageSize)"
      class="mt-4 text-white"
    ></v-pagination>
  </v-container>
</template>

  
<script setup>
  import { reactive, computed, ref } from 'vue';
  import axios from 'axios';
  
  const search = ref('');
  const sortOrder = ref('');
  const sortOptions = ['Urgent de contactat', 'A-Z', 'Z-A', 'Recent adăugați'];

  const api_url = import.meta.env.VITE_BACKEND_HOST;
  
  const cards = reactive([]);
  
  const filteredCards = computed(() => {
    return cards.filter(card =>
      card.title.toLowerCase().includes(search.value.toLowerCase())
    );
  });
  
  function openDialog(card) {
    card.dialog = true;
  }
  
  function closeDialog(card) {
    card.dialog = false;
  }

  const partnerDialog = ref(false);

  function openPartnerDialog() {
    partnerDialog.value = true;
  }

  function closePartnerDialog() {
    partnerDialog.value = false;
  }

  const currentPage = ref(1);
  const pageSize = ref(20)
  //Pagination
  const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredCards.value.slice(start, end);
  })
  //Sorting
  function sortCards() {
    console.log('Sort Order:', sortOrder.value); // Verifică dacă sortOrder se schimbă
    if (sortOrder.value === 'A-Z') {
      cards.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder.value === 'Z-A') {
      cards.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder.value === 'Recent adăugați') {
      cards.sort((a, b) => new Date(b.details.dataInregistrat) - new Date (a.details.dataInregistrat));
    }
  }



  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${api_url}customers/`);
      const customers = response.data;
      console.log('customers', customers);

      const customersData = customers.map((customer) => {
      const details = {
        email: customer.email || 'N/A',
        telefon: customer.telefon || 'N/A',
        adresa: customer.stare_domiciliu || 'N/A',
        venitLunar: customer.venitLunar || 'N/A',
        bonuriMasa: customer.bonuri_masa || 'N/A',
        cnp: customer.cnp || 'N/A',
        contSalariuRaiffeisen: customer.cont_salariu_raiffeisen || 'N/A',
        conturiAlteBanci: customer.conturi_alte_banci || 'N/A',
        dataInregistrat: customer.data_inregistrat || 'N/A',
        educatie: customer.educatie || 'N/A',
        etapaCreditate: customer.etapa_creditate || 'N/A',
        litigii: customer.litigii || 'N/A',
        nationalitate: customer.nationalitate || 'N/A',
        nrCopiiIntretinere: customer.nr_copii_intretinere || 'N/A',
        nrPersIntretinere: customer.nr_pers_intretinere || 'N/A',
        stareCivila: customer.stare_civila || 'N/A',
        varsta: customer.varsta || 'N/A',
        vechimeAdresa: customer.vechime_adresa || 'N/A',
      };

      return {
        id: customer.id,
        avatar: `https://ui-avatars.com/api/?name=${customer.nume || 'N/A'}+${customer.prenume || 'N/A'}&background=random`,
        details,
        detailsPreview: Object.entries(details).slice(0, 9), // Primele 7 câmpuri
        title: `${customer.nume} ${customer.prenume}`,
        dialog: false,
      };
    });
        // Populează array-ul `cards`
        cards.splice(0, cards.length, ...customersData);

    } catch (error) {
    console.error("Error fetching customers:", error);
  }
  };
  // Apel fetch la încărcarea componentului
    onMounted(() => {
      fetchCustomers();
    });
  </script>
  
  <style lang="scss" scoped>
  .container {
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    height: 100%;
  }
  
  .card-style1 {
    color: white;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    height: fit-content;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card-style1:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .v-card-title {
    font-size: 1.5vh;
    font-weight: bold;
  }
  
  .v-avatar img {
  object-fit: cover;
}
  
  .text-caption2 {
    font-size: 1.7vh;
    font-family: 'Courier New', Courier, monospace;
  }

  .custom-dialog {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  border-radius: 8px;
}

.dialog-title {
  color: #333; /* Titlu gri închis */
}

.devider-page {
  color: white;
  height: 50px !important;
}

.docs {
  border: 1px solid rgb(138, 128, 128);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

}

  
  </style>
  