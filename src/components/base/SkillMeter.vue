<script setup lang="ts"> interface Props {
    width? : number | string
    skill: string
    value: number | string
  }

  withDefaults(defineProps<Props>(), {
    width: '100%',
  })
</script>

<template>
  <div :style="{ width }">
    <v-row
      class="my-2"
      justify="space-between"
      no-gutters
    >
      <span v-text="skill" />
      <span v-text="`${value}%`" />
    </v-row>
    <v-row
      class="my-2"
      no-gutters
    >
      <v-progress-linear
        :model-value="value"
        height="20"
        v-bind="$attrs"
      />
    </v-row>
  </div>
</template>

<style lang="scss" scoped>

</style>
