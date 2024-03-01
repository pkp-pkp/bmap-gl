import {removeEmptyAttribute} from "./util";

export function createPoint (BMapGL, options = {}) {
  const {lng, lat} = options
  return new BMapGL.Point(lng, lat)
}

export function createPixel (BMapGL, options = {}) {
  const {x, y} = options
  return new BMapGL.Pixel(x, y)
}

export function createBounds (BMapGL, options = {}) {
  const {sw, ne} = options
  return new BMapGL.Bounds(createPoint(BMapGL, sw), createPoint(BMapGL, ne))
}

export function createSize (BMapGL, options = {}) {
  const {width, height} = options
  return new BMapGL.Size(width, height)
}

export function createIcon (BMapGL, options = {}) {
  const {url, size, opts = {}} = options
  let _options = removeEmptyAttribute({
    anchor: opts.anchor && createSize(BMapGL, opts.anchor),
    imageSize: opts.imageSize && createSize(BMapGL, opts.imageSize),
    infoWindowAnchor: opts.infoWindowAnchor && createSize(BMapGL, opts.infoWindowAnchor),
    imageOffset: opts.imageOffset && createSize(BMapGL, opts.imageOffset),
    printImageUrl: opts.printImageUrl
  })  //新版本属性不能传无效值，会报错，此处过滤空值
  return new BMapGL.Icon(url, createSize(BMapGL, size), _options)
}

export function createLabel (BMapGL, options = {}) {
  const {content, opts} = options
  return new BMapGL.Label(content, {
    offset: opts.offset && createSize(BMapGL, opts.offset),
    position: opts.position && createPoint(BMapGL, opts.position),
    enableMassClear: opts.enableMassClear
  })
}
