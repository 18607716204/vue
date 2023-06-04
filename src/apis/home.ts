
import HttpInstance from '@/utils/http'


export const getBanner =()=>{
  return HttpInstance({url:'/home/banner',method:'GET'})

}

export const  getNew=()=>{
  return HttpInstance({url:'/home/new',method:'GET'})

}


export const  getGoodsAPI=()=>{
  return HttpInstance({url:'/home/goods',method:'GET'})

}




