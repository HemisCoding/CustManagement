<template>
    <v-container class="pa-5 container" fluid>
      <v-card class="pa-5 card-style1" outlined>
        <v-card-title>Create a New User</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="createUser">
            <v-text-field v-model="user.email" label="Email" required></v-text-field>
            <v-text-field v-model="user.first_name" label="First Name"></v-text-field>
            <v-text-field v-model="user.last_name" label="Last Name"></v-text-field>
            <v-text-field v-model="user.password" label="Password" type="password" required></v-text-field>
            <v-text-field v-model="user.confirm_password" label="Confirm Password" type="password" required></v-text-field>
            <v-select v-model="user.role" :items="roles" label="Role" required></v-select>
            <v-btn color="primary" type="submit">Create User</v-btn>
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
        user: {
          email: "",
          first_name: "",
          last_name: "",
          password: "",
          confirm_password: "",
          role: "standard", // Default role
        },
        roles: ["standard", "developer"], // Managers cannot create other managers
      };
    },
    methods: {
      async createUser() {
        if (this.user.password !== this.user.confirm_password) {
          alert("Passwords do not match!");
          return;
        }
  
        try {
          const token = localStorage.getItem("token"); // Assuming JWT authentication
          await axios.post("http://127.0.0.1:8000/api/users/", this.user, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          alert("User created successfully!");
          this.resetForm();
        } catch (error) {
          console.error(error);
          alert("Error creating user.");
        }
      },
      resetForm() {
        this.user = {
          email: "",
          first_name: "",
          last_name: "",
          password: "",
          confirm_password: "",
          role: "standard",
        };
      },
    },
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
  }
  
  .card-style1:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  </style>
  