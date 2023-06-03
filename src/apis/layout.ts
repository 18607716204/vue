
import HttpInstance from '@/utils/http'


export const getCategory =()=>{
  return HttpInstance({url:'/home/category/head',method:'GET'})

}


