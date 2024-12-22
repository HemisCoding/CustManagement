<script setup lang="ts">
import { useAppData } from '@/stores/mockup'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()
const drawer = ref(false) // Definește `drawer` ca ref reactiv

// Definește `Props` pentru items
interface Props {
  items: {
    icon: string
    name: string
  }[] | []
}

// Folosește defineProps pentru a accesa items din props
const { items } = withDefaults(defineProps<Props>(), {
  items: () => []
})

const appData = useAppData()

// Închide drawer-ul la schimbarea rutei
watch(
  () => router.currentRoute.value,
  () => {
    drawer.value = false
  }
)
</script>

<template>


  <v-btn icon
        @click="drawer = !drawer">
        <v-icon style="margin-right: 3vw;">
          mdi-menu
        </v-icon>
      </v-btn>

  <v-navigation-drawer
    v-model="drawer"
    :elevation="20"
    location="right"
    style="height: 100vh;"
    fixed
    hide-overlay
    class="bg-blue"
  >
  
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.name"
        :exact="item.name === 'Home'"
        :ripple="false"
        :to="item.name === 'Home'? '/' : item.name"
        :value="item.name"
        selected-class="text-white"
      >
        <template #append>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title> {{ item.name }} </v-list-item-title>
      </v-list-item>
    </v-list>
    <template #append>
      <v-btn
        :href="`tel:${appData.contact.phone.value}`"
        :ripple="false"
        variant="text"
      >
        <v-icon
          :icon="appData.contact.phone.icon"
          class="mr-2"
        />
        <span
          v-text="appData.contact.phone.value"
        />
      </v-btn>

      <v-btn
        :href="`mailto:${appData.contact.email.value}`"
        :ripple="false"
        height="60px"
        variant="text"
        tile
      >
        <v-icon
          :icon="appData.contact.email.icon"
          class="mr-2"
        />
        <span
          v-text="appData.contact.email.value"
        />
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>

</style>
