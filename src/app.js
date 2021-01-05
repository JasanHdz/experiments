import { getAllExperiments, createExperiment } from './services/index.js'
import { createTemplate, templateMeasure } from './templates/index.js'
import { createPayload } from './utils/experiment.js'

getAllExperiments()
const $measureContainer = document.getElementById('measurements')
document.getElementsByClassName('btn secondary')[0].addEventListener('click', addMeaseure)
document.getElementsByClassName('btn secondary delete')[0].addEventListener('click', removeMeaseure)
document.querySelector('form').addEventListener('submit', handleSubmit)

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
  console.log('add measure')
  const HTMLString = templateMeasure($measureContainer.children.length)
  const measureElement = createTemplate(HTMLString)
  $measureContainer.append(...measureElement)
}
