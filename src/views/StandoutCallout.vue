<template>
  <v-container class="social-media-section" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" class="text-center">
        <v-icon large color="white" class="social-icon">mdi-facebook</v-icon>
        <h3 class="social-title">SOCIAL MEDIA</h3>
        <v-divider class="divider mx-auto"></v-divider>
        <p class="social-description">
          Urmărește-ne pe Facebook pentru a rămâne la curent cu ultimele noutăți, promoții și evenimente.
        </p>
        <v-btn class="follow-btn" outlined color="white" href="https://www.facebook.com/p/Thermo-Expert-One%C5%9Fti-100063611289322/?locale=ro_RO" target="_blank">
          URMĂREȘTE-NE
          <v-icon right dark>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialMedia',
});
</script>

<style scoped>
.social-media-section {
  background-color: #2c3e50;
  padding: 40px 20px;
  color: white;
  text-align: center;
}

.social-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.social-title {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.divider {
  width: 50px;
  height: 2px;
  background-color: white;
  margin: 0 auto 20px auto;
}

.social-description {
  color: #e0e0e0;
  font-size: 14px;
  margin-bottom: 20px;
}

.social-link {
  display: block;
  color: #42a5f5;
  font-size: 14px;
  margin-bottom: 20px;
  text-decoration: none;
}

.follow-btn {
  border: 2px solid white;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 20px;
}

.follow-btn:hover {
  background-color: white;
  color: #2c3e50;
}
</style>
