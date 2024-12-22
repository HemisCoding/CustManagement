<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  const { mdAndUp } = useDisplay()
</script>

<template>
  <v-main>
    <section :style="mdAndUp? 'margin-top: 0px;': 'margin-top:0px;'">
      <RouterView />
    </section>
  </v-main>
</template>
