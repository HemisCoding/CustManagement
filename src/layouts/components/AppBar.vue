<script setup>
import { ref, computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAppData } from '@/stores/mockup';
import { useDisplay } from 'vuetify';

const appData = useAppData();
const route = useRoute();
const router = useRouter();
const { mdAndUp } = useDisplay();
const drawer = ref(false);

// ✅ Track authentication state dynamically
const isAuthenticated = ref(!!localStorage.getItem("token"));

watchEffect(() => {
  isAuthenticated.value = !!localStorage.getItem("token");  // ✅ Detect login/logout changes
});

// ✅ Logout function
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
  isAuthenticated.value = false; // ✅ Update state
  router.push("/login");
};

// ✅ Navigation pages
const pages = ref([
  { name: 'Dashboard', icon: 'mdi-home' },
  { name: 'Clienti', icon: 'mdi-account-group' },
  { name: 'Simulare Credit', icon: 'mdi-finance' },
  { name: 'Dobânzi Bănci', icon: 'mdi-file-document-alert' },
  { name: 'Settings', icon: 'mdi-cogs' },
]);

const selectedPage = ref('Dashboard'); // Default selected page

// ✅ Function to update selected page
function selectPage(page) {
  selectedPage.value = page.name;
}
</script>

<template>
  <template v-if="isAuthenticated">
    <v-app-bar color="#1976D2" :height="40">
      <v-img
        :max-width="50"
        :src="customerslogo"
        class="hidden-sm-and-down"
        :height="40"
      />
      <div :style="{ marginLeft: '1vw' }">
        {{ selectedPage }}
      </div>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="logout">Logout</v-btn> <!-- ✅ Logout Button -->
    </v-app-bar>

    <v-navigation-drawer
      class="sidebar"
      app
      permanent
      color="#1976D2"
      :width="55"
    >
      <v-list>
        <v-list-item
          v-for="page in pages"
          :key="page.name"
          link
          :to="
            page.name === 'Dashboard' 
              ? '/' 
              : page.name === 'Clienti' 
              ? '/clients' 
              : page.name === 'Simulare Credit' 
              ? '/simulareCredit' 
              : page.name === 'Dobânzi Bănci'
              ? '/dobanzibanci' 
              : page.name === 'Settings'
              ? '/settings' 
              : '/' + page.name.toLowerCase().replace(/\s+/g, '-')"        
          class="icon-centered"
          @click="selectPage(page)"
        >
          <v-list-item-icon>
            <v-icon size="20">{{ page.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
</template>

<style scoped>
.value-highlight {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 2px 6px;
}

.v-divider {
  background-color: black !important;
  width: 3px;
  height: 2%;
}

.icon-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
}

.v-list-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
