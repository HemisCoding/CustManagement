<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
  const { params } = useRoute()
  const activeProject = computed(() => {
    const id = params.id
    return appData.projects.find(prj => +prj.id === +id)
  })
</script>

<template>
  <Section
    id="story-alt"
    class="bg-surface-light pb-12"
    space="10"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :src="activeProject?.src"
          class="ma-1"
          min-height="500px"
          min-width="50%"
        />
      </v-col>
      <v-col
        class="px-5 py-2"
        cols="12"
        md="6"
      >
        <Heading

        <Subtitle
          title="Date"
          weight="bold"
        />
        <Body
          :text="activeProject?.date"
          space="2"
        />
        <Subtitle
          title="Description"
          weight="bold"
        />

        <Subtitle
          title="Tags"
          weight="bold"
        />

        <div />
        <Btn
          class="mt-10 elevation-0 mx-1"
          color="black"
          dark
          depressed
        >
          <span
            class="font-weight-black text-none"
            v-text="'Order Work'"
          />
        </Btn>
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
