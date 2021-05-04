let base = 0
let basetwo = 0
let height = 0
const half = 0.5
let area = 0

document.getElementById('button').addEventListener('click', calculate)
function calculate () {
  base = document.getElementById('base').value
  base = parseInt(base)
  height = document.getElementById('height').value
  height = parseInt(height)
  basetwo = document.getElementById('basetwo').value
  basetwo = parseInt(basetwo)
  area = base + basetwo
  area = area * half
  area = area * height
  alert(area)
  document.getElementById('textdisplay').innerHTML = area
}
