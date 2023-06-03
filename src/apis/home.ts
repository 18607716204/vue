
import HttpInstance from '@/utils/http'


export const getBanner =()=>{
  return HttpInstance({url:'/home/banner',method:'GET'})

}


