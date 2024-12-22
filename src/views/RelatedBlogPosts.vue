<script setup lang="ts">
  import JamisonMcandieImg from '@/assets/projects/jamison-mcandie-waZEHLRP98s-unsplash.jpg'
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
</script>

<template>
  <Section
    id="related-posts"
    class="px-2"
    space="1"
  >
    <Subheading
      title="Related Posts"
    />
    <Divider align="left" />
    <v-row no-gutters>
      <template v-for="post in appData.relatedPosts" :key="post.id">
        <v-col
          class="px-1"
          cols="12"
          md="4"
          sm="6"
        >
          <Card
            :post="post"
            :src="JamisonMcandieImg"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
