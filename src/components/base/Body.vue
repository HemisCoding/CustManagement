<script setup lang="ts">
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  interface Props {
    html?: string
    maxWidth?: number | string | undefined
    space?: number | string
    tag?: string
    align?: 'left' | 'center' | 'right'
    text?: string
    clamp?: string | number
  }

  const props = withDefaults(defineProps<Props>(), {
    maxWidth: undefined,
    space: 10,
    tag: 'p',
    align: 'left',
    clamp: 'none',
  })

  const classes = computed(() => {
    return [
      theme.current.value.dark ? 'white--text' : 'offblack--text',
      theme.current.value.dark ? 'text--lighten-1' : 'text--darken-1',
      `text-${props.align}`,
      `mb-${props.space}`,
    ]
  })

  const styles = computed(() => {
    return { maxWidth: `${props.maxWidth}px` }
  })

  const textStyles = computed(() => {
    return props.clamp === 'none' ? {} : {
      display: '-webkit-box',
      '-webkit-line-clamp': String(props.clamp),
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    }
  })
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :style="styles"
    class="base-body body-1"
    v-bind="$attrs"
  >
    <!-- Only use v-html for user data -->

    <div
      v-if="text"
      :style="(textStyles as any)"
      v-text="text"
    />

    <div
      v-else-if="html"
      :style="(textStyles as any)"
      v-html="html"
    />

    <slot v-else />
  </component>
</template>
