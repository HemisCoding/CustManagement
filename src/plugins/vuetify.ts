import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createVuetify } from 'vuetify'

export default createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      class: 'text-none',
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#0096FF',
          offblack: '#333333',
          yellow: '#e6b004',
          
        },
      },
      dark: {},
    },
  },
})


// <!-- <template>
//   <v-container dark fluid class="container">
//     <div id="grid" class="grid-stack">
//       <template v-for="widget in widgets" :key="widget.id">
//         <div :id="`widget-${widget.id}`" class="grid-stack-item"
//              :data-gs-x="widget.grid.x" :data-gs-y="widget.grid.y"
//              :data-gs-width="widget.grid.w" :data-gs-height="widget.grid.h">
//           <div :class="`widget-content type-${widget.type}`">
//             <h3>{{ widget.title }}</h3>
//             <p>{{ widget.description }}</p>
//           </div>
//         </div>
//       </template>
//     </div>
//   </v-container>
// </template>

// <script setup lang="ts">
// import { ref, onMounted, onUnmounted } from "vue";
// import { GridStack } from "gridstack";
// import "gridstack/dist/gridstack.min.css";
// import "gridstack/dist/gridstack-extra.min.css";

// const grid = ref<GridStack | null>(null);

// const widgets = ref([
//   { id: 1, title: "Widget One", description: "Details for Widget One", type: 1, grid: { x: 0, y: 0, w: 2, h: 2 } },
//   { id: 2, title: "Widget Two", description: "Details for Widget Two", type: 2, grid: { x: 2, y: 0, w: 2, h: 2 } },
//   { id: 3, title: "Widget Three", description: "Details for Widget Three", type: 3, grid: { x: 4, y: 0, w: 2, h: 2 } },
//   { id: 4, title: "Widget Four", description: "Details for Widget Four", type: 4, grid: { x: 6, y: 0, w: 2, h: 2 } },
//   { id: 5, title: "Widget Five", description: "Details for Widget Five", type: 5, grid: { x: 0, y: 2, w: 2, h: 2 } },
//   { id: 6, title: "Widget Six", description: "Details for Widget Six", type: 6, grid: { x: 2, y: 2, w: 2, h: 2 } },
//   { id: 7, title: "Widget Seven", description: "Details for Widget Seven", type: 7, grid: { x: 4, y: 2, w: 2, h: 2 } }
// ]);

// function initGridStack() {
//   grid.value = GridStack.init({
//     column: 8,
//     cellHeight: 51,
//     minRow: 1,
//     margin: 2,
//   });

//   if (grid.value) {
//     widgets.value.forEach((widget) => {
//       grid.value.addWidget({
//         x: widget.grid.x,
//         y: widget.grid.y,
//         w: widget.grid.w,
//         h: widget.grid.h,
//         id: `widget-${widget.id}`
//       });
//     });
//   }
// }

// onUnmounted(() => {
//   if (grid.value) {
//     grid.value.destroy();
//     grid.value = null;
//   }
// });

// onMounted(() => {
//   initGridStack();
// });
// </script>

// <style lang="scss" scoped>
// .container {
//   background: linear-gradient(to right, #414345, #232526);
//   height: 100vh;
// }
// .grid-stack-item {
//   background: #fff;
//   border-radius: 5px;
//   text-align: center;
//   line-height: 40px;
// }
// .widget-content {
//   padding: 10px;
// }
// </style> -->