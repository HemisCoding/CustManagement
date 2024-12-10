<script setup lang="ts">
  import PiscillaDuPreezImg from '@/assets/about/priscilla-du-preez-XkKCui44iM0-unsplash.jpg'
  import { useDisplay } from 'vuetify'
  import { useAppData } from '@/stores/mockup'

  const { mdAndUp } = useDisplay()
  const appData = useAppData()

</script>

<template>
  <Section
    id="story"
    class="section-background pa-6"
    space="4"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="px-10 text-white"
        cols="12"
        md="6"
      >
        <Heading
          align="left"
          class="font-weight-bold py-3 title text-blue"
          title="Cine suntem noi?"
        />
        <Body
          align="left"
          text="Thermo-Expert, fondată în 2017 în inima Oneștiului, este mai mult decât o firmă de termopane – suntem partenerii tăi de încredere în crearea spațiului perfect. Cu sute de proiecte finalizate cu succes atât în România, cât și în afara țării, am câștigat recunoașterea prin profesionalism, inovație și dedicare pentru excelență. De la ferestre durabile până la uși personalizate, fiecare detaliu reflectă angajamentul nostru față de calitate. Alege Thermo-Expert și transformă-ți locuința într-un loc mai cald, mai luminos și mai sigur!"
        />
        <Btn
          class="my-5 elevation-0 mx-1 btn-contact"
          color="blue"
          href="/contact"
          target="_blank"
          theme="dark"
          variant="flat"
          rounded
        >
          <span
            class="font-weight-black text-white"
            v-text="`Contactează-ne`"
          />
        </Btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :height="mdAndUp ? '500px' : '200px'"
          :min-height="mdAndUp ? '500px' : '200px'"
          :min-width="mdAndUp ? '600px' : '300px'"
          :src="PiscillaDuPreezImg"
          cover
        />
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>
.section-background {
  background-color: #0d1b2a; /* Fundal întunecat */
}

.title {
  font-family: 'Poppins', sans-serif;
}

</style>
