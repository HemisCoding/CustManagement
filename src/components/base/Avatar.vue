<script setup lang="ts">
  interface Props {
    icon? : string
    iconColor?: string
    size?: string | number
    color?: string
    text?: string
    tile?: boolean
    rounded?: boolean
    outlined?: boolean
    outlineColor?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: '130',
    color: 'primary',
  })

  const factor = ref(6)

  const localIconColor = computed(() => {
    if (props.iconColor) return props.iconColor
    return getIconColor()
  })
  const classes = computed(() => [props.outlined && 'base-avatar--outlined'])
  const outlineSize = computed(() => Number(props.size) + (Number(props.size) / factor.value))
  const outlineStyles = computed(() => {
    const margin = Number(props.size) / (factor.value * 2)

    return {
      borderRadius: props.rounded
        ? '25%'
        : props.tile
          ? '0%'
          : '50%',
      // Aligns the outline content with the content
      opacity: props.outlineColor ? 1 : 0.4,
      margin: props.icon ? `-${margin}px 0 0 -${margin}px` : `${margin}px 0 0 ${margin}px`,
    }
  })
  const avatarStyles = computed(() => {
    return {
      borderRadius: props.rounded
        ? '25%'
        : props.tile
          ? '0%'
          : '50%',
    }
  })

  const getIconColor = () => {
    const defaultColor = props.color === 'primary' ? 'white' : 'primary'
    return defaultColor
  }
</script>

<template>
  <div
    :class="classes"
    class="base-avatar d-inline-flex"
  >
    <v-avatar
      v-if="props.outlined"
      :color="props.outlineColor || props.color || 'surface-light'"
      :size="outlineSize"
      :style="outlineStyles"
      class="base-avatar__outline"
    />

    <v-avatar
      ref="avatar"
      :color="props.color || 'white'"
      :size="props.size"
      :style="avatarStyles"
      :tile="props.tile"
      class="base-avatar__avatar"
      v-bind="$attrs"
    >
      <v-icon
        v-if="props.icon"
        :color="localIconColor"
        :icon="props.icon"
        :size="Number(props.size) / 3"
      />
      <span
        v-else-if="text"
        class="text-wrap"
        v-text="text"
      />
    </v-avatar>
  </div>
</template>

<style lang="sass" scoped>
  .base-avatar
    border-radius: 50%
    position: relative
    overflow: visible

    &__outline
      position: absolute !important
      left: 0
      top: 0

    &--outlined
      background-color: #FFFFFF
</style>
