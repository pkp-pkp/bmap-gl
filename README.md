**作者：**pankunpeng

**交流QQ：**2643139637

**组件名：**bmap-gl

**说明：**使用了v3的百度地图，将使用v2的BMap对象的vue-baidu-map组件改为新款使用v3的BMapGL，

**使用方法：**[API部分借鉴vue-baidu-map文档](https://dafrok.github.io/vue-baidu-map/#/zh/start/base)
**示例图：**
![img.png](img.png)
**例子:**

1. 注册

```javascript
// main.js
Vue.use(BaiduMap,{
  ak:'ng1I9sDPeznpR8Ctln3GodvjgsTHpGi9'
})
```

2. 

```vue
<template>
	<bmap-gl
      class="map"
      :center="center"
      :zoom="zoom"
      @ready="ready"
      style="height:600px;width:100%"
    >
      <!-->缩放<-->
      <bmap-gl-zoom/>
      <!-->比例尺<-->
      <bmap-gl-scale/>
      <!-->地图类型<-->
      <bmap-gl-navigation/>
      <!-->定位<-->
      <bmap-gl-geolocation/>
      <!-->切换类型<-->
      <bmap-gl-map-type/>
      <!-->标注<-->
      <bmap-gl-marker
         v-if="item.newBuildStatus == 6"
         @click="clickEvent(item)"
         :position="{ lng: item.longitude, lat: item.latitude }"
         :icon="{
             url: 'xxx.png',
             size: { width: 20, height: 20 },
          }"
         >
    </bmap-gl>
</template>
<script>
export default{
    data() {
        return {
          center: {lng: 120, lat: 30},
          zoom: 16
        }
      },
    methods:{
        ready({BMapGL, map}) {
          // 相关操作
        },
    }
}
</script>
```



参考文档：[介绍](https://lbs.baidu.com/index.php?title=jspopularGL)
[预览](https://lbs.baidu.com/jsdemo.htm#webgl2_0)
[API](https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a0b0)
