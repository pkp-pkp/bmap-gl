<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createSize} from '../base/factory.js'
let MyGeolocation;
export default {
  name: 'bmap-gl-geolocation',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String,
      default: 'BMAP_ANCHOR_BOTTOM_RIGHT'
    },
    offset: {
      type: Object,
      default:()=>({
        width: 20,
        height: 50
      })
    },
    showAddressBar: {
      type: Boolean
    },
    autoLocation: {
      type: Boolean
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    showAddressBar () {
      this.reload()
    },
    autoLocation () {
      this.reload()
    }
  },
  methods: {
    initMyControl(){
      let {BMapGL } = this
      let MyGlocation = function(opts) {
        BMapGL.LocationControl.call(this, opts);
        this.changeStatus = function (status='loading') {
          this._locBtn.style.display = 'none';
          this._locLoadingBtn.style.display = 'none'
          this._locFailTip.style.display = 'none'

          if(status==='loading'){
            this._locLoadingBtn.style.display = 'block';
          }else if(status==='fail'){
            this._locLoadingBtn.style.display = 'block';
            this._locFailTip.style.display = 'block'
          }else{
            this._locBtn.style.display = 'block'
          }
        }
        this._render = function (map) {
          // 大盒子
          var bigBox = this._container = document.createElement("div");
          bigBox.className = "MyGeolocation";
          // 默认按钮
          this._locBtn = document.createElement("div")
          this._locBtn.className = 'icon'
          bigBox.appendChild(this._locBtn);
          // 加载按钮
          this._locLoadingBtn = document.createElement("div");
          this._locLoadingBtn.className = 'icon loading'
          this._locLoadingBtn.style.background = 'url(//webmap0.bdimg.com/wolfman/static/common/images/new/loading_4a096ed.gif)'
          this._locLoadingBtn.style.backgroundSize = '14px 14px'
          this._locLoadingBtn.style.display = 'none'
          bigBox.appendChild(this._locLoadingBtn);

          this._locFailTip = document.createElement("div");
          this._locFailTip.innerHTML = "定位失败";
          this._locFailTip.style.cssText = "display:none;position:absolute;right:34px;top:50%;width: 52px;height:20px;line-height:20px;margin-top:-10px;font-size:12px;box-shadow:1px 1px 2px rgba(0,0,0,.4);background:rgba(255,255,255,1);border-radius:3px;padding-left:5px;";
          bigBox.appendChild(this._locFailTip);
          map.getContainer().appendChild(bigBox);
          return bigBox
        }
        this._bind = function () {
          let that = this;

          function onMouseDown() {
            that._buttonTapped = true;
            this.style.background = "#9b9b9b"
          }

          function onMouseUp() {
            if (that._buttonTapped === false) {
              return
            }
            that._buttonTapped = false;
            that.startLocation();
            this.style.background = "#fff"
          }

          that._container.addEventListener("mousedown", onMouseDown, false);
          that._container.addEventListener("mouseup", onMouseUp, false)
        }
        this.startLocation = function (){
          this.changeStatus('loading')
          var _this = this;
          var e = true;
          if (_this.onLocationStart) {
            function ky(kA) {
              _this._onLocSuccess(kA, true)
            }
            function kz() {
              _this._onLocFailure()
            }
            e = _this.onLocationStart(ky, kz)
          }
          if (e === false) {
            return
          }
          if (!navigator.geolocation) {
            return
          }
          var i = {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 3000
          };
          this.watchId && navigator.geolocation.clearWatch(this.watchId);
          this.watchId = null;
          navigator.geolocation.getCurrentPosition(function(kA) {
            _this.changeStatus('normal')
            _this._onLocSuccess(kA, true)
          }, function(kA) {
            _this.changeStatus('normal')
            _this._onLocFailure(kA)
          }, i);
          if (this.watchPosition) {
            this.watchId = navigator.geolocation.watchPosition(function(kA) {
              _this._onLocSuccess(kA, false)
            }, function(kA) {}, i)
          }
        }
      }
      MyGlocation.prototype = Object.create(BMapGL.LocationControl.prototype);
      MyGlocation.prototype.constructor = MyGlocation
      MyGeolocation = MyGlocation
    },
    load () {
      const {BMapGL, map, anchor,offset} = this
      /* this.originInstance = new BMapGL.LocationControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset),
        // 使用浏览器的 Geolocation API 进行定位
        enableAutoLocation: false
      })
      bindEvents.call(this, this.originInstance)
      map.addControl(this.originInstance)
      this.originInstance.addEventListener('locationSuccess', this.locateUser);
      this.originInstance.addEventListener("locationError",function(e){
        alert(e.message);
      });

      let _container = null
      // 重置样式
      Object.defineProperty(this.originInstance,'_container',{
        set(v) {
          _container = v
          v.style.transform = 'scale(0.68)'
          v.style.transformOrigin = 'right center'
          v.id = 'geolocation'
        },
        get(){
          return _container
        }
      }) */
      !MyGeolocation && this.initMyControl()
      this.originInstance = new MyGeolocation({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset),
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
<style>
.MyGeolocation {
  position: absolute;
  z-index: 10;
  inset: 10px auto auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 26px;
  height: 26px;
  box-shadow: 1px 2px 1px rgba(0,0,0,0.15);
  cursor: pointer;
}
.MyGeolocation .icon{
  position: absolute;
  width: 14px;
  height: 14px;
  background: url(https://webmap0.bdimg.com/wolfman/static/common/images/ipLocation/ipLocation_72a86af.png) -14px 0 / 76px auto;
}
.MyGeolocation .icon.loading{
  width: 14px;
  height: 14px;
  background: url(//webmap0.bdimg.com/wolfman/static/common/images/new/loading_4a096ed.gif) 0 0/ 14px 14px;;
}
</style>
