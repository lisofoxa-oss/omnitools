export const id = 'regex';
export const name = 'Regex Tester';
export const icon = '🔍';
export const description = 'Test regular expressions against text with match highlighting.';

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="card">
      <div class="input-group">
        <input type="text" id="regex-pattern" placeholder="/pattern/flags" value="(https?:\/\/[^\s]+)" />
        <input type="text" id="regex-flags" placeholder="flags" value="g" style="max-width:80px" />
      </div>
      <div class="btn-row">
        <button class="btn btn-primary" id="regex-test">Test</button>
        <button class="btn btn-secondary" id="regex-clear">Clear</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Test Text</div>
      <textarea id="regex-input" rows="8" placeholder="Text to search in...">Visit https://example.com and http://test.org for more.</textarea>
    </div>
    <div class="card output-area">
      <div class="card-title">Results <span id="regex-count"></span></div>
      <button class="copy-btn btn btn-sm btn-secondary" data-copy="regex-matches">Copy</button>
      <textarea id="regex-matches" rows="6" readonly></textarea>
    </div>
  `;

  const pattern = container.querySelector('#regex-pattern');
  const flags = container.querySelector('#regex-flags');
  const input = container.querySelector('#regex-input');
  const matches = container.querySelector('#regex-matches');
  const count = container.querySelector('#regex-count');

  container.querySelector('#regex-test').onclick = () => {
    try {
      const re = new RegExp(pattern.value, flags.value);
      const text = input.value;
      const found = [];
      let m;
      let idx = 0;
      while ((m = re.exec(text)) !== null) {
        found.push(`#${++idx}: "${m[0]}" at index ${m.index}`);
        if (m.index === re.lastIndex) re.lastIndex++;
        if (!re.global && !re.sticky) break;
      }
      if (found.length === 0) {
        matches.value = 'No matches found.';
        count.innerHTML = '<span class="status-badge status-error">0 matches</span>';
      } else {
        matches.value = found.join('\n');
        count.innerHTML = `<span class="status-badge status-ok">${found.length} matches</span>`;
      }
    } catch (e) {
      matches.value = `Error: ${e.message}`;
      count.innerHTML = '<span class="status-badge status-error">Invalid regex</span>';
    }
  };

  container.querySelector('#regex-clear').onclick = () => { matches.value = ''; count.innerHTML = ''; };
}
