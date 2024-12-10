<script setup lang="ts">
  import NotFoundImg from '@/assets/not-found.svg'
</script>

<template>
  <Section id="not-found" space="4">
    <v-img
      :src="NotFoundImg"
      max-height="500px"
      min-height="500px"
    >
      <v-theme-provider>
        <v-container class="fill-height px-5 py-12">
          <v-responsive
            class="d-flex align-center justify-center"
            height="100%"
            width="100%"
          >
            <Heading
              align="center"
              class="text-uppercase font-weight-bold pb-12"
              title="That page doesn't exist"
            />
          </v-responsive>
        </v-container>
      </v-theme-provider>
    </v-img>
  </Section>
</template>

<style lang="scss" scoped>

</style>
