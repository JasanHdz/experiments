const taskHeader = `
  <header>
    <h4>Task</h4>
    <h4>Completed</h4>
    <h4>Measurements</h4>
    <h4>startTime</h4>
    <h4>endTime</h4>
    <h4>actions</h4>
  </header>
`;

function createTask(item) {
  const { task, complete, measurements, startTime, endTime } = item
  const start = new Date(startTime)
  const end = new Date(endTime)
  return `
  <article class="task">
    <p>${task}</p>
    <p>${complete}</p>
    <p>${measurements.length}</p>
    <p>${start.toDateString()}</p>
    <p>${end.toDateString()}</p>
    <div class="task-btn">
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  </article>
  `
}

export function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = HTMLString
  return html.body.children
}

export function templateMeasure(id) {
  return `
  <article>
    <div class="form-group">
      <label for="value${id}">Value</label>
      <input name="value${id}" id="value${id}" type="number" value="0.5" />
    </div>
    <div class="form-group">
      <label for="temp${id}">Temperature</label>
      <select name="measure${id}" id="temp${id}">
        <option selected disabled>--Measure option--</option>
        <option>S</option>
        <option>M</option>
        <option>KG</option>
        <option>A</option>
        <option>C</option>
        <option>K</option>
        <option>F</option>
        <option>MOL</option>
        <option>CD</option>
      </select>
    </div>
  </article>
  `;
}

export function templateTable(data) {
  console.log('se activo la función')
  console.log(data)
  return `
    ${taskHeader}
    ${data.map(createTask)}
  `
}