<template>
    <v-container class="pa-5" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <v-card class="pa-5" elevation="2">
            <v-card-title class="headline text-center">Logare</v-card-title>
            <v-divider class="my-4"></v-divider>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Parolă"
                type="password"
                required
              ></v-text-field>
              <v-btn
                class="mt-4"
                block
                color="primary"
                :loading="loading"
                type="submit"
              >
                Logare
              </v-btn>
              <v-alert v-if="errorMessage" type="error" class="mt-4">
                {{ errorMessage }}
              </v-alert>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
        loading: false,
        errorMessage: null,
        backendUrl: "http://localhost:8080", // Replace this with your backend URL
      };
    },
    methods: {
      async login() {
        this.loading = true;
        this.errorMessage = null;
  
        try {
          // Include CSRF token if required
          axios.defaults.headers.common["X-CSRFToken"] = document.cookie
            .split("; ")
            .find((row) => row.startsWith("csrftoken"))
            ?.split("=")[1];
  
          // Perform login
          const response = await axios.post(
            `${this.backendUrl}/api-auth/login/`,
            {
              username: this.email, // Match Django's default LoginView
              password: this.password,
            },
            // { withCredentials: true } 
          );
  
          if (response.status === 200) {
            this.$router.push("/dashboard"); // Redirect to dashboard
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            this.errorMessage = "Email-ul sau parola este greșită.";
          } else {
            this.errorMessage = "A apărut o eroare. Încercați din nou.";
          }
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pa-10 {
    max-width: 800px;
    margin: auto;
  }
  
  .bigger-card {
    padding: 40px;
    border-radius: 15px;
  }
  
  .input-large {
    font-size: 18px;
  }
  
  .mt-6 {
    margin-top: 24px !important;
  }
  </style>
  