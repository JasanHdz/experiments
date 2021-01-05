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