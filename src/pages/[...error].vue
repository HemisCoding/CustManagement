<script setup lang="ts">
  interface Props {
    id: string
  }

  withDefaults(defineProps<Props>(), {
    id: '404',
  })
</script>

<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <NotFound />
      </v-col>
    </v-row>
  </section>

</template>
