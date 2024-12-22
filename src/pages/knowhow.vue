<template>
    <v-container class="pa-5 container" fluid>

    </v-container>
  </template>
  

  <script>
  
  export default {
    data() {
      return {

      };
    },

  };
  </script>
  
  

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  height: 100vh;
}

.card-style1 {
  color: white;
  background-color: transparent; /* Fundal alb pentru un aspect curat */
  border-radius: 10px; /* Colțuri rotunjite */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Umbra de bază */
  border: 1px solid rgba(0, 0, 0, 0.2); /* Linie subtilă pentru contur */
  height: 70%; /* Înălțime consistentă */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Tranziții pentru un efect de hover lin */
}

/* Efect dinamic la hover */
.card-style1:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Umbra devine mai pronunțată */
}
</style>
  