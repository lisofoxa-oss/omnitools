export const id = 'diff';
export const name = 'Text Diff Checker';
export const icon = '📊';
export const description = 'Compare two texts and see the differences highlighted.';

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="result-panel">
      <div class="card">
        <div class="card-title">Original Text</div>
        <textarea id="diff-a" rows="8" placeholder="Original text..."></textarea>
      </div>
      <div class="card">
        <div class="card-title">Changed Text</div>
        <textarea id="diff-b" rows="8" placeholder="Modified text..."></textarea>
      </div>
    </div>
    <div class="card">
      <div class="btn-row">
        <button class="btn btn-primary" id="diff-compare">Compare</button>
        <button class="btn btn-secondary" id="diff-clear">Clear</button>
      </div>
    </div>
    <div class="card output-area">
      <div class="card-title">Differences</div>
      <button class="copy-btn btn btn-sm btn-secondary" data-copy="diff-output">Copy</button>
      <div id="diff-output" class="diff-output" style="padding:12px; min-height:60px;"></div>
    </div>
  `;

  const a = container.querySelector('#diff-a');
  const b = container.querySelector('#diff-b');
  const output = container.querySelector('#diff-output');

  // Simple line-based diff
  function computeDiff(textA, textB) {
    const linesA = textA.split('\n');
    const linesB = textB.split('\n');
    const result = [];
    const maxLen = Math.max(linesA.length, linesB.length);
    for (let i = 0; i < maxLen; i++) {
      if (i >= linesA.length) {
        result.push(`<div class="diff-add">+ ${escapeHtml(linesB[i])}</div>`);
      } else if (i >= linesB.length) {
        result.push(`<div class="diff-remove">- ${escapeHtml(linesA[i])}</div>`);
      } else if (linesA[i] !== linesB[i]) {
        result.push(`<div class="diff-remove">- ${escapeHtml(linesA[i])}</div>`);
        result.push(`<div class="diff-add">+ ${escapeHtml(linesB[i])}</div>`);
      } else {
        result.push(`<div>  ${escapeHtml(linesA[i])}</div>`);
      }
    }
    return result.join('\n');
  }

  function escapeHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  container.querySelector('#diff-compare').onclick = () => {
    output.innerHTML = computeDiff(a.value, b.value);
  };
  container.querySelector('#diff-clear').onclick = () => { a.value = ''; b.value = ''; output.innerHTML = ''; };
}
