export const id = 'case';
export const name = 'Case Converter';
export const icon = '🔤';
export const description = 'Convert text between different cases: camelCase, snake_case, kebab-case, and more.';

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="card">
      <div class="card-title">Input</div>
      <textarea id="case-input" rows="6" placeholder="Enter text to convert..."></textarea>
      <div class="btn-row" style="margin-top:12px">
        <button class="btn btn-primary" data-case="camel">camelCase</button>
        <button class="btn btn-secondary" data-case="pascal">PascalCase</button>
        <button class="btn btn-secondary" data-case="snake">snake_case</button>
        <button class="btn btn-secondary" data-case="kebab">kebab-case</button>
        <button class="btn btn-secondary" data-case="upper">UPPER CASE</button>
        <button class="btn btn-secondary" data-case="lower">lower case</button>
        <button class="btn btn-secondary" data-case="title">Title Case</button>
        <button class="btn btn-secondary" data-case="sentence">Sentence case</button>
      </div>
    </div>
    <div class="card output-area">
      <div class="card-title">Result</div>
      <button class="copy-btn btn btn-sm btn-secondary" data-copy="case-output">Copy</button>
      <textarea id="case-output" rows="6" readonly></textarea>
    </div>
  `;

  const input = container.querySelector('#case-input');
  const output = container.querySelector('#case-output');

  function toWords(str) {
    return str
      .replace(/([A-Z])/g, ' $1')
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase()
      .split(' ');
  }

  container.querySelectorAll('[data-case]').forEach(btn => {
    btn.onclick = () => {
      const words = toWords(input.value || '');
      if (words.length === 0 || (words.length === 1 && words[0] === '')) { output.value = ''; return; }
      switch (btn.dataset.case) {
        case 'camel': output.value = words[0] + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join(''); break;
        case 'pascal': output.value = words.map(w => w[0].toUpperCase() + w.slice(1)).join(''); break;
        case 'snake': output.value = words.join('_'); break;
        case 'kebab': output.value = words.join('-'); break;
        case 'upper': output.value = input.value.toUpperCase(); break;
        case 'lower': output.value = input.value.toLowerCase(); break;
        case 'title': output.value = input.value.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase()); break;
        case 'sentence': output.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase(); break;
      }
    };
  });
}
