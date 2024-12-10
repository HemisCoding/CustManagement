<script setup lang="ts">
  interface Props {
    color?: string
    icon: string
    heading: string
    body?: string
    rounded?: boolean
    tile?: boolean
    avatarColor?: string
    outlined?: boolean,
    outlineColor?: string,
    to?: string
  }

  withDefaults(defineProps<Props>(), {
    color: 'white',
    body: '',
    rounded: false,
    tile: false,
    avatarColor: 'primary',
  })
</script>

<template>
  <v-card
    variant="outlined"
    width="400"
  >
    <v-card-text>
      <v-row justify="center">
        <v-col class="my-1" cols="12">
          <Avatar
            :color="avatarColor"
            :icon="icon"
            :outline-color="outlineColor"
            :outlined="outlined"
            :rounded="rounded"
            :tile="tile"
            icon-size="25"
            size="70"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <span
            class="title primary--text"
            v-text="heading"
          />
        </v-col>
      </v-row>
      <v-row
        v-if="body"
        justify="center"
      >
        <v-col cols="12">
          <span
            class="body-2"
            v-text="body"
          />
        </v-col>
        <v-btn
          :to="to"
          class="text-white"
          color="primary"
          size="small"
          variant="outlined"
        >
          Read More
          <v-icon
            icon="mdi-chevron-right"
            location="right"
          />
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>
