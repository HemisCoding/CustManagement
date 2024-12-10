<script setup lang="ts">

  import { useDisplay } from 'vuetify'

  const { width } = useDisplay()

  interface Props {
    align?: string
    dense?: boolean
    size?: string
    space?: number | string
    mobileSize?: string
    mobileBreakPoint?: number | string
    tag?: string
    title?: string
    weight?: string
    color?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    align: 'left',
    dense: false,
    size: 'text-h3',
    space: 4,
    mobileSize: 'text-h4',
    mobileBreakPoint: 768,
    tag: 'h1',
    weight: 'black',
    color: 'black',
  })

  const fontSize = () => {
    return width.value >= Number(props.mobileBreakPoint)
      ? props.size
      : props.mobileSize
  }

  const classes = computed(() => {
    return [
      fontSize(),
      `font-weight-${props.weight}`,
      `mb-${props.space}`,
      `text-${props.align}`,
      `text-${props.color}`,
    ]
  })
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="$attrs"
  >
    <template v-if="props.title">
      {{ props.title }}
    </template>

    <slot v-else />
  </component>
</template>
