<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
  const { name } = useDisplay()
  const shuffledProjects = computed(() => {
    const projs = appData.projects.slice()

    projs.sort(() => Math.random() - 0.5)
    const sizeMap = {
      xs: 3,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4,
      xxl: 5,
    }
    return projs.slice(0, sizeMap[name.value])
  })
</script>

<template>
  <Section
    id="gallery-alt"
    space="0"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <template v-for="(project, _i) in shuffledProjects" :key="_i">
        <v-col
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
