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
          @update:modelValue="sortCards"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <!-- Add Client Card -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="card-style1 add-client-card" @click="openAddClientDialog">
          <v-card-title class="text-center">
            <v-icon size="40">mdi-plus</v-icon>
          </v-card-title>
          <v-card-text class="text-center">Adaugă Client</v-card-text>
        </v-card>
      </v-col>

<!-- Add Client Dialog -->
<v-dialog v-model="addClientDialog" persistent max-width="600px">
  <v-card class="pa-3 custom-dialog">
    <v-card-title class="headline grey lighten-2 pa-3 text-white">
      Adaugă un Client Nou
    </v-card-title>
    <v-divider class="my-3 devider-page"></v-divider>

    <v-card-text class="text-white">
      <v-form ref="addClientForm" v-model="valid">
        <v-text-field v-model="newClient.nume" label="Nume" required></v-text-field>
        <v-text-field v-model="newClient.prenume" label="Prenume" required></v-text-field>
        <v-text-field v-model="newClient.cnp" label="CNP" type="number"></v-text-field>
        <v-text-field v-model="newClient.varsta" label="Vârsta" type="number"></v-text-field>
        <v-text-field v-model="newClient.zi_nastere" label="Zi Naștere" type="date"></v-text-field>

        <v-select v-model="newClient.stare_civila" label="Stare Civilă" :items="['da', 'nu']"
          @update:modelValue="checkMaritalStatus"></v-select>

        <v-text-field v-model="newClient.studii_finalizate" label="Studii Finalizate"></v-text-field>
        <v-text-field v-model="newClient.stare_domiciliu" label="Adresă"></v-text-field>
        <v-text-field v-model="newClient.cont_salariu_banca" label="Cont Salariu Banca"></v-text-field>
        <v-text-field v-model="newClient.email" label="Email"></v-text-field>
        <v-text-field v-model="newClient.telefon" label="Telefon" type="number"></v-text-field>

        <v-text-field v-model="newClient.angajator" label="Angajator"></v-text-field>
        <v-text-field v-model="newClient.salariu_net" label="Salariu Net" type="number"></v-text-field>
        <v-text-field v-model="newClient.data_angajarii" label="Data Angajării" type="date"></v-text-field>
        <v-text-field v-model="newClient.functia" label="Funcția"></v-text-field>

        <v-btn 
          color="primary" 
          @click="openCreditDialog" 
          class="mb-4"
        >
          Adaugă Tipuri de Credit
        </v-btn>

        <v-text-field v-model="newClient.data_inregistrat" label="Data Înregistrării" type="date"></v-text-field>
        <v-select v-model="newClient.etapa_creditare" :items="etapaCreditareOptions" label="Etapa Creditare" class="text-white"></v-select>

        <v-text-field v-model="newClient.notar" label="Notar"></v-text-field>
        <v-text-field v-model="newClient.data_semnare" label="Data Semnare" type="date"></v-text-field>
      </v-form>
    </v-card-text>

    <v-divider class="my-3 devider-page"></v-divider>

    <v-card-actions>
      <v-btn color="red" text @click="addClientDialog = false">Anulează</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="submitNewClient">Adaugă Client</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
<v-dialog v-model="creditDialog" persistent max-width="900px">
  <v-card class="pa-3 custom-dialog">
    <v-card-title class="headline grey lighten-2 pa-3 text-white">
      Adaugă Tipuri de Credit
    </v-card-title>
    <v-divider class="my-3 devider-page"></v-divider>

    <v-card-text class="text-white">
      <v-data-table
  :items="creditList"
  class="elevation-1 text-white"
  hide-default-footer
>
  <!-- Hardcodează Headerurile -->
  <template #column.header>
    <tr>
      <th>Tip Credit</th>
      <th>Valoare (RON)</th>
      <th>Data Acordare</th>
      <th>Rata (%)</th>
      <th>Acțiuni</th>
    </tr>
  </template>

  <!-- Template pentru Randuri -->
  <template #item="{ item, index }">
    <tr>
      <td>
        <v-select
          v-model="item.tip_credit"
          :items="['Ipotecar', 'NP', 'OVD', 'CC']"
          label="Tip Credit"
          placeholder="Selectează Tip Credit"
          dense
          hide-details
          solo-inverted
          style="width: 120%;"
          :return-object="false"
        ></v-select>
      </td>
      <td>
        <v-text-field
          v-model="item.valoare"
          type="number"
          placeholder="Valoare (RON)"
          dense
          hide-details
          solo-inverted
          style="width: 85%;"

        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="item.data_acordare"
          type="date"
          placeholder="Data Acordare"
          dense
          hide-details
          solo-inverted
        ></v-text-field>
      </td>
      <td>
        <v-text-field
          v-model="item.rata"
          type="number"
          placeholder="Rata"
          dense
          hide-details
          solo-inverted
        ></v-text-field>
      </td>
      <td>
        <v-btn icon color="red" @click="removeCreditRow(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </td>
    </tr>
  </template>
</v-data-table>

<v-btn color="primary" class="mt-4" @click="addCreditRow">
  Adaugă Rând
</v-btn>

    </v-card-text>

    <v-divider class="my-3 devider-page"></v-divider>

    <v-card-actions>
      <v-btn color="red" text @click="creditDialog = false">Anulează</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="green" @click="saveCreditDetails">Salvează</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>



<!-- Dialog pentru completarea partenerului -->
<v-dialog v-model="partnerDialog" persistent max-width="600px">
  <v-card class="pa-3 custom-dialog">
    <v-card-title class="headline grey lighten-2 pa-3 text-white">
      Detalii Partener
    </v-card-title>
    <v-divider class="my-3 devider-page"></v-divider>

    <v-card-text class="text-white">
      <v-form ref="partnerForm" v-model="valid">
        <v-text-field v-model="partnerDetails.nume" label="Nume" required></v-text-field>
        <v-text-field v-model="partnerDetails.prenume" label="Prenume" required></v-text-field>
        <v-text-field v-model="partnerDetails.cnp" label="CNP" type="number"></v-text-field>
        <v-text-field v-model="partnerDetails.varsta" label="Vârstă" type="number"></v-text-field>
        <v-text-field v-model="partnerDetails.zi_nastere" label="Zi Naștere" type="date"></v-text-field>
        <v-text-field v-model="partnerDetails.telefon" label="Telefon" type="number"></v-text-field>
        <v-text-field v-model="partnerDetails.email" label="Email"></v-text-field>
        <v-text-field v-model="partnerDetails.venitLunar" label="Venit Lunar" type="number"></v-text-field>
        <v-text-field v-model="partnerDetails.studii_finalizate" label="Studii Finalizate"></v-text-field>
        <v-text-field v-model="partnerDetails.salariu_net" label="Salariu Net" type="number"></v-text-field>
        <v-text-field v-model="partnerDetails.cont_salariu_banca" label="Cont Salariu Banca"></v-text-field>
      </v-form>
    </v-card-text>

    <v-divider class="my-3 devider-page"></v-divider>

    <v-card-actions>
      <v-btn color="red" text @click="partnerDialog = false">Anulează</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="closePartnerDialog">Salvează Partener</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>



      <v-col
        v-for="card in paginatedCards"
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
            <br/>
              <!-- Progress Bar -->
              <div class="phase-progress-bar">
              <!-- Progress Bar -->
              <v-progress-linear
                height="10"
                color="transparent"
                background-color="grey"
                buffer-value="100"
              >
                <template v-slot="{ props }">
                  <div class="phases">
                    <div
                      v-for="(phase, index) in creditPhases"
                      :key="index"
                      class="phase-section"
                      :style="getPhaseStyle(index, getPhaseIndex(card.details.etapaCreditare))"
                    ></div>
                  </div>
                </template>
              </v-progress-linear>

              <!-- Current Phase Label -->
              <div class="phase-label">{{ card.details.etapaCreditare }}</div>
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
      <!-- Dialog pentru detaliile clientului -->
<v-dialog v-model="card.dialog" persistent max-width="800px">
  <v-card class="pa-3 custom-dialog">
    <!-- Titlu și linia separatoare -->
    <v-card-title class="headline grey lighten-2 pa-3 text-white">
      Fișa Client: {{ card.title }}
    </v-card-title>
    <v-divider class="my-3 devider-page"></v-divider>

    <!-- Formularul cu datele clientului -->
    <v-card-text>
      <v-form ref="clientDetailsForm" v-model="valid">
        <v-row>
          <v-col cols="6" v-for="([key, value], index) in Object.entries(card.details)" :key="index">
            <template v-if="key === 'etapaCreditare'">
            <v-select v-model="card.details.etapaCreditare" :items="etapaCreditareOptions" label="Etapa Creditare" class="text-white"></v-select>
            </template>
            <!-- Altfel afișăm v-text-field normal -->
            <template v-else>
              <v-text-field
                v-model="card.details[key]"
                :label="key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())"
                variant="filled"
                outlined
                class="text-left text-white"
              ></v-text-field>
            </template>
          </v-col>
        </v-row>

        <template v-if="card.details.credit_details && card.details.credit_details.length">
          <v-divider class="my-4 devider-page"></v-divider>
          <v-col cols="12">
            <h3 class="text-h6 font-weight-bold text-white">Tipuri de Credit</h3>
          </v-col>
          <v-row>
            <v-col cols="12">
              <v-data-table
                :items="card.details.credit_details"
                class="elevation-1 text-white"
                
                hide-default-footer
              >
                <!-- Hardcodează Headerurile -->
                <template #column.header>
                  <tr>
                    <th>Tip Credit</th>
                    <th>Valoare (RON)</th>
                    <th>Data Acordare</th>
                    <th>Rata (%)</th>
                  </tr>
                </template>

                <!-- Template pentru Randuri -->
                <template #item="{ item }">
                  <tr>
                    <td>{{ item.tip_credit }}</td>
                    <td>{{ item.valoare }}</td>
                    <td>{{ item.data_acordare }}</td>
                    <td>{{ item.rata }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </template>

        <!-- 🔹 SECTIUNEA PENTRU PARTENER - Apare doar dacă există un partener -->
        <template v-if="card.details.partener">
          <v-divider class="my-4 devider-page"></v-divider>
          <v-col cols="12">
            <h3 class="text-h6 font-weight-bold text-white">Partener</h3>
          </v-col>

          <v-row>
            <v-col cols="6" v-for="([key, value], index) in Object.entries(card.details.partener)" :key="'partener-' + index">
              <v-text-field
                v-model="card.details.partener[key]"
                :label="key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())"
                variant="filled"
                outlined
                class="text-left text-white"
              ></v-text-field>
            </v-col>
          </v-row>
        </template>
      </v-form>
    </v-card-text>

    <v-divider class="my-3 devider-page"></v-divider>

    <v-row align="center">
      <!-- Buton pentru documentele clientului -->
      <v-col cols="12" md="3">
        <v-card-actions>
          <v-btn
            class="docs"
            color="primary"
            :href="getClientDocs()"
            text
          >
            Documente Client
          </v-btn>
        </v-card-actions>
      </v-col>
<!-- Buton pentru salvare -->
  <v-col cols="12" md="6" class="text-right">
    <v-btn color="green" @click="updateClientDetails(card)">Salvează Modificările</v-btn>
  </v-col>
      <!-- Buton de închidere -->
      <v-col cols="12" md="3" class="text-end">
        <v-btn color="red" text @click="closeDialog(card)">
          Închide
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
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

  const addClientDialog = ref(false);
  const partnerDialog = ref(false);
  const valid = ref(false);
  const creditDialog = ref(false);  // Dialog visibility
  const creditList = ref([]);       // List of credits

  const creditHeaders = [
  { text: "Tip Credit", value: "tip_credit" },
  { text: "Valoare (RON)", value: "valoare" },
  { text: "Data Acordare", value: "data_acordare" },
  { text: "Rata (%)", value: "rata" }
];

  // script setup
const etapaCreditareOptions = ['Initializare Aplicatie', 'Verificare Documente', 'Analiza Financiara', 'Aprobare Credit', 'Acordare Credit'];

  const newClient = reactive({
  nume: "", prenume: "", cnp: null, varsta: null, zi_nastere: "",
  stare_civila: "", studii_finalizate: "", stare_domiciliu: "",
  cont_salariu_banca: "", email: "", telefon: null, angajator: "",
  salariu_net: null, data_angajarii: "", functia: "", tip_credit: "",
  valoare_aprobata: null, data_acordarii: "", sold_credit_card: null,
  data_inregistrat: "", etapa_creditare: "", notar: "", data_semnare: "",
  partener: null
});


    // Obiectul pentru Partener
  const partnerDetails = reactive({
    nume: "", prenume: "", cnp: null, varsta: null, zi_nastere: "",
    telefon: null, email: "", venitLunar: null, studii_finalizate: "",
    salariu_net: null, cont_salariu_banca: ""
  });

  // Deschide dialogul pentru partener dacă stare_civila este "Da"
  const checkMaritalStatus = () => {
    if (newClient.stare_civila === "da") {
      partnerDialog.value = true;
    } else {
      partnerDialog.value = false;
    }
  };

  // Open the dialog
const openCreditDialog = () => {
  creditDialog.value = true;
};

// Add a new row to the table
const addCreditRow = () => {
  creditList.value.push({
    tip_credit: "",
    valoare: "",
    data_acordare: "",
    rata: ""
  });
};
// Remove a row from the table
const removeCreditRow = (index) => {
  creditList.value.splice(index, 1);
};

// Save the credit details and close the dialog
const saveCreditDetails = () => {
  newClient.tip_credit = JSON.stringify(creditList.value);
  creditDialog.value = false;
};

  const openAddClientDialog = () => { 
  addClientDialog.value = true; 
};

function openDialog(card) {
    card.dialog = true;
  }
  
  function closeDialog(card) {
    card.dialog = false;
  }

  function openPartnerDialog() {
    partnerDialog.value = true;
  }

  function closePartnerDialog() {
    partnerDialog.value = false;
  }

const submitNewClient = async () => {
    try {
      const token = localStorage.getItem("token");

      // Validare: asigură-te că câmpurile obligatorii sunt completate
      if (!newClient.nume || !newClient.prenume) {
        alert("Te rugăm să completezi câmpurile obligatorii.");
        return;
      }

      const payload = {
        nume: newClient.nume,
        prenume: newClient.prenume,
        cnp: newClient.cnp,
        varsta: newClient.varsta,
        zi_nastere: newClient.zi_nastere ? new Date(newClient.zi_nastere).toISOString() : null,
        stare_civila: newClient.stare_civila,
        studii_finalizate: newClient.studii_finalizate,
        stare_domiciliu: newClient.stare_domiciliu,
        cont_salariu_banca: newClient.cont_salariu_banca,
        email: newClient.email,
        telefon: newClient.telefon,
        angajator: newClient.angajator,
        salariu_net: newClient.salariu_net,
        data_angajarii: newClient.data_angajarii ? new Date(newClient.data_angajarii).toISOString() : null,
        functia: newClient.functia,
        data_inregistrat: newClient.data_inregistrat ? new Date(newClient.data_inregistrat).toISOString() : null,
        etapa_creditare: newClient.etapa_creditare,
        notar: newClient.notar,
        data_semnare: newClient.data_semnare ? new Date(newClient.data_semnare).toISOString() : null,
        // Adaugă detaliile creditelor în payload
        credit_details: creditList.value.map(detail => ({
          tip_credit: detail.tip_credit,
          valoare: detail.valoare,
          data_acordare: detail.data_acordare,
          rata: detail.rata,
        }))

      };

      // Adaugă partener doar dacă este necesar
      if (newClient.stare_civila === "da") {
        payload.partener = {
          nume: partnerDetails.nume,
          prenume: partnerDetails.prenume,
          cnp: partnerDetails.cnp,
          varsta: partnerDetails.varsta,
          telefon: partnerDetails.telefon,
          email: partnerDetails.email,
          studii_finalizate: partnerDetails.studii_finalizate,
          salariu_net: partnerDetails.salariu_net,
          cont_salariu_banca: partnerDetails.cont_salariu_banca,
        };
      }
  
      // ✅ Afișează payload-ul în consolă pentru debug
      console.log("🔹 Payload trimis:", payload);
  
      const response = await axios.post(api_url + `customers/`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      addClientDialog.value = false;
  
      console.log("✅ Răspuns de la server:", response.data);
  
      // Poți adăuga logica pentru actualizarea UI-ului după adăugarea clientului

    } catch (error) {
      console.error("❌ Eroare la adăugarea clientului:", error.response?.data || error);
      alert("A apărut o eroare la adăugarea clientului. Te rugăm să încerci din nou.");
    }
  };


  const updateClientDetails = async (card) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token-ul de autentificare lipsește. Reautentifică-te.");
      return;
    }

    const cleanData = (data) => {
      const cleaned = { ...data };
      for (const key in cleaned) {
        if (cleaned[key] === "N/A" || cleaned[key] === "") {
          cleaned[key] = null; // Evităm să trimitem "N/A" sau string gol
        }
        if (["cnp", "varsta", "telefon", "salariuNet", "soldCreditCard", "valoareAprobata"].includes(key)) {
          cleaned[key] = cleaned[key] ? Number(cleaned[key]) : null; // Convertim în număr dacă e cazul
        }
        if (key.includes("data") && cleaned[key]) {
          cleaned[key] = new Date(cleaned[key]).toISOString().split("T")[0]; // Convertim la YYYY-MM-DD
        }
      }
      return cleaned;
    };

    // 🔹 Construim payload-ul fără `partener` dacă stare_civila este "nu"
    const payload = cleanData(card.details);
    // Asigură-te că etapa_creditare este trimisă corect
    payload.etapa_creditare = card.details.etapaCreditare;
    delete payload.etapaCreditare;


    if (card.details.stareCivila === "da" && card.details.partener) {
      payload.partener = cleanData(card.details.partener);
    } else {
      delete payload.partener; // Eliminăm complet `partener` din payload dacă nu există
    }

    console.log("📤 Trimitem update la server:", payload);

    const response = await axios.put(`${api_url}customers/${card.id}/`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("✅ Client actualizat cu succes:", response.data);
    alert("Modificările au fost salvate cu succes!");

    await fetchCustomers();
    card.dialog = false;

  } catch (error) {
    console.error("❌ Eroare la actualizare:", error.response?.data || error);
    alert(`A apărut o eroare: ${error.response?.data?.message || "Verifică datele și încearcă din nou."}`);
  }
};


  defineProps({
  currentPhase: String, // Current phase name
});

const creditPhases = [
  { name: "Initializare Aplicatie", color: "#03C03C" },
  { name: "Verificare Documente", color: "#03C03C" },
  { name: "Analiza Financiara", color: "#03C03C" },
  { name: "Aprobare Credit", color: "#03C03C" },
  { name: "Acordare Credit", color: "#03C03C" },
];

const getPhaseIndex = (etapaCreditare) => {
  return creditPhases.findIndex((phase) => phase.name === etapaCreditare);
};

const getPhaseStyle = (index, currentPhaseIndex) => {
  const isCompleted = index <= currentPhaseIndex;
  const phase = creditPhases[index];
  return {
    backgroundColor: isCompleted ? phase.color : 'lightgrey',
    opacity: isCompleted ? 1 : 0.5,
    flex: 1,
    height: '100%',
  };
};


const getPhaseColor = (etapaCreditare) => {
  const phase = creditPhases.find((phase) => phase.name === etapaCreditare);
  return phase ? phase.color : "grey"; // Default to grey if not found
};


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
    const token = localStorage.getItem("token");
    const response = await axios.get(api_url + `customers/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const customers = response.data;
    
    const customersData = customers.map((customer) => {
      const details = {
        nume: customer.nume || "N/A",
        prenume: customer.prenume || "N/A",
        cnp: customer.cnp || "N/A",
        varsta: customer.varsta || "N/A",
        ziNastere: customer.zi_nastere || "N/A",
        stareCivila: customer.stare_civila || "N/A",
        studiiFinalizate: customer.studii_finalizate || "N/A",
        stareDomiciliu: customer.stare_domiciliu || "N/A",
        contSalariuBanca: customer.cont_salariu_banca || "N/A",
        email: customer.email || "N/A",
        telefon: customer.telefon || "N/A",
        angajator: customer.angajator || "N/A",
        salariuNet: customer.salariu_net || "N/A",
        dataAngajarii: customer.data_angajarii || "N/A",
        functia: customer.functia || "N/A",
        dataInregistrat: customer.data_inregistrat || "N/A",
        etapaCreditare: customer.etapa_creditare || "N/A",
        notar: customer.notar || "N/A",
        dataSemnare: customer.data_semnare || "N/A",
        // Partener (dacă există)
        partener: customer.partener ? {
          nume: customer.partener.nume || "N/A",
          prenume: customer.partener.prenume || "N/A",
          cnp: customer.partener.cnp || "N/A",
          varsta: customer.partener.varsta || "N/A",
          telefon: customer.partener.telefon || "N/A",
          email: customer.partener.email || "N/A",
          studiiFinalizate: customer.partener.studii_finalizate || "N/A",
          salariuNet: customer.partener.salariu_net || "N/A",
          contSalariuBanca: customer.partener.cont_salariu_banca || "N/A",
        } : null,
                // 🔥 Integrarea creditelor
        credit_details: customer.credit_details 
          ? customer.credit_details.map(credit => ({
              tip_credit: credit.tip_credit || "N/A",
              valoare: credit.valoare || "N/A",
              data_acordare: credit.data_acordare || "N/A",
              rata: credit.rata || "N/A"
            }))
          : []
      };

      return {
        id: customer.id,
        avatar: `https://ui-avatars.com/api/?name=${customer.nume}+${customer.prenume}&background=random`,
        details,
        detailsPreview: Object.entries(details).slice(0, 9),
        title: `${customer.nume} ${customer.prenume}`,
        dialog: false,
      };
    });

    cards.splice(0, cards.length, ...customersData);
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

  // Get Client Docs from S3
const getClientDocs = () => {
  const baseURL = "https://eu-central-1.console.aws.amazon.com/s3/buckets/documentatie-banci";
  // return `${baseURL}?region=eu-central-1&bucketType=general&prefix=${encodeURIComponent(bankName)}/&showversions=false`;
  return `https://eu-north-1.console.aws.amazon.com/s3/buckets/clients-profiles?region=eu-north-1&bucketType=general&prefix=documente-clienti/&showversions=false`;
};
  // Apel fetch la încărcarea componentului
    onMounted(() => {
      fetchCustomers();
    });
  </script>
  
  <style lang="scss" scoped>
  .container {
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    min-height: 100vh;
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

.phase-progress-bar {
  position: relative;
  width: 100%;
}

.phases {
  display: flex;
  width: 100%;
  height: 100%;
}

.phase-section {
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.phase-label {
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

.v-data-table {
  background: transparent !important;
  box-shadow: none !important;
}

.v-data-table-header {
  background: transparent !important;
  color: white !important;
}

.v-data-table tbody tr {
  background: transparent !important;
}

.v-data-table tbody tr td {
  color: white !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.v-data-table-header th {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.v-data-table-header th {
  background: transparent !important;
  color: white !important;
  font-weight: bold !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
}
  </style>

