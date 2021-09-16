<template>
<div class=" w-full h-full grid  ">
 <Header/>
  <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'


export default {
  components: {Header},
  setup() {
    
  },
}
</script>

<style>
body{
  height: 100vh;
}

#app{
  height: 100vh;
  overflow-y:hidden;
}


</style>
