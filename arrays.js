const chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(a, b) {
  return a.unshift(b)
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  return [b,...a]
}

function addElementToEndOfArray(a, b) {
  return s.push(b)
}

function destructivelyAddElementToEndOfArray(a, b) {
  return [a,...b]
}

function accessElementInArray(a, b) {
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.unshift()
  return [...a]
}
