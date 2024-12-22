<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
  const tab = ref('toate')
  const tabs = ref([
    { title: 'Toate', category: 'toate' },
    { title: 'Rezidential', category: 'rezidential' },
    { title: 'Usi', category: 'usi' },
    { title: 'Garaje', category: 'garaje' },
    { title: 'Foisoare', category: 'foisoare' },
    { title: 'Jaluzele', category: 'jaluzele' },
    { title: 'Show Room', category: 'showroom' },

  ])
  const visibleProjects = computed(() => {
    const projects = appData.projects.filter(project => {
      if (typeof tab.value === 'number' && (tab.value === 0 || project.category.toLowerCase() === tabs.value[tab.value].category.toLowerCase())) return true
      if (typeof tab.value === 'string' && (tab.value.toLowerCase() === 'toate' || project.category.toLowerCase() === tab.value.toLowerCase())) return true

      return false
    })
    return projects
  })
</script>

<template>
  <Section
    id="gallery"
    space="16"
  >
    <div class="justify-center align-center">
      <v-tabs
        v-model="tab"
        align-tabs="center"
      >
        <v-tab
          v-for="t in tabs"
          :key="t.category"
          :href="`#${t.category.toLowerCase()}`"
        > {{ t.title }} </v-tab>
      </v-tabs>
    </div>
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <template v-for="(project, _i) in visibleProjects" :key="_i">
        <v-col
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <Project v-bind="project" />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
