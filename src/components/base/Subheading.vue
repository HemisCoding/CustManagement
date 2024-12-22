<script setup lang="ts"> import Heading from './Heading.vue'

  interface Props {
    size?: string
    sizeMobile?: string
    weight?: string
    align?: string
    dense?: boolean
    space?: number | string
    mobileBreakPoint?: number | string
    tag?: string
    title?: string
    color?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'text-h5',
    sizeMobile: 'text-h6',
    weight: 'bold',
  })

</script>

<template>
  <Heading v-bind="props" />
</template>
