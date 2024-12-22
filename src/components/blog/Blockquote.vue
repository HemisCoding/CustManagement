<script setup lang="ts">
  interface Props {
    author: string
    quote: string
  }

  defineProps<Props>()

</script>

<template>
  <v-card
    class="ma-4"
    color="surface-light"
    flat
  >
    <v-card-text class="font-italic">
      <Body
        :text="quote"
        space="0"
      />
    </v-card-text>
    <v-card-text class="text-primary text-uppercase">
      <Title
        :title="author"
        class="text-uppercase"
        color="text-primary"
        size="text-subtitle-2"
        space="0"
        weight="bold"
      />
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
