<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { useAppData } from '@/stores/mockup'

  const { mdAndUp } = useDisplay()
  const appData = useAppData()
</script>

<template>
  <Section class="footer text-white">
    <v-row
      align="start"
      class="px-12"
      justify="center"
      no-gutters
    >
      <v-col
        class="px-3"
        cols="12"
        md="6"
      >
        <Subheading :title="`Despre Noi`" color="white" />
        <Divider
          align="left"
          color="white"
        />
        <Body text="Thermo Expert este un lider pe piața soluțiilor de ferestre și uși de termopan, cu peste 10 ani de experiență în domeniu. Ne concentrăm pe oferirea celor mai eficiente soluții pentru izolare termică și fonică, cu un design modern și durabil. Fiecare proiect este tratat cu profesionalism și atenție la detalii, pentru a asigura satisfacția fiecărui client." />
        <Body text="Alege-ne pentru calitate superioară, eficiență și servicii personalizate, adaptate nevoilor tale." />
        <a href="/GdprPolicy" color="blue">Politica de Confidențialitate</a>

      </v-col>
      <v-col
      class="px-3"
        cols="12"
        md="1"
        ></v-col>
      <v-col
        class="px-3"
        cols="12"
        md="3"
      >
        <Subheading color="white" title="Contactează-ne" />
        <Divider
          align="left"
          color="white"
        />
        <Subtitle
          title="Phone:"
          weight="bold"
        />
        <Body
          space="2"
          text='+40 748 905 981'
        />
        <Subtitle
          title="Email:"
          weight="bold"
        />
        <Body
          :text="'thermoexpertsolution@yahoo.com'"
          space="2"
        />
        <Subtitle
          title="Twitter:"
          weight="bold"
        />
        <Subheading color="white" title="Urmărește-ne" />
        <Divider
          align="left"
          color="white"
        />
        <Btn
          v-for="media in appData.socialLinks"
          :key="media.link"
          :color="media.color"
          :href="media.link"
          :icon="media.icon"
          class="ma-1"
          min-width="40px"
          target="_blank"
          variant="flat"
          width="40px"
        />
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #181818		;
}
</style>
