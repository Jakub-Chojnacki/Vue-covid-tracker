import { ref } from '@vue/reactivity'
import getInfo from '@/composables/getInfo'

const useInfo = async () => {
    const {info,error,load}= getInfo()
    await load()
    console.log(info.value.Global)
    let TotalCases = info.value.Global.TotalConfirmed
    let NewCases =info.value.Global.NewConfirmed
    let TotalDeaths = info.value.Global.TotalDeaths
    let NewDeaths = info.value.Global.NewDeaths

    
    
  }

  export default useInfo