export const id = 'base64';
export const name = 'Base64 Encoder / Decoder';
export const icon = '🔐';
export const description = 'Encode and decode Base64 strings. Supports text and file conversion.';

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="card">
      <div class="btn-row">
        <button class="btn btn-primary" id="b64-encode">Encode →</button>
        <button class="btn btn-secondary" id="b64-decode">Decode ←</button>
        <button class="btn btn-secondary" id="b64-clear">Clear</button>
        <label class="btn btn-secondary">📁 File<input type="file" id="b64-file" style="display:none" accept="*"></label>
      </div>
    </div>
    <div class="result-panel">
      <div class="card">
        <div class="card-title">Input</div>
        <textarea id="b64-input" rows="6" placeholder="Text or Base64 string..."></textarea>
      </div>
      <div class="card output-area">
        <div class="card-title">Output</div>
        <button class="copy-btn btn btn-sm btn-secondary" data-copy="b64-output">Copy</button>
        <textarea id="b64-output" rows="6" readonly></textarea>
      </div>
    </div>
  `;

  const input = container.querySelector('#b64-input');
  const output = container.querySelector('#b64-output');

  container.querySelector('#b64-encode').onclick = () => {
    try { output.value = btoa(unescape(encodeURIComponent(input.value))); }
    catch (e) { output.value = `Error: ${e.message}`; }
  };
  container.querySelector('#b64-decode').onclick = () => {
    try { output.value = decodeURIComponent(escape(atob(input.value.trim()))); }
    catch (e) { output.value = `Error: invalid Base64 string`; }
  };
  container.querySelector('#b64-clear').onclick = () => { input.value = ''; output.value = ''; };
  container.querySelector('#b64-file').onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(',')[1];
      input.value = base64;
      output.value = `File: ${file.name} (${file.size} bytes)\nEncoded to Base64 (${base64.length} chars)`;
    };
    reader.readAsDataURL(file);
  };
}
