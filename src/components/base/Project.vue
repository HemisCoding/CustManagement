<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
  id: string | number;
  src: string;
  date: string;
  category: string;
}

const props = defineProps<Props>();
</script>

<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <v-card
      class="px-auto"
      max-height="400"
      variant="flat"
      width="auto"
      tile
      v-bind="hoverProps"
    >
      <v-img
        :src="props.src"
        max-height="300"
        min-height="300"
        cover
      >
        <v-overlay
          :model-value="Boolean(isHovering)"
          class="d-flex transition-fast-in-fast-out v-card--reveal align-center justify-center text-offblock text-center"
          opacity="0.8"
          scrim="primary"
          contained
        >
          <v-btn
            :to="`/project/${props.id}`"
            class="ml-n2 mb-2"
            size="50"
            variant="tonal"
            rounded
          >
            <v-icon
              class="mx-0"
              color="primary"
              icon="mdi-link"
              size="40"
            />
          </v-btn>
        </v-overlay>
      </v-img>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>
/* Add any relevant styles here */
</style>
