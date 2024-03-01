import {createPoint} from './factory'

export const isPoint = obj => obj.lng && obj.lat
export const checkType = val => Object.prototype.toString.call(val).slice(8, -1)

export const getPosition = (BMap, point) => isPoint(point) ? createPoint(BMap, point) : point

export const removeEmptyAttribute = (obj) =>{
  for(let i in obj){
    if(obj[i]===undefined||obj[i]===null){
      delete obj[i]
    }
  }
  return obj
}
