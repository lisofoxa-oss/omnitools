export const id = 'timestamp';
export const name = 'Timestamp Converter';
export const icon = '⏰';
export const description = 'Convert between Unix timestamps and human-readable dates.';

export function render(container) {
  container.innerHTML = `
    <div class="tool-header">
      <h2>${icon} ${name}</h2>
      <p>${description}</p>
    </div>
    <div class="result-panel">
      <div class="card">
        <div class="card-title">Unix Timestamp → Date</div>
        <div class="input-group">
          <input type="number" id="ts-input" placeholder="e.g. 1718900000" />
          <button class="btn btn-primary" id="ts-to-date">Convert</button>
        </div>
        <div id="ts-date-result" style="padding:8px 0; color:var(--text-dim); font-size:13px;"></div>
      </div>
      <div class="card">
        <div class="card-title">Date → Unix Timestamp</div>
        <div class="input-group">
          <input type="datetime-local" id="ts-date-input" />
          <button class="btn btn-primary" id="ts-to-timestamp">Convert</button>
        </div>
        <div id="ts-timestamp-result" style="padding:8px 0; color:var(--text-dim); font-size:13px;"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Current Time</div>
      <div id="ts-now" style="display:flex; gap:20px; flex-wrap:wrap;"></div>
    </div>
  `;

  const tsInput = container.querySelector('#ts-input');
  const dateResult = container.querySelector('#ts-date-result');
  const dateInput = container.querySelector('#ts-date-input');
  const tsResult = container.querySelector('#ts-timestamp-result');
  const nowDiv = container.querySelector('#ts-now');

  container.querySelector('#ts-to-date').onclick = () => {
    const ts = parseInt(tsInput.value);
    if (isNaN(ts)) { dateResult.textContent = 'Please enter a valid number.'; return; }
    const d = new Date(ts * 1000);
    dateResult.innerHTML = `<strong>${d.toLocaleString()}</strong> (${d.toUTCString()})`;
  };

  container.querySelector('#ts-to-timestamp').onclick = () => {
    const val = dateInput.value;
    if (!val) { tsResult.textContent = 'Please select a date.'; return; }
    const d = new Date(val);
    tsResult.innerHTML = `<strong>${Math.floor(d.getTime() / 1000)}</strong> seconds since Unix epoch`;
  };

  function updateNow() {
    const now = new Date();
    nowDiv.innerHTML = `
      <div><span style="color:var(--text-dim)">Unix:</span> <strong>${Math.floor(now.getTime() / 1000)}</strong></div>
      <div><span style="color:var(--text-dim)">ISO:</span> <strong>${now.toISOString()}</strong></div>
      <div><span style="color:var(--text-dim)">Local:</span> <strong>${now.toLocaleString()}</strong></div>
    `;
  }
  updateNow();
  setInterval(updateNow, 1000);
}
