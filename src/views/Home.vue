<template>
  <div class="home row-span-6 bg-gray-900 box-border flex items-center justify-center">
    <div class=" w-full md:w-3/4 lg:w-2/4 h-1/2 p-4 m-auto grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8 ">
        <InfoBox :label="labels[0]" :number="numbers[0]" :color="colors[0]"/>
        <InfoBox :label="labels[1]" :number="numbers[1]" :color="colors[1]"/>
        <InfoBox :label="labels[2]" :number="numbers[2]" :color="colors[2]"/>
        <InfoBox :label="labels[3]" :number="numbers[3]" :color="colors[3]"/>
    
   </div>
 
  </div>
      
</template>

<script>
import InfoBox from '@/components/InfoBox.vue'
import getInfo from '@/composables/getInfo'
import { ref } from '@vue/reactivity'



export default {
  name: 'Home',
  components: {InfoBox},
  setup(){
    const  {info,error,load} = getInfo()
    const labels = ['Total Cases', 'New Cases', 'Total Deaths', 'Deaths Today']
    const numbers = ref([])
    const colors = ['text-yellow-400', 'text-green-300',  'text-red-500','text-blue-400']
    

     const getData = async () => {
       await load()
       console.log(info.value.Countries)
       numbers.value = [info.value.Global.TotalConfirmed.toLocaleString(), info.value.Global.NewConfirmed.toLocaleString(), info.value.Global.TotalDeaths.toLocaleString(),info.value.Global.NewDeaths.toLocaleString()]
     }

     getData()


     

    return {labels, numbers,colors}


       
  }
}
</script>