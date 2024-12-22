<script setup lang="ts">
  interface Props {
    post: {
      src?: string
      title: string
      author?: string
      date: string
      commentCount?: string
      text: string
      description?: string
      to: string
      comments?: any[]
    },
    clamp?: number | string
  }

  withDefaults(defineProps<Props>(), {
    clamp: 0,
    text: '',
  })
</script>

<template>
  <v-row>
    <Avatar
      :key="`post-date`"
      class="ma-2"
      color="surface-variant"
      size="100"
      tile
    />
    <v-col class="pl-2">
      <Title
        :title="post.title"
        class="text-primary"
        size="title"
        space="0"
      />
      <Body
        :key="`post-text`"
        :clamp="clamp"
        :text="post.text"
        space="0"
      />
      <div>
        <RouterLink
          v-if="post.to"
          :to="post.to"
          class="text-primary"
          style="text-decoration: none;"
        > Read More </RouterLink>
        <template v-if="post.date">
          <v-icon
            class="ml-4 mr-2"
            icon="mdi-clock-outline"
            small
          />
          <span v-text="post.date" />
        </template>
        <template v-if="post.comments">
          <v-icon
            class="ml-4 mr-2"
            icon="mdi-comment"
          />
          <span
            class="font-italic"
            v-text="'comments'"
          />
        </template>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>

</style>
