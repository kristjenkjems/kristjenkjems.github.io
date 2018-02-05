
var filters = {}

filters.onlyPosition = function(transform) {
  return  [1,0,0,0,
           0,1,0,0,
           0,0,1,0,
           transform[12],transform[13],transform[14],1]
}

filters.removePosition = function(transform) {
  var outTransform = JSON.parse(JSON.stringify(transform))
  outTransform[12] = 0
  outTransform[13] = 0
  outTransform[14] = 0
  return outTransform
}

export default filters
