<script setup lang="ts">
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()

  interface Props {
    statNumber: number | string
    text: string
    color?: string
    outlined?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    outlined: false,
  })

  const styles = computed(() => {
    return {
      border: (props.outlined && !mobile.value) ? `2px ${props.color} solid !important` : 'unset',
    }
  })
</script>

<template>
  <v-avatar
    :style="styles"
    size="270"
  >
    <div
      :class="`text-${color}`"
    >
      <Heading
        :color="props.color"
        align="center"
        space="2"
      > {{ props.statNumber }} </Heading>
      <Divider class="border-opacity-50" color="surface-variant" />
      <Body
        :text="props.text"
        align="center"
        class="text-uppercase text-subtitle-1 text-medium-emphasis"
        space="2"
      />
    </div>
  </v-avatar>
</template>

<style lang="scss" scoped>

</style>
