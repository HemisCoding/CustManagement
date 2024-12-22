<script setup lang="ts">
  import Hero from '@/views/Hero.vue'


  interface Props {
    id?: string
  }

  withDefaults(defineProps<Props>(), {
    id: 'home',
  })

</script>

<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <Hero />

      </v-col>
    </v-row>
  </section>

</template>
