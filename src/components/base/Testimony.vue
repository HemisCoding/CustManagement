<script setup lang="ts">
  import { VImg, VSheet } from 'vuetify/lib/components/index.mjs'

  interface Props {
    src: string
    backgroundSrc?: string
    customer: {
      review: string,
      name: string,
      title: string
    }
  }

  const props = defineProps<Props>()

  const wrapper = computed(() => {
    const imgProps = {
      src: props.backgroundSrc,
      maxWidth: '100%',
      maxHeight: '500px',
      gradient: 'to right, rgba(241, 241, 241, .2), rgba(241, 241, 241, .5)',
    }
    return {
      name: props.backgroundSrc ? VImg : VSheet,
      props: props.backgroundSrc ? imgProps : { height: '500px', width: '100%', color: '#f1f1f1' },
    }
  })
</script>

<template>
  <component
    :is="wrapper.name"
    v-bind="wrapper.props"
  >
    <v-container class="fill-height">
      <v-responsive
        class="mx-auto shrink text-center"
        max-width="90%"
        width="700"
      >
        <v-avatar
          class="mb-6"
          size="128"
        >
          <v-img
            :src="props.src"
            min-height="128px"
          />
        </v-avatar>

        <p class="font-italic text-center black--text mb-6 d-block">
          "{{ props.customer.review }}"
        </p>

        <h4 class="text-center text-subtitle-1 text-uppercase">
          - {{ props.customer.name }}
        </h4>

        <p
          v-if="props.customer.title"
          class="text-center primary--text darken-2 font-weight-medium"
        >
          {{ props.customer.title }}
        </p>
      </v-responsive>
    </v-container>
  </component>
</template>

<style lang="scss" scoped>

</style>
