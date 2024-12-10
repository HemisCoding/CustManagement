<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'
  import FlexibleCallout from '@/views/FlexibleCallout.vue';


  const appData = useAppData()
  const reasons = ref<{
    title: string,
    description: string
  }[]>([
    { title: 'Orientare către Soluții', description: 'Indiferent de provocări, găsim soluția perfectă pentru fiecare proiect. De la design personalizat la execuție impecabilă, ne concentrăm pe rezultate care aduc valoare reală locuinței tale.' },
    { title: 'Profesioniști cu Experiență', description: 'Echipa noastră de experți lucrează cu pasiune și atenție la detalii, asigurându-se că fiecare montaj îndeplinește cele mai înalte standarde de calitate.' },
    { title: 'Tehnologie Modulară și Flexibilă', description: 'Folosim tehnologii de ultimă generație și soluții flexibile, care se adaptează ușor nevoilor și preferințelor tale, pentru o experiență fără compromisuri.' },
    { title: 'Personalizare Totală', description: 'Fiecare client este unic, la fel și proiectul său. Îți oferim posibilitatea de a personaliza fiecare detaliu, astfel încât rezultatul final să fie exact cum ți-ai imaginat.' },
  ])
</script>

<template>
  <Section
    id="why-choose-us"
    class="bg-surface-light"
  >
    <v-row
      align="start"
      class="px-12"
      justify="center"
      no-gutters
    >
      <v-col
        class="px-3 pb-3"
        cols="12"
        md="3"
      >
        <Subheading
          title="De ce să ne alegi pe noi?"
        />
        <Divider align="left" />
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(reason, i) in reasons"
            :key="i"
          >
            <v-expansion-panel-title>
              <span v-text="reason.title" />
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card variant="flat">
                <v-card-text> {{ reason.description }} </v-card-text>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        class="px-3 py-1"
        cols="12"
        md="9"
      >
        <FlexibleCallout />
        <!-- <Btn
          class="my-10 elevation-0 mx-1"
          variant="flat"
          rounded
        > 
          <span
            class="font-weight-black text-white"
            v-text="'Vezi Proiectele Noastre'"
          />
        </Btn> -->
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
