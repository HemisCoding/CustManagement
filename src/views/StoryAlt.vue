<script setup lang="ts">
  import ClayBanksImg from '@/assets/about/clay-banks-LjqARJaJotc-unsplash.jpg'
  import { useDisplay } from 'vuetify'
  import { useAppData } from '@/stores/mockup'

  const { mdAndUp } = useDisplay()
  const appData = useAppData()

</script>

<template>
  <Section
    id="story-alt"
    class="bg-grey-lighten-4 pa-6"
    space="8"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :height="mdAndUp ? 500 : 200"
          :min-height="mdAndUp ? 500 : 200"
          :min-width="mdAndUp ? 600 : 300"
          :src="ClayBanksImg"
          cover
        />
      </v-col>
      <v-col
        class="px-10"
        cols="12"
        md="6"
      >
        <Heading
          align="left"
          class="font-weight-bold py-3"
          title="Valorile Noastre"
        />
        <Body
          text="La Thermo-Expert, valorile noastre definesc fiecare fereastră montată și fiecare proiect finalizat. Credem în calitate fără compromisuri, dedicare și încredere reciprocă cu fiecare client. Ne asigurăm că soluțiile oferite nu doar îmbunătățesc confortul locuinței, ci și durabilitatea acesteia. Suntem pasionați de inovație și de a aduce mereu cele mai bune produse și servicii pentru casa ta. În fiecare proiect, de la mic la mare, ne ghidăm după aceleași principii: profesionalism, transparență și un angajament profund față de satisfacția clientului. Thermo-Expert – pentru o locuință sigură, confortabilă și de încredere!"
        />
        <Btn
          href="/portfolio"
          class="elevation-0 mx-1"
          depressed
          rounded
          color="blue"
        >
          <span
            class="font-weight-black text-white"
            v-text="'VEZI PORTOFOLIUL NOSTRU'"
          />
        </Btn>
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
