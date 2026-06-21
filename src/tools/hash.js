export const id = 'hash';
export const name = 'Hash Generator';
export const icon = '#️⃣';
export const description = 'Generate hash digests (SHA-1, SHA-256, SHA-384, SHA-512, MD5-like) of any text.';

export async function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="card">
      <div class="card-title">Input Text</div>
      <textarea id="hash-input" rows="5" placeholder="Text to hash..."></textarea>
      <div class="btn-row" style="margin-top:12px">
        <button class="btn btn-primary" id="hash-generate">Generate Hashes</button>
        <button class="btn btn-secondary" id="hash-clear">Clear</button>
      </div>
    </div>
    <div class="card" id="hash-results" style="display:none">
      <div class="card-title">Results</div>
      <div class="hash-list" id="hash-list"></div>
    </div>
  `;

  const input = container.querySelector('#hash-input');
  const resultsDiv = container.querySelector('#hash-results');
  const list = container.querySelector('#hash-list');

  async function sha(algorithm, text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function md5like(text) {
    // Simple hash for quick checksum (not real MD5 but consistent for the session)
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return (hash >>> 0).toString(16).padStart(32, '0');
  }

  container.querySelector('#hash-generate').onclick = async () => {
    const text = input.value;
    if (!text.trim()) return;

    const algos = [
      { label: 'SHA-1', value: await sha('SHA-1', text) },
      { label: 'SHA-256', value: await sha('SHA-256', text) },
      { label: 'SHA-384', value: await sha('SHA-384', text) },
      { label: 'SHA-512', value: await sha('SHA-512', text) },
      { label: 'MD5 (simple)', value: md5like(text) },
    ];

    list.innerHTML = algos.map(a => `
      <div class="hash-item">
        <span class="hash-label">${a.label}</span>
        <span class="hash-value">${a.value}</span>
        <button class="btn btn-sm btn-secondary" style="margin-left:8px" onclick="navigator.clipboard.writeText('${a.value}');showToast('Copied!')">Copy</button>
      </div>
    `).join('');
    resultsDiv.style.display = 'block';
  };

  container.querySelector('#hash-clear').onclick = () => { input.value = ''; resultsDiv.style.display = 'none'; };
}
