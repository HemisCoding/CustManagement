<script setup lang="ts">
  interface Props {
    title: string
    author: string
    date: string
    commentCount: number | string
  }

  defineProps<Props>()
</script>

<template>
  <div>
    <Subheading
      :title="title"
    />
    <div class="text-caption">
      <v-icon
        icon="mdi-file-document-edit-outline"
        small
      />
      <span
        class="ma-1"
        v-text="`by ${author}`"
      />
      <v-icon
        class="ml-2"
        icon="mdi-clock"
        small
      />
      <span
        class="ma-1"
        v-text="date"
      />
      <v-icon
        class="ml-2"
        icon="mdi-comment"
        small
      />
      <span
        class="ma-1"
        v-text="commentCount"
      />
      <span v-text="'Comments'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
