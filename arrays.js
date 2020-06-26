var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function addElementToEndOfArray(array, element) {
  return s.push(element)
}

function destructivelyAddElementToEndOfArray(array, element) {
  return [array,...element]
}

function accessElementInArray(array, element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  const newArr = array.slice(1)
  return newArr
}

function removeElementFromBeginningOfArray(array) {
  array.unshift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  const newArr = array.slice(0, array.length - 1)
  return newArr
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
