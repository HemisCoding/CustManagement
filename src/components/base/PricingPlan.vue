<script setup lang="ts">
  interface Props {
    features?: string[]
    frequency: string
    price: string
    title: string
    subtitle: string
    size?: string
  }

  withDefaults(defineProps<Props>(), {
    // @ts-ignore
    features: () => { return [] },
    size: 'text-h3',
  })
</script>

<template>
  <v-card
    color="#f5e5d7"
    width="352px"
    outlined
  >
    <v-row
      class="ma-8 flex-column"
    >
      <Title
        :size="size"
        :title="title"
        align="center"
        class="text-uppercase"
      />
      <Subtitle
        :title="subtitle"
        align="center"
      />
      <Heading
        :title="price"
        align="center"
      />
      <Body
        :text="`/${frequency}`"
        align="center"
        class="font-weight-medium"
        space="0"
      />
    </v-row>
    <v-divider v-if="features.length" />
    <v-row
      v-for="(feature, i) in features"
      :key="i"
      class="d-flex flex-column"
      no-gutters
    >
      <Body
        :text="feature"
        class="mx-auto pa-5"
        space="0"
      />
      <v-divider />
    </v-row>
    <v-card-actions class="px-8 py-10">
      <slot />
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
