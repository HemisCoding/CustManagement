<script setup lang="ts"> interface Props {
    name: string
    bio: string
    src: string
  }

  defineProps<Props>()
</script>

<template>
  <v-card
    class="ma-4"
    color="surface-light pa-2"
    flat
  >
    <v-card-text>
      <v-row>
        <v-avatar
          size="128"
          tile
        >
          <v-img
            :src="src"
            min-height="128px"
          />
        </v-avatar>
        <v-col>
          <Title
            :title="name"
            size="text-h6"
            space="2"
            weight="bold"
          />
          <Body
            :text="bio"
            space="0"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
