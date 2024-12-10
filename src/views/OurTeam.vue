<script setup lang="ts">
import vasile from '@/assets/team/Vasile.jpeg';
import emil from '@/assets/team/Emil.jpeg';
import constatin from '@/assets/team/constantin.jpeg';

  const getImgUrl = (imagePath : string) => new URL(`${imagePath}`, import.meta.url).href

  const teamMembers = ref([
    {
      title: '',
      name: 'Vasile',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: vasile,
    },
    {
      title: '',
      name: 'Gabriel',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: emil,
    },
    {
      title: '',
      name: 'Constantin',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: constatin,
    },
    {
      title: '',
      name: 'Emil',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg'),
    },
  ])
</script>

<template>
  <Section
    id="our-team"
    class="background-section text-white"

  >
    <div class="justify-center align-center text-white">
      <Heading
        align="center"
        class="font-weight-bold text-blue title"
        title="ECHIPA NOASTRĂ"
      />
      <Divider
        align="center"
        color="blue"
      />
      <Body
        align="center"
        text="Cu peste 10 ani de experiență, echipa noastră de profesioniști îți oferă soluții de calitate pentru orice proiect de termopan."
      />
    </div>
    <v-row
      align="center"
      class="px-10"
      justify="center"
    >
      <template v-for="(employee, _i) in teamMembers" :key="_i">
        <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <TeamMember class="card" v-bind="employee" />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>
.background-section {
  background-color: #181818	;
}

.card {
  border: 1px solid white;
  border-radius: 3px;
}

.title {
  font-family: 'Poppins', sans-serif;
}

</style>
