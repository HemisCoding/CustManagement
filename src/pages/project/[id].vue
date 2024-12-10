<script setup lang="ts">
  import ProjectDetail from '@/views/ProjectDetail.vue'
  import ProjectGalleryAlt from '@/views/ProjectGalleryAlt.vue'
  import Info from '@/views/Info.vue'

  interface Props {
    id?: string
  }

  withDefaults(defineProps<Props>(), {
    id: 'portfolio-detail',
  })
</script>

<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <ProjectDetail />
        <ProjectGalleryAlt />
        <Info />
      </v-col>
    </v-row>
  </section>

</template>
