const $form = document.getElementById('form')
export function createPayload(lenght) {
  const formData = new FormData($form)
  const task = formData.get('task')
  const measurements = []

  for(let i = 0; i < lenght; i++) {
    const value = parseFloat(formData.get(`value${i}`))
    const unit = formData.get(`measure${i}`)
    const time = new Date()
    const month = time.getMonth() 
    const day = time.getDate()
    console.log(time.getMonth() + 1)
    if(!value || !unit || !task) {
      alert('Los campos no deben estar vacios')
      throw Error('Los campos no deben estar vacios')
    }
    measurements.push({
      value,
      unit,
      time: `${time.getFullYear()}-${month <= 9 ? `0${month === 9 ? month : month + 1}` : month}-${day < 10 ? `0${day}` : day}`
    })
  }

  return {
    task,
    complete: false,
    measurements
  }
}