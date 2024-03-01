import BaiduMap from './map/Map.vue'
import BmMarker from "./overlays/Marker.vue";
import Geolocation from "./controls/Geolocation.vue";
import Control from './controls/Control.vue'
import MapType from './controls/MapType.vue'
import Scale from "./controls/Scale.vue";
import Zoom from "./controls/Zoom.vue";
import Navigation from "./controls/Navigation.vue";
import CityList from "./controls/CityList.vue";
import Overlay from "./overlays/Overlay.vue";
import InfoWindow from "./overlays/InfoWindow.vue";
import Polyline from "./overlays/Polyline.vue";

const install = function (Vue,options){
    const {ak} = options
    Vue.prototype._BMapGL = () => ({ak})
    Vue.component('bmap-gl', BaiduMap)
    Vue.component('bmap-gl-marker', BmMarker)
    Vue.component('bmap-gl-geolocation', Geolocation)
    Vue.component('bmap-gl-control', Control)
    Vue.component('bmap-gl-map-type', MapType)
    Vue.component('bmap-gl-scale', Scale)
    Vue.component('bmap-gl-zoom', Zoom)
    Vue.component('bmap-gl-navigation', Navigation)
    Vue.component('bmap-gl-city-list', CityList)
    Vue.component('bmap-gl-overlay', Overlay)
    Vue.component('bmap-gl-info-window', InfoWindow)
    Vue.component('bmap-gl-polyline', Polyline)
}
// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}
export {
    BaiduMap,
}
