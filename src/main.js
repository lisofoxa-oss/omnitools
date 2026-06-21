import * as jsonFormatter from './tools/json-formatter.js';
import * as base64 from './tools/base64.js';
import * as urlEncoder from './tools/url-encoder.js';
import * as diff from './tools/diff.js';
import * as regex from './tools/regex.js';
import * as hash from './tools/hash.js';
import * as caseConvert from './tools/case-convert.js';
import * as timestamp from './tools/timestamp.js';
import * as lorem from './tools/lorem.js';

const tools = [jsonFormatter, base64, urlEncoder, diff, regex, hash, caseConvert, timestamp, lorem];

const toolNav = document.getElementById('tool-nav');
const toolContent = document.getElementById('tool-content');
let currentTool = null;

// Build navigation
tools.forEach(t => {
  const btn = document.createElement('button');
  btn.className = 'tool-btn';
  btn.dataset.tool = t.id;
  btn.innerHTML = `<span class="icon">${t.icon}</span><span>${t.name}</span>`;
  btn.onclick = () => activateTool(t.id);
  toolNav.appendChild(btn);
});

// Activate tool
function activateTool(id) {
  // Update nav
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.tool-btn[data-tool="${id}"]`);
  if (btn) btn.classList.add('active');

  // Render tool
  const tool = tools.find(t => t.id === id);
  if (!tool) return;

  toolContent.innerHTML = '';
  const section = document.createElement('div');
  section.className = 'tool-section active';
  toolContent.appendChild(section);
  tool.render(section);

  currentTool = id;

  // Update URL hash
  window.location.hash = id;
}

// Copy to clipboard handler
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-copy]');
  if (btn) {
    const targetId = btn.dataset.copy;
    const target = document.getElementById(targetId);
    if (target) {
      const text = target.value || target.textContent;
      navigator.clipboard.writeText(text.trim()).then(() => showToast('Copied to clipboard!'));
    }
  }
});

// Toast notification
window.showToast = function(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
};

// Restore or set default tool
const initialTool = window.location.hash.slice(1) || 'json';
activateTool(initialTool);

// Handle hash changes
window.addEventListener('hashchange', () => {
  const id = window.location.hash.slice(1);
  if (id && tools.some(t => t.id === id)) activateTool(id);
});
