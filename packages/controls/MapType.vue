<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bmap-gl-map-type',
  render () {},
  mixins: [commonMixin('control')],
  props: ['anchor', 'offset'],
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    type () {
      this.reload()
    },
    mapTypes () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, anchor, offset} = this
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => mapTypes.push(global[item]))
      this.originInstance = new BMapGL.MapTypeControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset)
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
