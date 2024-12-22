<script setup lang="ts">
import BlogSidebar from './BlogSidebar.vue'
import BaseSidebar from './BaseSidebar.vue'
import { useAppData } from '@/stores/mockup'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import customerslogo from '@/assets/customers-logo.png'

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

<!-- <template>
  <v-app-bar
    color="yellow"
    :height="mdAndUp ? '80px' : '40px'" 
    scroll-behavior="elevate"
    style="right: 0;"
  >
    <v-img
      :max-width="mdAndUp ? '100px' : '50px'" 
      :src="customerslogo"
      class="hidden-sm-and-down"
      max-height="60px"
      min-height="60px"
    />
    <v-select
    primary
      label="Select Page"
      :items="['Dashboard', 'Clienti', 'Simulare Credit', 'Know How', 'Setari']"
      variant="solo-filled"
      bg-color="yellow"
      color="black"
      class="mt-3"
      hide-details
      density="compact"
      ></v-select>

    <v-spacer />
    
    Elemente distribuite pe toată lungimea
    <v-tabs
      v-if="mdAndUp"
      hide-slider
      class="d-flex flex-grow-1 justify-space-evenly align-center"
      v-bind="tabAttrs"
    >
      <template v-for="(item, index) in items" :key="item.name">
        <v-tab
          :exact="item.name === 'Home'"
          :ripple="false"
          :to="item.name === 'Home' ? '/' : ('/' + item.name.toLowerCase())"
          class="font-weight-medium text-white text-center d-flex align-center"
          min-width="50px"
          selected-class="text-white"
          variant="text"
        >
          <v-icon
            v-if="item.icon"
            :icon="item.icon"
            class="text-white me-2" 
            size="small"
          />
          <div class="me-2">{{ item.name }}</div>
          <div class="value-highlight ">{{ item.value }}</div> 
        </v-tab>
        <v-divider
          v-if="index < items.length - 1"
          vertical
          class="mx-1 black--text"
        />
      </template>
    </v-tabs>

]    <div v-else>
      <BlogSidebar
        v-if="route.name === '/blog'"
        :drawer="drawer"
        @input="drawer = $event"
      />
      <BaseSidebar
        v-else
        :drawer="drawer"
        :items="items"
        @input="drawer = $event"
      />
    </div>
  </v-app-bar>
</template> -->

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
