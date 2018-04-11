<div align=center><img width="50" height="50" src="https://github.com/343830384/Eng/blob/master/img/80.png"/></div>


## Eng-NOS
   *  Eng-NOS 寓意为 [Eng](https://github.com/343830384/Eng)的 NOS 氮气直线加速系统 , 因此舍弃了对完整[Eng](https://github.com/343830384/Eng)的其它功能支持 , 只做单纯的页面渲染
   *  当前仅有 1.4Kb的体积 ,却兼容所有浏览器 ,是对于传统页面 有兼容需求 ,又渴望组件化渲染 , 还想要极低学习曲线项目的 实现利器  ,仅需学习4个基本指令就能完成所有操作
   *  只渲染[Eng](https://github.com/343830384/Eng) 的 e-base、e-attr、e-html、e-for 4个指令 , (e-attr 可操作所有行内属性) , 实时上绝大部分常规页面也仅做普通数据渲染 , 然后用其它js工具进行操作, Eng-NOS恰恰最符合这种应用场景
   *  拥有世界顶尖的性能 远超所有主流已知同类JS工具. 是 [Eng](https://github.com/343830384/Eng)和其同类工具中佼佼者的完整渲染性能耗时的1/3左右, 纯html文本用时占比 1/10左右
   *  可以和 [Eng](https://github.com/343830384/Eng) 共享组件 , 但仅能执行 被 [Eng-Drive](https://github.com/343830384/Eng-Drive) 编译后的组件 , 被编译后的组件体积相较于原始会有所增加, 但相对于组件本身的大小,几乎可以忽略

 ### 版本说明

   *  0.9.0 (当前) 版本, 仅支持[Eng](https://github.com/343830384/Eng) 的 e-base、e-attr、e-html、e-for 
   *  0.9.1 (当前) 1.7kb,增加列表输出序号 和 value值 功能 ,使用方式 demo 中已加 或 参照[Eng](https://github.com/343830384/Eng) API e-for 指令.
   *  1.0.0 版本 待考虑

### 理念

   * Eng 做 精、简、小而强大 的 js 组件化渲染 插件/库

#### 使用示例 : 
```
   var  engCompileData= .... ;
   var  data={
              ........
            };
   var html= Eng_Nos( data , engCompileData );
            
      	document.body.innerHTML=html;
      	// 没了就这样 ( 仓库里内有全指令使用示例 , demo 源码在页面内)
```
### 作者吐槽
```
    对于非超大页面而言 , 网速的影响远大于渲染性能 , 组件细拆后的渲染速度依然强势 
     
```
## License

[![License](http://img.shields.io/badge/license-APACHE2-blue.svg)](LICENSE.txt)         