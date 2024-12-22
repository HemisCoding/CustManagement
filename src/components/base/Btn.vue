<script setup lang="ts">
  interface Props {
    icon?: string
    color?: string
  }

  withDefaults(defineProps<Props>(), {
    color: 'primary',
  })

</script>

<template>
  <v-btn
    :color="color"
    v-bind="$attrs"
  >
    <slot v-if="!icon" />
    <v-icon
      v-else
      :icon="icon"
    />
  </v-btn>
</template>
