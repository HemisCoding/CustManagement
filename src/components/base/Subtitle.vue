<script setup lang="ts">
  import Heading from './Heading.vue'

  interface Props {
    size?: string
    mobileSize?: string
    color?: string
    space?: string | number
    tag?: string
    title?: string
    weight?: number | string
  }

  withDefaults(defineProps<Props>(), {
    size: 'body-2',
    mobileSize: 'body-1',
    space: 0,
    tag: 'div',
    weight: 'regular',
  })

  // const classes = computed(() => {
  //   return [
  //     ...Heading.computed?.classes.call(props),
  //     props.color ? props.color : theme.current.value.dark ? 'white--text' : 'offblack--text',
  //   ]
  // })

</script>

<template>
  <Heading v-bind="$attrs" />
</template>
