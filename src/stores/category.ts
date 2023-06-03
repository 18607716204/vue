import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getCategory} from '@/apis/layout'

export const useCategoryStore = defineStore('category',  {
  state:()=>{
    return {
      category:[{
        id: '3',
        name: '',
        picture: '',
        children:[{
          children:null,
          goods:null,
          id:"1005999003",
          name:"居家生活用品",
          picture
          : 
          "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView"
          }],
          goods:[{

            desc:"暖宫暖腰暖胃，大面积热敷≈3片暖宝宝",
            id:"3997602",
            name:"暖腰暖腹暖胃，蕲艾暖宫腰带",
            orderNum:null,
            picture:"https://yanxuan-item.nosdn.127.net/9892cc73945da1591fa5259ad076b23c.jpg",
            price:"49.00"}]

      }]
    }

  },
  getters:{},
  actions:{
   async getsomthing(){
     const res = await getCategory()
     console.log(res);
     
     this.$state.category=res.result
     
     
    }
  }
})
