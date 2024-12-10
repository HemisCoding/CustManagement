<script setup lang="ts">
  import AppBar from '@/layouts/components/AppBar.vue'
  // import SideBarPages from './components/SideBarPages.vue';
  import View from '@/layouts/components/View.vue'
  import { useDisplay } from 'vuetify'

  const { mdAndUp } = useDisplay()

</script>

<template>
  <v-app>
    <AppBar
      block
      search
    />

    <View />
  </v-app>
</template>
