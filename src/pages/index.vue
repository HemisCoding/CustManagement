<script setup lang="ts">
  import Hero from '@/views/Hero.vue'
  // import Clients from '@/views/Clients.vue';
  // import WelcomeFeatures from '@/views/WelcomeFeatures.vue'
  // import FlexibleCallout from '@/views/FlexibleCallout.vue'
  // import OurTeam from '@/views/OurTeam.vue'
  // import StandoutCallout from '@/views/StandoutCallout.vue'
  // import Info from '@/views/Info.vue'
  // import OurProduct from '@/views/OurProduct.vue'
  // import OurServices from '@/views/OurServices.vue'
  // import Reviews from '@/views/Reviews.vue'

  interface Props {
    id?: string
  }

  withDefaults(defineProps<Props>(), {
    id: 'home',
  })

</script>

<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <Hero />
        <!-- <Clients/> -->
        <!-- <OurProduct />  
        <WelcomeFeatures />
        <OurServices />
        <OurTeam />
        <Reviews />
        <StandoutCallout />
        <FlexibleCallout />
        <Info /> -->
      </v-col>
    </v-row>
  </section>

</template>
