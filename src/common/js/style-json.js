/**
 * style转json
 * @param str
 * @returns Object
 * {width: '100px', height: '100px'}
 */
export function inlineStyle2Json(str = '') {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  const obj = {}
  str.split(';').forEach(function (string) {
    if (string !== '') {
      var attr = string.split(':')
      let attrName
      if (attr.length > 2) {
        attrName = attr[0] && attr[0].trim()
        obj[attrName] = string.slice(string.indexOf(':') + 1).trim()
      } else {
        attrName = attr[0] && attr[0].trim()
        obj[attrName] = attr[1] && attr[1].trim()
      }
    }
  })
  return obj
}

/**
 * json转style
 * @param styleJson json
 * @returns {string}
 */
export function json2InlineStyle(styleJson = [], { split = '' } = {}) {
  let str = ''
  const keys = Object.keys(styleJson)
  keys.forEach(key => {
    if (styleJson[key]) {
      str += `${key}:${styleJson[key]};${split}`
    }
  })
  return str
}

/**
 * inline style转json数组
 * @param str
 * @returns {Array}
 * [{width: '100px'}, {height: '100px'}]
 */
export function inlineStyle2JsonArr(str = '') {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  const arr = []

  str.split(';').forEach(function (string) {
    const obj = {}
    if (string !== '') {
      var attr = string.split(':')
      let attrName
      if (attr.length > 2) {
        attrName = attr[0] && attr[0].trim()
        obj[attrName] = string.slice(string.indexOf(':') + 1).trim()
      } else {
        attrName = attr[0] && attr[0].trim()
        obj[attrName] = attr[1] && attr[1].trim()
      }
      arr.push(obj)
    }
  })
  return arr
}

/**
 * json数组转style
 * @param styleJsonArr json数组
 * @returns {string}
 */
export function jsonArr2InlineStyle(styleJsonArr = []) {
  let str = ''
  styleJsonArr.forEach(item => {
    const keys = Object.keys(item)
    keys.forEach(key => {
      str += `${key}:${item[key]};`
    })
  })
  return str
}
