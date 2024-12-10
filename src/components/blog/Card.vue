<script setup lang="ts">
  interface Props {
    post: {
      id: number
      src: string
      title: string
      author: string
      date: string
      commentCount: number
      description: string
    }
  }

  defineProps<Props>()

</script>

<template>
  <v-card
    flat
    outlined
  >
    <v-img
      :src="post.src"
      height="350"
    />

    <v-card-title>
      <Title :title="post.title" />
    </v-card-title>
    <v-card-text>
      <div class="text-caption">
        <v-icon
          icon="mdi-file-document-edit-outline"
          small
        />
        <span
          class="ma-1"
          v-text="post.author"
        />
        <v-icon
          class="ml-2"
          icon="mdi-clock"
          small
        />
        <span
          class="ma-1"
          v-text="post.date"
        />
        <v-icon
          class="ml-2"
          icon="mdi-comment"
          small
        />
        <span
          class="ma-1"
          v-text="post.commentCount"
        />
        <span v-text="'Comments'" />
      </div>
      <Body
        :text="post.description"
        class="mt-4"
      />
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
