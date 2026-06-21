export const id = 'json';
export const name = 'JSON Formatter';
export const icon = '📋';
export const description = 'Format, validate, and compress JSON data.';

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="card">
      <div class="btn-row">
        <button class="btn btn-primary" id="json-format">Format</button>
        <button class="btn btn-secondary" id="json-compress">Compress</button>
        <button class="btn btn-secondary" id="json-validate">Validate</button>
        <button class="btn btn-secondary" id="json-clear">Clear</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Input</div>
      <textarea id="json-input" rows="8" placeholder='{"key": "value", "array": [1, 2, 3]}'></textarea>
    </div>
    <div class="card output-area">
      <div class="card-title">Output <span id="json-status"></span></div>
      <button class="copy-btn btn btn-sm btn-secondary" data-copy="json-output">Copy</button>
      <textarea id="json-output" rows="8" readonly placeholder="Result appears here..."></textarea>
    </div>
  `;

  const input = container.querySelector('#json-input');
  const output = container.querySelector('#json-output');
  const status = container.querySelector('#json-status');

  function process(fn) {
    try {
      const val = JSON.parse(input.value);
      if (fn === 'validate') {
        output.value = '✅ Valid JSON';
        status.innerHTML = '<span class="status-badge status-ok">Valid</span>';
        return;
      }
      const result = fn === 'compress' ? JSON.stringify(val) : JSON.stringify(val, null, 2);
      output.value = result;
      status.innerHTML = `<span class="status-badge status-ok">${result.length} chars</span>`;
    } catch (e) {
      output.value = `❌ ${e.message}`;
      status.innerHTML = '<span class="status-badge status-error">Invalid</span>';
    }
  }

  container.querySelector('#json-format').onclick = () => process('format');
  container.querySelector('#json-compress').onclick = () => process('compress');
  container.querySelector('#json-validate').onclick = () => process('validate');
  container.querySelector('#json-clear').onclick = () => { input.value = ''; output.value = ''; status.innerHTML = ''; };
}
