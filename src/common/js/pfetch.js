export function fetchAll (getListPromise, {
  totalKey = 'count',
  itemsKey = 'items',
  size = 200
} = {}) {
  return function (query = {}) {
    const all = []
    function next () {
      return getListPromise({
        ...query,
        page: Math.floor((all.length / size)),
        size
      }).then(res => {
        all.push(...res[itemsKey])
        if (res[itemsKey].length !== 0 && (res[totalKey] === undefined || all.length < res[totalKey])) {
          return next()
        }
        return all
      })
    }
    return next()
  }
}

export function fetchAllForPageSize (getListPromise) {
  return fetchAll(getListPromise, { totalKey: 'total_elements', itemsKey: 'content' })
}
