<script setup lang="ts">
  interface Props {
    color?: string
    align?: string
    dense?: boolean
    maxWidth?: number | string
    space?: number | string
  }

  const props = withDefaults(defineProps<Props>(), {
    maxWidth: 28,
    space: 6,
  })

  const margin = () => {
    switch (props.align) {
      case 'left': return 'mr-auto'
      case 'right': return 'ml-auto'
      default: return 'mx-auto'
    }
  }

  const classes = computed(() => {
    return [
      props.color,
      margin(),
      `mb-${props.space}`,
      props.dense && 'base-divider--dense',
    ]
  })

</script>

<template>
  <v-responsive
    :class="classes"
    :max-width="props.maxWidth"
    class="base-divider"
    v-bind="$attrs"
  >
    <v-divider :color="props.color" class="border-opacity-50" />
  </v-responsive>
</template>

<style lang="sass">
  .base-divider .v-divider
    border-width: 3px 0 0 0 !important

  .base-divider.base-divider--dense .v-divider
    border-width: 2px 0 0 0 !important
</style>
