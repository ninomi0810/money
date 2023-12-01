<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="content">
    <RouterView />
    
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100vw;
  height: 100vh;
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
}

// .all {
//   width: 30vw;
//   height: 80vh;
//   margin-left: 35%;
//   margin-top: 10%;

//   h1 {
//     margin-left: 30%;
//     width: 100%;
//     height: 15%;
//     color: rgb(84, 130, 171);
//   }

//   label {
//     width: 100%;
//     height: 10%;
//     color: black;
//     font-size: 20px;
//     // margin-bottom: 30px;
//   }

//   input {
//     font-size: 20px;
//     padding-left: 10px;
//     width: 100%;
//     height: 7%;
//     color: black;
//     margin-bottom: 7%;
//     margin-top: 2%;
//     border: 1px solid gray;
//     border-radius: 10px;
//   }

//   .btn {
//     width: 100%;
//     height: 20%;
//     display: flex;
//     justify-content: space-around;
//     margin-top: 10%;

//     button {
//       width: 30%;
//       height: 30%;
//       border: none;
//       border-radius: 10px;
//       color: white;
//       font-size: 15px;

//     }

//     .btn1 {
//       background-color: rgb(135, 158, 176);
//     }

//     .btn2 {
//       background-color: rgb(84, 130, 171);

//     }
//   }
// }

</style>
