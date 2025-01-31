<template>
    <v-container class="pa-5 container login-container d-flex align-center justify-center" fluid >
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
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("http://127.0.0.1:8000/login/", {
            email: this.email,
            password: this.password,
          });
  
          // ✅ Store JWT token in localStorage
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("email", response.data.email);
  
          console.log("Login successful! Token:", response.data.access);
          alert("Login successful!");
  
          this.$router.push("/"); // ✅ Redirect to home page after login
        } catch (error) {
          console.error("Login failed:", error);
          alert("Invalid credentials or API not found!");
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
    width: 20vw;
  }
  
  .card-style1:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  </style>
  