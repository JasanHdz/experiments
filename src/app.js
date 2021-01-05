import { getAllExperiments, createExperiment } from './services/index.js'
import { createTemplate, templateMeasure, templateTable } from './templates/index.js'
import { createPayload } from './utils/experiment.js'
import data from './data.js'

getAllExperiments()
const $table = document.getElementById('table')
const $measureContainer = document.getElementById('measurements')
const $overlay = document.getElementsByClassName('overlay')[0]
document.getElementsByClassName('btn secondary')[0].addEventListener('click', addMeaseure)
document.getElementsByClassName('btn secondary delete')[0].addEventListener('click', removeMeaseure)
document.getElementsByClassName('close')[0].addEventListener('click', handleChangeModal)
document.getElementById('add-task').addEventListener('click', handleChangeModal)
document.querySelector('form').addEventListener('submit', handleSubmit)

// simulate fetch request 
setTimeout(() => {
  const HTMLString = templateTable(data)
  const tableElement = createTemplate(HTMLString)
  $table.append(...tableElement)
}, 3000)

//  -- buttons --
async function handleSubmit(event) {
  event.preventDefault()
  const payload = createPayload($measureContainer.children.length)
  console.log(payload)
  // const res = await createExperiment(payload)
  // console.log(res)
}
function removeMeaseure() {
  if($measureContainer.children.length > 1) {
    $measureContainer.removeChild($measureContainer.lastChild)
  }
}
function addMeaseure() {
  const HTMLString = templateMeasure($measureContainer.children.length)
  const measureElement = createTemplate(HTMLString)
  $measureContainer.append(...measureElement)
}
function handleChangeModal() {
  $overlay.classList.toggle('active')
}
