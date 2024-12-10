<script setup lang="ts">
import { defineProps } from 'vue';

interface SocialLink {
  link: string;
  icon: string;
}

interface Props {
  name: string;
  src: string;
  title: string;
  socialLinks: SocialLink[];
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props: hoverProps }">
      <v-card
        class="pa-3"
        max-height="400"
        variant="text"
        width="auto"
        tile
        v-bind="hoverProps"
      >
        <v-img
          :src="props.src"
          height="20vh"
          min-height="35vh"
          cover
        >
          <v-overlay
            :model-value="Boolean(isHovering)"
            class="d-flex transition-fast-in-fast-out v-card--reveal align-center justify-center"
            opacity="0.8"
            scrim="surface-light"
            contained
          >
            <v-btn
              v-for="site in props.socialLinks"
              :key="site.link"
              :href="site.link"
              class="mx-2"
              size="50"
              target="_blank"
              variant="outlined"
              rounded
            >
              <v-icon
                :icon="site.icon"
                class="mx-0"
                size="40"
              />
            </v-btn>
          </v-overlay>
        </v-img>
        <v-card-text
          class="pt-3"
          style="position: relative;"
        >
          <div
            class="font-weight-bold mb-2 text-left"
            v-text="props.name"
          />
          <div
            class="text-left"
            v-text="props.title"
          />
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<style lang="scss" scoped>

</style>
