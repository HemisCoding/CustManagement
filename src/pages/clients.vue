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
            <div v-for="(value, key) in card.details" :key="key" v-if="Object.keys(card.details).indexOf(key) < 10">
              <strong>{{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</strong> {{ value }}
            </div>
            <v-divider class="my-3 devider-page"></v-divider>

            <v-btn
              v-if="Object.keys(card.details).length > 7"
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
                <v-col cols="6">
                  <div v-for="(value, key, index) in card.details" :key="index" v-if="index % 2 !== 0">
                    <strong>{{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</strong> {{ value }}
                  </div>
                </v-col>
                <v-col cols="6">
                  <div v-for="(value, key, index) in card.details" :key="index" v-if="index % 2 !== 0">
                    <strong>{{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</strong> {{ value }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider class="my-3 devider-page"></v-divider>

            <v-row>
              <v-col cols="3" md="3">
              <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn class="docs" color="primary" text @click="">Documente Client</v-btn>
            </v-card-actions>
            </v-col>
            <!-- Buton de închidere -->
            <v-col cols="3" md="9">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="closeDialog(card)">Închide</v-btn>
            </v-card-actions>
            </v-col>
            </v-row>

          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

  
  <script setup>
  import { reactive, computed, ref } from 'vue';
  
  const search = ref('');

  const sortOrder = ref('');
  const sortOptions = ['Urgent de contactat', 'A-Z', 'Z-A', 'Recenți adăugați'];

  
  const cards = reactive([
    {
      id: 1,
      title: 'Nume Client 1',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email1@example.com',
        phone: '1234567890',
        cnp: '1980123456789',
        adresa: 'Adresa 1',
        numarCont: 'RO49AAAA1B31007593840000',
        status: 'Activ',
        scorCredit: '750',
        venitAnual: '30000',
        venitLunar: '4000',
        Altceva: 'altceva',
      },
      dialog: false
    },
    {
      id: 2,
      title: 'Nume Client 2',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email2@example.com',
        phone: '2345678901',
        cnp: '2980123456789',
        adresa: 'Adresa 2',
        numarCont: 'RO50BBBB2C20008594850000',
        status: 'Inactiv',
        scorCredit: '800',
        venitAnual: '40000',
        venitLunar: '5000',
        Altceva: 'altceva2',
      },
      dialog: false
    },
    {
      id: 1,
      title: 'Nume Client 3',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email1@example.com',
        phone: '1234567890',
        cnp: '1980123456789',
        adresa: 'Adresa 1',
        numarCont: 'RO49AAAA1B31007593840000',
        status: 'Activ',
        scorCredit: '750',
        venitAnual: '30000',
        venitLunar: '4000',
        Altceva: 'altceva',
      },
      dialog: false
    },
    {
      id: 1,
      title: 'Nume Client 4',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email1@example.com',
        phone: '1234567890',
        cnp: '1980123456789',
        adresa: 'Adresa 1',
        numarCont: 'RO49AAAA1B31007593840000',
        status: 'Activ',
        scorCredit: '750',
        venitAnual: '30000',
        venitLunar: '4000',
        Altceva: 'altceva',
      },
      dialog: false
    },
    {
      id: 1,
      title: 'Nume Client 5',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email1@example.com',
        phone: '1234567890',
        cnp: '1980123456789',
        adresa: 'Adresa 1',
        numarCont: 'RO49AAAA1B31007593840000',
        status: 'Activ',
        scorCredit: '750',
        venitAnual: '30000',
        venitLunar: '4000',
        Altceva: 'altceva',
      },
      dialog: false
    },
    {
      id: 1,
      title: 'Nume Client 6',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email1@example.com',
        phone: '1234567890',
        cnp: '1980123456789',
        adresa: 'Adresa 1',
        numarCont: 'RO49AAAA1B31007593840000',
        status: 'Activ',
        scorCredit: '750',
        venitAnual: '30000',
        venitLunar: '4000',
        Altceva: 'altceva',
      },
      dialog: false
    },
    {
      id: 1,
      title: 'Nume Client 7',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email1@example.com',
        phone: '1234567890',
        cnp: '1980123456789',
        adresa: 'Adresa 1',
        numarCont: 'RO49AAAA1B31007593840000',
        status: 'Activ',
        scorCredit: '750',
        venitAnual: '30000',
        venitLunar: '4000',
        Altceva: 'altceva',
      },
      dialog: false
    },
    {
      id: 1,
      title: 'Nume Client 8',
      avatar: 'https://ui-avatars.com/api/?name=Nume+Client&background=random',
      details: {
        email: 'email1@example.com',
        phone: '1234567890',
        cnp: '1980123456789',
        adresa: 'Adresa 1',
        numarCont: 'RO49AAAA1B31007593840000',
        status: 'Activ',
        scorCredit: '750',
        venitAnual: '30000',
        venitLunar: '4000',
        Altceva: 'altceva',
      },
      dialog: false
    },
    // Define additional cards here with unique ids and avatars
  ]);
  
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
    height: 45vh;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card-style1:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .v-card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .v-avatar img {
  object-fit: cover;
}
  
  .text-caption2 {
    font-weight: 300;
    font-family: 'Courier New', Courier, monospace;
    font-size: 90% !important;
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
  