<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bmap-gl-city-list',
    render() {},
    mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
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
      const self = this
      this.originInstance = new BMapGL.CityListControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset),
        onChangeBefore () {
          self.$emit('changeBefore')
        },
        onChangeAfter () {
          self.$emit('changeAfter')
        }
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
