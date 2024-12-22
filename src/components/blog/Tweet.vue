<script setup lang="ts">
  interface Props {
    tweet: {
      author: string
      text: string
      date?: string
    },
    clamp?: number | string
  }

  withDefaults(defineProps<Props>(), {
    clamp: 0,
  })
</script>

<template>
  <v-row no-gutters>
    <v-col class="shrink">
      <Avatar
        :key="`tweet-date`"
        class="ma-2"
        color="surface-light"
        icon="mdi-twitter"
        icon-color="#1A91DA"
        size="100"
        tile
      />
    </v-col>
    <v-col class="pl-2 py-2">
      <Subheading
        :title="tweet.author"
        class="primary--text"
        size="title"
        space="0"
      />
      <Body
        :key="`tweet-text`"
        :clamp="3"
        :text="tweet.text"
        space="0"
      />
      <div
        v-if="tweet.date"
        class="font-italic"
        v-text="tweet.date"
      />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>

</style>
