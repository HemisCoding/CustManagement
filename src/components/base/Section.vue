<script setup lang="ts">
  // import { useDimension } from 'vuetify/lib/composables'
  import { useDisplay } from 'vuetify'
  // const { dimensionStyles } = useDimension()
  const { mdAndUp } = useDisplay()

  interface Props {
    space?: number | string
  }

  const props = withDefaults(defineProps<Props>(), {
    space: 96,
  })

  const styles = computed(() => {
    const space = mdAndUp
      ? Number(props.space)
      : Number(props.space) / 2

    return {
      // ...dimensionStyles,
      padding: `${space}px 0`,
    }
  })
</script>

<template>
  <section
    v-bind="$attrs"
    :style="styles"
  >
    <slot />
  </section>
</template>
