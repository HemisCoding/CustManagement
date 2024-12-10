<script setup lang="ts"> import Heading from './Heading.vue'

  interface Props {
    size?: string
    weight?: string
    align?: string
    dense?: boolean
    space?: number | string
    mobileSize?: string
    mobileBreakPoint?: number | string
    tag?: string
    title: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'text-h4',
    mobileSize: 'title',
    weight: 'bold',
  })

</script>

<template>
  <Heading v-bind="props" />
</template>
