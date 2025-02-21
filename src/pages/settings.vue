<template>
  <v-container v-if="isAuthorized" class="pa-5 container" fluid>
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

  <!-- Unauthorized Message -->
  <v-container v-else class="pa-5 container d-flex align-center justify-center">
    <v-card class="pa-5 card-style1 text-center" outlined>
      <v-card-title>Access Denied</v-card-title>
      <v-card-text>You do not have permission to view this page.</v-card-text>
      <v-btn color="primary" @click="$router.push('/')">Go Home</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router"; // ✅ Use Vue Router for redirection

export default {
  setup() {
    const userRole = ref(""); // Store user role
    const isAuthorized = ref(false); // Check authorization
    const router = useRouter();

    // 🔹 Allowed Roles
    const allowedRoles = ["manager", "developer"];

    // 🔹 Fetch User Role
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        if (!token || !email) {
          console.warn("No token or email found, redirecting...");
          router.push("/");
          return;
        }

        const response = await axios.get("http://127.0.0.1:8000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log('user connected', response);
        // 🔹 Find current user
        const user = response.data.find((u) => u.email.toLowerCase() === email.toLowerCase());
        if (user) {
          userRole.value = user.role;
          console.log("✅ User role found:", user.role); // Debugging Log
        } else {
          console.warn("User not found in response, redirecting...");
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        router.push("/");
      }
    };

    // 🔹 React when `userRole` updates
    watchEffect(() => {
      isAuthorized.value = allowedRoles.includes(userRole.value);
      console.log("🔹 Authorization Updated:", isAuthorized.value); // Debugging Log

      // Redirect only if the role is set and not allowed
      if (userRole.value && !isAuthorized.value) {
        console.warn("Unauthorized access, redirecting...");
        router.push("/");
      }
    });

    fetchUserRole(); // Call function

    return {
      isAuthorized,
      userRole,
      user: ref({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
        role: "standard",
      }),
      roles: ["standard", "developer"],
    };
  },
  methods: {
    async createUser() {
      if (this.user.password !== this.user.confirm_password) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const token = localStorage.getItem("token");
        await axios.post("http://127.0.0.1:8000/api/users/", this.user, {
          headers: { Authorization: `Bearer ${token}` },
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
