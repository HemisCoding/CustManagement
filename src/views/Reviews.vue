<template>
    <section class="customer-reviews">
      <v-container class="text-center">
        <v-icon color="primary" size="48">mdi-message-text</v-icon>
        <h2 class="text-uppercase">Părerile Clienților</h2>
        <v-divider class="my-4" />
  
        <!-- Recenzia curentă -->
        <v-carousel v-model="currentReview" hide-delimiters height="auto">
          <v-carousel-item v-for="(review, index) in reviews" :key="index">
            <blockquote class="review-text">{{ review.text }}</blockquote>
            <v-avatar size="120" class="my-4">
              <img :src="review.image" alt="Customer photo" />
            </v-avatar>
            <h3 class="reviewer-name">{{ review.name }}</h3>
          </v-carousel-item>
        </v-carousel>

        <!-- Stele galbene pentru evaluare -->
        <div class="review-stars">
            <v-icon color="yellow" size="24" v-for="n in 5" :key="n">mdi-star</v-icon>
        </div>

                  <!-- Buton pentru redirecționare -->
        <v-btn
            color="primary"
            class="mt-4"
            :href="reviewLink"
            target="_blank"
          >
            Vezi mai multe recenzii
          </v-btn>

      </v-container>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { VContainer, VIcon, VDivider, VCarousel, VCarouselItem, VAvatar, VBtn } from 'vuetify/components'
  import reviewVasile from '@/assets/reviews/review-vasile.png'
  import reviewNatalie from '@/assets/reviews/review-natalie.png'
  import reviewValentin from '@/assets/reviews/review-valentin.png'

  const reviewLink = 'https://www.google.com/search?sa=X&sca_esv=6772bf3743f6c170&tbm=lcl&sxsrf=ADLYWIJ7ENJ3ZhgHRMU1GDaGwPNrf3sVCQ:1730793573929&q=recenzii%20pentru%20thermo%20expert%20onesti&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDE1sTQxMzIxM7QwtDAzMjCwMN7AyPiKUaUoNTk1ryozU6EgNa-kqFShJCO1KDdfIbWiILWoRCE_L7W4JHMRK1HKAOoOMKtpAAAA&rldimm=14549462461818620083&hl=ro-RO&ved=0CAYQ5foLahcKEwjQr9nB3MSJAxUAAAAAHQAAAAAQBQ&biw=1800&bih=907&dpr=2#lkt=LocalPoiReviews&arid=ChZDSUhNMG9nS0VJQ0FnSUQwMUl1Q1pBEAE'


  
  // Listă de recenzii
  const reviews = ref([
  {
      text: `"Am vizitat acest magazin cu geam termopan în urmă cu câteva săptămâni, am vorbit cu minunata Catalina, care este uimitoare și își cunoaște meseria. Am făcut o comandă la ea, pentru când ne întoarcem în România, din Marea Britanie în august. Multumesc din nou Catalina, ne vedem curand"`,
      image: reviewNatalie,
      name: 'Natalie Gorman',
    },
    {
      text: `"Cel mai bun pret din Onesti pentru calitatea ceruta de mine.Recomand !!!"`,
      image: reviewVasile,
      name: 'Vasile Romania',
    },
    {
      text: `"Profesionisti"`,
      image: reviewValentin,
      name: 'Valentin Marvin',
    },
  ])
  
  // Indexul recenziei curente
  const currentReview = ref(0)
  

  </script>
  
  <style scoped>
  .customer-reviews {
    padding: 40px 0;
  }
  
  .text-uppercase {
    letter-spacing: 2px;
  }
  
  .review-text {
    font-style: italic;
    color: #555;
    max-width: 600px;
    margin: 20px auto;
  }
  
  .reviewer-name {
    font-weight: bold;
    margin-top: 10px;
  }
  
  .reviewer-position {
    color: #888;
  }
  </style>
  