const BASE_URL = 'https://2d0453bc092f.ngrok.io' 

async function getData(URL) {
  const res = await fetch(URL)
  const data = await res.json()
  return data
}

export function getAllExperiments() {
  return getData(`${BASE_URL}/experiment/all`)
}

export async function createExperiment(payload) {
  return await fetch(`${BASE_URL}/experiment`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export async function DeleteExperimentById(id) {
  return fetch(`${BASE_URL}/experiment/${id}`, {
    method: 'DELETE',
  })
}