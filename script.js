let base = 0
let basetwo = 0
let height = 0
const half = 0.5
let area = 0

document.getElementById('button').addEventListener('click', calculate)
//  Looking for the numbers within the input once clicked
function calculate () {
  base = document.getElementById('base').value
  base = parseInt(base)
  height = document.getElementById('height').value
  height = parseInt(height)
  basetwo = document.getElementById('basetwo').value
  basetwo = parseInt(basetwo)
  //  Like with math, starting off with addition of the two base values, then divide them by two, and then following by multiplying them by the height to get the area of a trapezoid.
  area = base + basetwo
  area = area * half
  area = area * height
  alert(area)
  document.getElementById('textdisplay').innerHTML = area
}
