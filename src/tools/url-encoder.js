export const id = 'url';
export const name = 'URL Encoder / Decoder';
export const icon = '🔗';
export const description = 'Encode and decode URL components and full URLs.';

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="card">
      <div class="btn-row">
        <button class="btn btn-primary" id="url-encode">Encode Component</button>
        <button class="btn btn-secondary" id="url-encode-full">Encode Full URL</button>
        <button class="btn btn-secondary" id="url-decode">Decode</button>
        <button class="btn btn-secondary" id="url-clear">Clear</button>
      </div>
    </div>
    <div class="result-panel">
      <div class="card">
        <div class="card-title">Input</div>
        <textarea id="url-input" rows="6" placeholder="hello world & foo=bar"></textarea>
      </div>
      <div class="card output-area">
        <div class="card-title">Output</div>
        <button class="copy-btn btn btn-sm btn-secondary" data-copy="url-output">Copy</button>
        <textarea id="url-output" rows="6" readonly></textarea>
      </div>
    </div>
  `;

  const input = container.querySelector('#url-input');
  const output = container.querySelector('#url-output');

  container.querySelector('#url-encode').onclick = () => { output.value = encodeURIComponent(input.value); };
  container.querySelector('#url-encode-full').onclick = () => { output.value = encodeURI(input.value); };
  container.querySelector('#url-decode').onclick = () => {
    try { output.value = decodeURIComponent(input.value); }
    catch (e) { try { output.value = decodeURI(input.value); } catch (e2) { output.value = `Error: ${e2.message}`; } }
  };
  container.querySelector('#url-clear').onclick = () => { input.value = ''; output.value = ''; };
}
