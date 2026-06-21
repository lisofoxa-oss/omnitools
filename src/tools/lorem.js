export const id = 'lorem';
export const name = 'Lorem Ipsum Generator';
export const icon = '📝';
export const description = 'Generate placeholder text in various lengths.';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const WORDS = LOREM.replace(/[,\.]/g, '').split(' ');

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="card">
      <div class="card-title">Options</div>
      <div class="lorem-options">
        <label>Type:
          <select id="lorem-type">
            <option value="words">Words</option>
            <option value="sentences" selected>Sentences</option>
            <option value="paragraphs">Paragraphs</option>
          </select>
        </label>
        <label>Count:
          <input type="number" id="lorem-count" value="3" min="1" max="100" style="width:80px" />
        </label>
        <button class="btn btn-primary" id="lorem-generate">Generate</button>
        <button class="btn btn-secondary" id="lorem-clear">Clear</button>
      </div>
    </div>
    <div class="card output-area">
      <div class="card-title">Generated Text</div>
      <button class="copy-btn btn btn-sm btn-secondary" data-copy="lorem-output">Copy</button>
      <textarea id="lorem-output" rows="10" readonly></textarea>
    </div>
  `;

  const type = container.querySelector('#lorem-type');
  const count = container.querySelector('#lorem-count');
  const output = container.querySelector('#lorem-output');

  function randWord() { return WORDS[Math.floor(Math.random() * WORDS.length)]; }
  function randSentence() {
    const len = 5 + Math.floor(Math.random() * 10);
    const words = [];
    for (let i = 0; i < len; i++) words.push(randWord());
    return words[0][0].toUpperCase() + words[0].slice(1) + ' ' + words.slice(1).join(' ') + '.';
  }
  function randParagraph() {
    const len = 3 + Math.floor(Math.random() * 5);
    return Array.from({ length: len }, () => randSentence()).join(' ');
  }

  container.querySelector('#lorem-generate').onclick = () => {
    const c = parseInt(count.value) || 3;
    switch (type.value) {
      case 'words': output.value = Array.from({ length: c }, () => randWord()).join(' '); break;
      case 'sentences': output.value = Array.from({ length: c }, () => randSentence()).join('\n'); break;
      case 'paragraphs': output.value = Array.from({ length: c }, () => randParagraph()).join('\n\n'); break;
    }
  };

  container.querySelector('#lorem-clear').onclick = () => { output.value = ''; };
}
