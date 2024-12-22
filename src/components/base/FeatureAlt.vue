<script setup lang="ts">
  interface Props {
    icon?: string
    size?: string
    rounded?: boolean
    tile?: boolean
    avatarColor?: string
    outlined?: boolean
    outlineColor?: string
    title: string
    text: string
    to?: string
  }

  withDefaults(defineProps<Props>(), {
    rounded: false,
    tile: false,
    avatarColor: 'primary',
    text: '',
    size: 'text-h4',
  })
</script>

<template>
  <v-card
    class="feat-alt"
    flat
    v-bind="$attrs"
  >
    <v-card-text class="py-0 my-2">
      <v-row
        align="start"
        justify="center"
      >
        <v-col class="my-1" cols="4">
          <Avatar
            :color="avatarColor"
            :icon="icon"
            :outline-color="outlineColor"
            :outlined="outlined"
            :rounded="rounded"
            :tile="tile"
            class="mr-6"
            icon-size="25"
            size="70"
          />
        </v-col>
        <v-col
          class="text-left"
          cols="8"
        >
          <Title
            :size="size"
            :title="title"
            class="primary--text"
            space="2"
          />
          <Body
            :text="text"
            space="2"
          />
          <RouterLink
            v-if="to"
            :to="to"
            class="link"
          > Read More </RouterLink>
          <v-icon
            v-if="to"
            color="primary"
            icon="mdi-chevron-right"
            right
            small
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none !important
}
</style>
