<template>
  <v-container class="pa-5 container login-container d-flex align-center justify-center" fluid>
    <v-card class="pa-5 card-style1" outlined>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn color="primary" type="submit">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { useAuthStore } from "@/stores/auth"; // Import Pinia store
import { useRouter } from "vue-router";

export default {
  setup() {
    const auth = useAuthStore();
    const router = useRouter();

    return { auth, router };
  },
  data() {
    return {
      email: "",
      password: "",
      api_login: import.meta.env.VITE_LOGIN_HOST,
    };
  },
  methods: {
    // Funcția pentru a înregistra utilizatorul
    // async login() {
    //   try {
    //     const response = await axios.post(this.api_login, {
    //       email: this.email,
    //       password: this.password,
    //     });

    //     console.log("🔍 Login Response:", response.data); // Debug response

    //     // // ✅ Ensure `email` exists in response before storing
    //     // if (!response.data.email) {
    //     //   console.error("❌ Error: Email is missing in the login response.");
    //     //   alert("Login failed: Email not found in response.");
    //     //   return;
    //     // }


    //     // ✅ Store JWT token și refresh token
    //     localStorage.setItem("token", response.data.access);
    //     localStorage.setItem("role", response.data.role);
    //     localStorage.setItem("email", response.data.email);
    //     localStorage.setItem("refresh_token", response.data.refresh); // Salvează refresh token

    //     alert("Login successful!");
    //     this.loadUser(); // Reîncarcă informațiile utilizatorului după login

    //     // ✅ Force a full page reload
    //     window.location.href = "/"; 

    //   } catch (error) {
    //     console.error("Login failed:", error);
    //     alert("Invalid credentials or API not found!");
    //   }
    // },
    async login() {
  try {
    const response = await axios.post(this.api_login, {
      email: this.email,
      password: this.password,
    });

    console.log("🔍 Login Response:", response.data);

    // ✅ Decode JWT to extract email
    const tokenPayload = JSON.parse(atob(response.data.access.split(".")[1]));
    const userEmail = tokenPayload.email; // Extract email from JWT

    if (!userEmail) {
      console.error("❌ Error: Email is missing in the decoded token.");
      alert("Login failed: Email not found in token.");
      return;
    }

    // ✅ Store JWT token și refresh token
    localStorage.setItem("token", response.data.access);
    localStorage.setItem("role", tokenPayload.role); // Extract role from token
    localStorage.setItem("email", userEmail); // ✅ Use extracted email
    localStorage.setItem("refresh_token", response.data.refresh);

    alert("Login successful!");
    window.location.href = "/"; // Reload the page

  } catch (error) {
    console.error("❌ Login failed:", error);
    alert("Invalid credentials or API not found!");
  }
},


    // Funcția pentru a încarcă utilizatorul din localStorage
    async loadUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found, redirecting to login.");
        window.location.href = "/login"; // Direcționează la pagina de login dacă nu există token
        return;
      }

      // Verifică dacă token-ul a expirat și folosește refresh token-ul dacă este necesar
      const isTokenExpired = this.isTokenExpired(token);
      if (isTokenExpired) {
        console.log("Token expired, refreshing...");
        await this.refreshToken();
      } else {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          user.value = {
            name: storedUser.name || "Nume Utilizator",
            role: storedUser.role || "Manager Clienti",
          };
          isAuthenticated.value = true;
          console.log('name', user.value.name);
        }
      }
    },

    // Verifică dacă token-ul de acces a expirat
    isTokenExpired(token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decodează JWT
      const exp = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000); // Timpul curent în secunde
      return currentTime >= exp;
    },

    // Funcția de reînnoire a token-ului folosind refresh token
    async refreshToken() {
      try {
        const refreshToken = localStorage.getItem("refresh_token");

        // Verifică dacă există un refresh token
        if (!refreshToken) {
          console.log("No refresh token found, redirecting to login.");
          window.location.href = "/login"; // Dacă nu există refresh token, redirectează la login
          return;
        }

        // Trimite cererea pentru a obține un nou access token
        const response = await axios.post('URL_TAU_DE_REFRESH', {
          refresh: refreshToken,
        });

        const { access } = response.data;
        localStorage.setItem("token", access); // Salvează noul access token
        this.loadUser(); // Reîncarcă utilizatorul după reînnoirea token-ului

      } catch (error) {
        console.error("Error refreshing token:", error);
        // Împiedică accesul utilizatorului dacă token-ul nu poate fi reînnoit
        alert("Session expired, please log in again.");
        window.location.href = "/login"; // Direcționează utilizatorul către pagina de login
      }
    }
  }
};
</script>

  
  <style scoped>
  .container {
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    height: 100vh;
  }
  
  .card-style1 {
    color: white;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    height: fit-content;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 20rem;
  }
  
  .card-style1:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  </style>
  