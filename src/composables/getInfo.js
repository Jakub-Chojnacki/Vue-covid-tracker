// https://api.covid19api.com/summary

import { ref } from '@vue/reactivity'

const getInfo = ()=>{
    const info = ref(null)
    const error = ref(null)

    const load = async () => {
        try{
            let res = await fetch('https://api.covid19api.com/summary')
            info.value = await res.json() 
            
        }
        catch(err){
            error.value = err.message
            console.log(err.message)
        }

        
    }
    
    return {info,error,load}
}


export default getInfo