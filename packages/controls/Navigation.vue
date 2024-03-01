<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
    name:'bmap-gl-navigation',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String,
      default:'BMAP_ANCHOR_BOTTOM_RIGHT'
    },
    offset: {
      type: Object,
      default:()=>({width:7.5,height:150})
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, anchor, offset} = this
      this.originInstance =new BMapGL.NavigationControl3D({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset)
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
