<template>
  <div class="p-8 w-full h-full bg-indigo-600 flex  flex-col justify-center">
      <h2 class="uppercase text-white">{{label}}</h2>
      <p class=" text-bold text-4xl" :class="color" >{{number}}</p>
  
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
     
    },
    props: ['label', 'number','color']

}
</script>

<style>

</style>