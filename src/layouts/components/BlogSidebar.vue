<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  interface Props {
    drawer? : boolean
  }

  withDefaults(defineProps<Props>(), {
    drawer: false,
  })

  defineEmits(['input'])

  const appData = useAppData()
  const search = ref('')
  const categories = ref<{
    name: string,
    count: number
  }[]>([
    { name: 'Daytime', count: 9 },
    { name: 'Nighttime', count: 5 },
    { name: 'Campfire', count: 3 },
    { name: 'Mountain', count: 8 },
    { name: 'Miscellaneous', count: 5 },
  ])
</script>

<template>
  <v-navigation-drawer
    :elevation="20"
    :model-value="drawer"
    class="py-5 pl-3"
    location="right"
    style="height: 100vh; width: 400px;"
    fixed
    hide-overlay
    @input="$emit('input', $event)"
  >
    <template #prepend>
      <v-btn
        style="position:absolute;right:16px;top:12px;"
        variant="plain"
        @click="$emit('input', false)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <Title size="body-2" title="Search" />
      <Divider align="left" />
      <v-row align="center" justify="center">
        <TextField
          v-model="search"
          class="pr-4 pb-5 pl-3"
          placeholder="Search"
          variant="outlined"
          hide-details
        />
      </v-row>
    </template>
    <!-- Categories -->
    <v-card flat>
      <Title
        class="mt-4"
        title="Categories"
      />
      <Divider align="left" />
      <v-list
        class="pt-0"
        dense
      >
        <v-list-item
          v-for="category in categories"
          :key="category.name"
        >
          <v-icon>mdi-chevron-right</v-icon>
          <span>{{ category.name }} ({{ category.count }})</span>
        </v-list-item>
      </v-list>
    </v-card>
    <!-- Popular Posts -->
    <v-card
      class="pr-3"
      flat
    >
      <Title
        class="mt-4"
        title="Popular Posts"
      />
      <Divider align="left" />
      <template v-for="(post, _i) in appData.blogPosts" :key="_i">
        <Post
          :post="post"
          clamp="2"
        />
      </template>
    </v-card>
    <!-- Photos -->
    <v-card
      class="pr-3"
      flat
    >
      <Title
        class="mt-4"
        title="Instagram Photos"
      />
      <Divider align="left" />
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <template v-for="ig in appData.instagramPosts" :key="ig.id">
          <v-col
            class="pb-5"
            cols="4"
          >
            <v-img
              :src="ig.src"
              height="100"
              max-width="100"
              min-height="100"
              fill
            />
          </v-col>
        </template>
      </v-row>
    </v-card>
    <!-- Tweets -->
    <v-card
      class="pr-3"
      flat
    >
      <Title
        class="mt-4"
        title="Latest Tweets"
      />
      <Divider align="left" />
      <template v-for="tweet in appData.tweets" :key="tweet.id">
        <Tweet
          :tweet="tweet"
        />
      </template>
    </v-card>
    <!-- Tags -->
    <v-card
      class="pr-3"
      flat
    >
      <Title
        class="mt-4"
        title="Tags"
      />
      <Divider align="left" />
      <v-row
        no-gutters
      >
        <template v-for="tag in appData.tags" :key="tag">
          <Tag
            :text="tag"
          />
        </template>
      </v-row>
    </v-card>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>

</style>
