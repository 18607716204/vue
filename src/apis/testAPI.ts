import HttpIistance from '@/utils/http'


interface r  {code: string, msg: string, result: []}
const getCategory = ()=>{
  return HttpIistance({
    url:'home/category/head',
  }).then(res=>res)
}


export default getCategory