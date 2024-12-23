<script setup lang="ts">

import { useAppData } from '@/stores/mockup'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'

interface Props {
  block: boolean
  search: boolean
  color?: string
}

const props = defineProps<Props>()
const appData = useAppData()
const route = useRoute()
const { mdAndUp } = useDisplay()
const drawer = ref(false)
const items = ref([
  { name: 'Banci Partenere', icon: 'mdi-home', value: 12 },
  { name: 'Total Clienti', icon: 'mdi-account-group', value: 58 },
  { name: 'Aplicatii Finalizate', icon: 'mdi-archive-check', value: 35 },
  { name: 'Aplicatii in Procare', icon: 'mdi-progress-check', value: 10 },
  { name: 'Suma Total Creditata', icon: 'mdi-cash-multiple', value: '$1.2M' },
])

const tabAttrs = computed(() => {
  const attrs: { height: string } = { height: '0px' }
  if (props.block) attrs.height = '80px'
  return attrs
})
</script>

<template>
  <v-app>
    <v-nagivation-drawer
  app
  color="dark"
  width="60px"
  >
    
  </v-nagivation-drawer>
  </v-app>

</template>


<style scoped>

.value-highlight {
  font-size: 1.2rem; /* Dimensiune mai mare */
  font-weight: bold; /* Text îngroșat */
  color: black; /* Culoare portocalie pentru contrast */
  background-color: rgba(0, 0, 0, 0.1); /* Fundal estompat pentru evidențiere */
  border-radius: 5px; /* Colțuri rotunjite */
  padding: 2px 6px; /* Spațiere interioară */
}

.v-divider {
  background-color: black !important; /* Linia divider-ului este neagră */
  width: 5px; /* Grosime subțire pentru divider */
  height: 40%; /* Dividerul ocupă 40% din înălțimea app bar-ului */
}


</style>
