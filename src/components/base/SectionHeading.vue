<script setup lang="ts">
  interface Props {
    align : string
    color: string
    icon: string
    outlined: boolean
    space: number | string
    subtitle: number | string
    text: string
    title: string
    size: number | string
  }

  const props = withDefaults(defineProps<Props>(), {
    align: 'center',
    color: 'primary',
    space: 12,
    size: 64,
  })

  const classes = computed(() => {
    return [
      `text-${props.align}`,
      `mb-${props.space}`,
    ]
  })
</script>

<template>
  <div
    :class="classes"
    class="base-section-heading"
  >
    <base-avatar
      v-if="props.icon"
      :icon="props.icon"
      :outlined="props.outlined"
      class="mb-4"
      color="primary"
      dark
    />

    <base-subtitle
      v-if="props.subtitle"
      :title="props.subtitle"
      space="1"
      tag="h2"
    />

    <base-subheading
      v-if="props.title"
      :align="props.align"
      :title="props.title"
      class="text-uppercase"
      space="2"
    />

    <base-body
      v-if="$slots.default || props.text"
      class="mx-auto"
      max-width="700"
    >
      <slot v-if="$slots.default" />

      <template v-else>
        {{ text }}
      </template>
    </base-body>
  </div>
</template>
