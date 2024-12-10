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
            <v-col cols="12" md="6">

            </v-col>
            <v-col cols="12" md="2"  >
                <v-select
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
              <!-- Butonul apare doar dacă sunt mai mult de 8 detalii -->
              <v-btn
                v-if="Object.keys(card.details).length > 7"
                text color="primary"
                @click="openDialog(card)"
                class="text-caption2 see-more-button">
                Vezi mai mult
              </v-btn>
            </v-card-text>
          </v-card>
  
          <!-- Dialog -->
          <v-dialog v-model="card.dialog" persistent max-width="600px">
            <v-card>
              <v-card-title class="headline">{{ card.title }} - Detalii Complete</v-card-title>
              <v-card-text>
                <div v-for="(value, key) in card.details" :key="key">
                  <strong>{{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</strong> {{ value }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="closeDialog(card)">Închide</v-btn>
              </v-card-actions>
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
      avatar: 'https://i.pravatar.cc/300?img=1',
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
      avatar: 'https://i.pravatar.cc/300?img=2',
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
      title: 'Nume Client 1',
      avatar: 'https://i.pravatar.cc/300?img=1',
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
      title: 'Nume Client 1',
      avatar: 'https://i.pravatar.cc/300?img=1',
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
      title: 'Nume Client 1',
      avatar: 'https://i.pravatar.cc/300?img=1',
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
      title: 'Nume Client 1',
      avatar: 'https://i.pravatar.cc/300?img=1',
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
      title: 'Nume Client 1',
      avatar: 'https://i.pravatar.cc/300?img=1',
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
      title: 'Nume Client 1',
      avatar: 'https://i.pravatar.cc/300?img=1',
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
    height: 100vh;
  }
  
  .card-style1 {
    color: white;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    height: 40vh;
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
  </style>
  