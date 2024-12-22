<script setup lang="ts">
  const features = ref(
    [
      {
        icon: 'mdi-flash',
        outlined: true,
        title: 'Montaj Rapid',
        avatarColor: 'offblack',
        text: 'Îți livrăm calitate și eficiență, cu un montaj rapid și profesional, astfel încât să te bucuri de noile ferestre sau uși cât mai repede.',
        iconColor: 'blue',
      },
      {
        icon: 'mdi-cog',
        outlined: true,
        title: 'Aranjare Completă',
        avatarColor: 'offblack',
        text: 'Transformă-ți casa după gustul tău! Oferim soluții de personalizare adaptate stilului tău, fie că dorești finisaje moderne sau clasice.',
      },
      {
        icon: 'mdi-responsive',
        avatarColor: 'offblack',
        outlined: true,
        title: 'Design Adaptabil',
        text: 'Fiecare proiect este creat pentru a se integra perfect în spațiul tău, oferind confort și eleganță în orice locuință sau birou.',
      },
      {
        icon: 'mdi-face-agent',
        avatarColor: 'offblack',
        title: 'Suport Prietenos',
        outlined: true,
        text: 'Echipa noastră de suport e mereu la dispoziția ta pentru a răspunde întrebărilor și a oferi asistență înainte, în timpul și după instalare.',
      },
      {
        icon: 'mdi-auto-fix',
        title: 'Design de Impact',
        avatarColor: 'offblack',
        outlined: true,
        text: 'Alegem cu grijă materialele și finisajele pentru un design care să impresioneze și să reziste în timp.',
      },
      {
        icon: 'mdi-calendar',
        outlined: true,
        title: 'Program Flexibil',
        avatarColor: 'offblack',
        text: 'Ne adaptăm programul pentru a răspunde nevoilor tale și a facilita instalarea ferestrelor sau ușilor în cele mai convenabile momente.',
      },
      {
        icon: 'mdi-magnify',
        outlined: true,
        title: 'Optimizare Energetică',
        avatarColor: 'offblack',
        text: 'Ferestrele și ușile noastre sunt gândite pentru a îmbunătăți eficiența energetică a locuinței tale, reducând costurile de încălzire și răcire.',
      },
      {
        icon: 'mdi-thought-bubble',
        outlined: true,
        avatarColor: 'offblack',
        title: 'Consultanță Personalizată',
        text: 'Oferim sfaturi și recomandări pentru a alege produsele potrivite, astfel încât să obții exact ce ți-ai dorit, fără compromisuri.',
      },
    ]
  )
</script>

<template>
  <Section
    id="our-services"
    space="40"
  >
    <div class="justify-center align-center">
      <Heading
        align="center"
        class="font-weight title"
        title="SERVICIILE NOASTRE"
      />
      <Divider
        align="center"
        color="blue"
      />
    </div>
    <v-row
      align="stretch"
      class="px-3"
      justify="center"
    >
      <template v-for="(feature, _i) in features" :key="_i">
        <v-col
          cols="10"
          md="5"
        >
          <FeatureAlt
            class="pa-1"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Poppins', sans-serif;
}
</style>
