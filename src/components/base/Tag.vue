<script setup lang="ts">
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  interface Props {
    text: string
  }
  defineProps<Props>()

  const classes = computed(() => {
    return [
      theme.current.value.dark ? 'white--text' : 'offblack--text',
      theme.current.value.dark ? 'text--lighten-1' : 'text--darken-1',
    ]
  })

</script>

<template>
  <v-chip
    :class="classes"
    class="base-tag mx-1 my-2"
    v-bind="$attrs"
  >
    <div
      v-if="text"
      v-text="text"
    />
    <slot v-else />
  </v-chip>
</template>
