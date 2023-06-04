
import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件



export const lazyPlugin={
  install(app:any){
    // 懒加载指令逻辑
    
app.directive("img-lazy",{
  mounted(el:HTMLImageElement,binding:any){
    // console.log(el,binding.value);
  const {stop} = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
       console.log('isIntersecting=>',isIntersecting);
  
      //  是否进入视口
       if(isIntersecting){
        el.src=binding.value
        stop()
  
       }
       
      },
    )
    
  }
  
  })
  

  }
}

