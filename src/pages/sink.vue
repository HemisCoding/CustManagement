<script setup lang="ts">
  const skills = ref<{
    name: string
    value: number
  }[]>(
    [
      { name: 'Vue.js', value: 100 },
      { name: 'Python', value: 90 },
      { name: 'Javascript', value: 100 },
      { name: 'Node', value: 80 },
      { name: 'Swift', value: 50 },
    ]
  )

  const teamSocialLinks = ref<{
    link: string
    icon: string
  }[]>(
    [
      { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
      { link: 'https://twitter.com', icon: 'mdi-twitter' },
      { link: 'mailto:sample@example.com', icon: 'mdi-email' },
    ]
  )

  const planFeatures = ref<string[]>(
    [
      'Wordpress',
      'HTML5 & CSS3',
      'PSD Files',
      'Unlimited Support',
    ]
  )

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href

</script>

<template>
  <Section id="sink" space="16">
    <v-container
      id="home"
      class="fill-height text-center mx-0 px-0 pt-0"
      style="max-width: none"
      tag="section"
    >
      <v-row justify="start">
        <template v-for="skill in skills" :key="skill.name">
          <v-col
            cols="6"
          >
            <SkillMeter
              :skill="skill.name"
              :value="skill.value"
              class="px-3"
              color="blue"
              rounded
            />
          </v-col>
        </template>
      </v-row>
      <!-- Feature Cards -->
      <v-row justify="center">
        <Feature
          icon="mdi-auto-fix"
          max-width="400px"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Unlimited Colors"
        />
        <Feature
          icon="mdi-flash"
          max-width="400px"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Responsive Design"
        />
        <Feature
          icon="mdi-recycle"
          max-width="400px"
          outline-color="black"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Awesome Sliders"
          outlined
        />
        <Feature
          icon="mdi-water"
          max-width="400px"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Unlimited Colors"
        />
      </v-row>
      <v-row justify="center">
        <Testimony
          :background-src="getImgUrl('../assets/background-light.png')"
          :customer="{ review: 'Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima.', name: 'Sample Name', title: 'New Customer' }"
          :src="getImgUrl('../assets/testimony/testimony-1.jpg')"
        />
        <Testimony
          :customer="{ review: 'Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima.', name: 'Sample Name', title: 'New Customer' }"
          :src="getImgUrl('../assets/testimony/testimony-3.jpg')"
        />
      </v-row>
      <v-row justify="center" style="margin-top: 10px;">
        <FeatureAlt
          icon="mdi-auto-fix"
          size="text-h6"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Friendly Support"
          to="/"
        />
        <FeatureAlt
          avatar-color="blue"
          icon="mdi-sync mdi-rotate-270"
          size="text-h6"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Responsive"
          to="/"
          outlined
        />
        <FeatureAlt
          icon="mdi-cog"
          size="text-h6"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Awesome Sliders"
          to="/"
        />
        <FeatureAlt
          icon="mdi-water"
          size="text-h6"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Unlimited Colors"
          to="/"
          outlined
        />
      </v-row>
      <v-row
        class="pa-3"
        justify="center"
        style="width: 100% ;"
      >
        <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <TeamMember
            :social-links="teamSocialLinks"
            :src="getImgUrl('../assets/team/rana-sawalha-IhuHLIxS_Tk-unsplash.jpg')"
            name="Neil Barnett"
            title="CEO"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <TeamMember
            :social-links="teamSocialLinks"
            :src="getImgUrl('../assets/team/christopher-campbell-rDEOVtE7vOs-unsplash.jpg')"
            name="Sherri Cayne"
            title="COO"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <TeamMember
            :social-links="teamSocialLinks"
            :src="getImgUrl('../assets/team/dan-ROJFuWCsfmA-unsplash.jpg')"
            name="Erica Baker"
            title="CTO"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <TeamMember
            :social-links="teamSocialLinks"
            :src="getImgUrl('../assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg')"
            name="Wesley Graves"
            title="CFO"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <FeatureAlt
          icon="mdi-auto-fix"
          max-width="370px"
          size="text-h5"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Friendly Support"
          to="/"
          outlined
        />
        <FeatureAlt
          avatar-color="black"
          icon="mdi-sync mdi-rotate-270"
          max-width="370px"
          size="text-h5"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Responsive"
          to="/"
          outlined
        />
        <FeatureAlt
          icon="mdi-cog"
          max-width="370px"
          size="text-h5"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Awesome Sliders"
          to="/"
        />
      </v-row>
      <v-row justify="center">
        <PricingPlan
          :features="planFeatures"
          class="mx-5 my-1"
          frequency="month"
          price="$59.99"
          size="text-h5"
          subtitle="Starting at"
          title="Basic Plan"
        >
          <v-btn
            class="px-12 mx-auto"
            color="primary"
            depressed
            large
          > Order Now </v-btn>
        </PricingPlan>
        <PricingPlan
          :features="planFeatures"
          class="mx-5 my-1"
          frequency="month"
          price="$99.99"
          size="text-h5"
          subtitle="Starting at"
          title="Pro Plan"
        >
          <v-btn
            class="px-12 mx-auto"
            color="primary"
            depressed
            large
          > Order Now </v-btn>
        </PricingPlan>
        <PricingPlan
          :features="planFeatures"
          class="mx-5 my-1"
          frequency="month"
          price="$999.99"
          size="text-h5"
          subtitle="Starting at"
          title="Enterprise Plan"
        >
          <v-btn
            class="px-12 mx-auto"
            color="primary"
            depressed
            large
          > Order Now </v-btn>
        </PricingPlan>
      </v-row>
      <v-row justify="center">
        <FeatureAlt
          icon="mdi-auto-fix"
          max-width="400px"
          size="text-h5"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Friendly Support"
          to="/"
          rounded
        />
        <FeatureAlt
          avatar-color="black"
          icon="mdi-sync mdi-rotate-270"
          max-width="400px"
          size="text-h5"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Responsive"
          to="/"
          rounded
        />
        <FeatureAlt
          icon="mdi-cog"
          max-width="400px"
          size="text-h5"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Awesome Sliders"
          to="/"
          rounded
        />
      </v-row>
      <v-row
        class="pt-12"
        justify="center"
      >
        <FeatureCard
          body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          class="mx-3 mt-12"
          heading="Friendly Support"
          icon="mdi-auto-fix"
          to="/"
        />
        <FeatureCard
          body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          class="mx-3 mt-12"
          heading="Fusion Builder"
          icon="mdi-recycle"
          outline-color="white"
          to="/"
          outlined
        />
        <FeatureCard
          body="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          class="mx-3 mt-12"
          heading="Unlimited Colors"
          icon="mdi-water"
          to="/"
        />
      </v-row>
      <v-row justify="center">
        <Feature
          icon="mdi-auto-fix"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Unlimited Colors"
          tile
        />
        <Feature
          icon="mdi-flash"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Responsive Design"
          tile
        />
        <Feature
          icon="mdi-recycle"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Awesome Sliders"
          tile
        />
        <Feature
          icon="mdi-water"
          text="Lorem ipsum dolor sit amet, consequam, adipiscingconmentum tristiidem nemo minima."
          title="Unlimited Colors"
          tile
        />
      </v-row>
      <v-row justify="center">
        <Stat
          :outlined="true"
          stat-number="1458"
          text="Lines of Code"
        />
        <Stat
          stat-number="768"
          text="Works"
        />
        <Stat
          :outlined="true"
          stat-number="475"
          text="Cups of coffee"
        />
        <Stat
          stat-number="83"
          text="Awards won"
        />
      </v-row>
    </v-container>
  </Section>
</template>
