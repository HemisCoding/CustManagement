<script setup lang="ts">
  import Story from '@/views/Story.vue'
  import StoryAlt from '@/views/StoryAlt.vue'
  import OurTeam from '@/views/OurTeam.vue'
  import Stats from '@/views/Stats.vue'
  import Info from '@/views/Info.vue'
  import Reviews from '@/views/Reviews.vue'
  interface Props {
    id?: string
  }

  withDefaults(defineProps<Props>(), {
    id: 'about',
  })
</script>

<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <Story />
        <!-- <StoryAlt />
        <OurTeam />
        <Reviews />
        <Stats />
        <Info /> -->
      </v-col>
    </v-row>
  </section>

</template>
