var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=t({description:()=>o,icon:()=>a,id:()=>r,name:()=>i,render:()=>s}),r=`json`,i=`JSON Formatter`,a=`📋`,o=`Format, validate, and compress JSON data.`;function s(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${a} ${i}</h2>
      <p>${o}</p>
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
  `;let t=e.querySelector(`#json-input`),n=e.querySelector(`#json-output`),r=e.querySelector(`#json-status`);function s(e){try{let i=JSON.parse(t.value);if(e===`validate`){n.value=`✅ Valid JSON`,r.innerHTML=`<span class="status-badge status-ok">Valid</span>`;return}let a=e===`compress`?JSON.stringify(i):JSON.stringify(i,null,2);n.value=a,r.innerHTML=`<span class="status-badge status-ok">${a.length} chars</span>`}catch(e){n.value=`❌ ${e.message}`,r.innerHTML=`<span class="status-badge status-error">Invalid</span>`}}e.querySelector(`#json-format`).onclick=()=>s(`format`),e.querySelector(`#json-compress`).onclick=()=>s(`compress`),e.querySelector(`#json-validate`).onclick=()=>s(`validate`),e.querySelector(`#json-clear`).onclick=()=>{t.value=``,n.value=``,r.innerHTML=``}}var c=t({description:()=>f,icon:()=>d,id:()=>l,name:()=>u,render:()=>p}),l=`base64`,u=`Base64 Encoder / Decoder`,d=`🔐`,f=`Encode and decode Base64 strings. Supports text and file conversion.`;function p(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${d} ${u}</h2>
      <p>${f}</p>
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
  `;let t=e.querySelector(`#b64-input`),n=e.querySelector(`#b64-output`);e.querySelector(`#b64-encode`).onclick=()=>{try{n.value=btoa(unescape(encodeURIComponent(t.value)))}catch(e){n.value=`Error: ${e.message}`}},e.querySelector(`#b64-decode`).onclick=()=>{try{n.value=decodeURIComponent(escape(atob(t.value.trim())))}catch{n.value=`Error: invalid Base64 string`}},e.querySelector(`#b64-clear`).onclick=()=>{t.value=``,n.value=``},e.querySelector(`#b64-file`).onchange=e=>{let r=e.target.files[0];if(!r)return;let i=new FileReader;i.onload=()=>{let e=i.result.split(`,`)[1];t.value=e,n.value=`File: ${r.name} (${r.size} bytes)\nEncoded to Base64 (${e.length} chars)`},i.readAsDataURL(r)}}var m=t({description:()=>_,icon:()=>g,id:()=>`url`,name:()=>h,render:()=>v}),h=`URL Encoder / Decoder`,g=`🔗`,_=`Encode and decode URL components and full URLs.`;function v(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${g} ${h}</h2>
      <p>${_}</p>
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
  `;let t=e.querySelector(`#url-input`),n=e.querySelector(`#url-output`);e.querySelector(`#url-encode`).onclick=()=>{n.value=encodeURIComponent(t.value)},e.querySelector(`#url-encode-full`).onclick=()=>{n.value=encodeURI(t.value)},e.querySelector(`#url-decode`).onclick=()=>{try{n.value=decodeURIComponent(t.value)}catch{try{n.value=decodeURI(t.value)}catch(e){n.value=`Error: ${e.message}`}}},e.querySelector(`#url-clear`).onclick=()=>{t.value=``,n.value=``}}var y=t({description:()=>C,icon:()=>S,id:()=>b,name:()=>x,render:()=>w}),b=`diff`,x=`Text Diff Checker`,S=`📊`,C=`Compare two texts and see the differences highlighted.`;function w(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${S} ${x}</h2>
      <p>${C}</p>
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
  `;let t=e.querySelector(`#diff-a`),n=e.querySelector(`#diff-b`),r=e.querySelector(`#diff-output`);function i(e,t){let n=e.split(`
`),r=t.split(`
`),i=[],o=Math.max(n.length,r.length);for(let e=0;e<o;e++)e>=n.length?i.push(`<div class="diff-add">+ ${a(r[e])}</div>`):e>=r.length?i.push(`<div class="diff-remove">- ${a(n[e])}</div>`):n[e]===r[e]?i.push(`<div>  ${a(n[e])}</div>`):(i.push(`<div class="diff-remove">- ${a(n[e])}</div>`),i.push(`<div class="diff-add">+ ${a(r[e])}</div>`));return i.join(`
`)}function a(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}e.querySelector(`#diff-compare`).onclick=()=>{r.innerHTML=i(t.value,n.value)},e.querySelector(`#diff-clear`).onclick=()=>{t.value=``,n.value=``,r.innerHTML=``}}var T=t({description:()=>k,icon:()=>O,id:()=>E,name:()=>D,render:()=>A}),E=`regex`,D=`Regex Tester`,O=`🔍`,k=`Test regular expressions against text with match highlighting.`;function A(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${O} ${D}</h2>
      <p>${k}</p>
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
  `;let t=e.querySelector(`#regex-pattern`),n=e.querySelector(`#regex-flags`),r=e.querySelector(`#regex-input`),i=e.querySelector(`#regex-matches`),a=e.querySelector(`#regex-count`);e.querySelector(`#regex-test`).onclick=()=>{try{let e=new RegExp(t.value,n.value),o=r.value,s=[],c,l=0;for(;(c=e.exec(o))!==null&&(s.push(`#${++l}: "${c[0]}" at index ${c.index}`),c.index===e.lastIndex&&e.lastIndex++,!(!e.global&&!e.sticky)););s.length===0?(i.value=`No matches found.`,a.innerHTML=`<span class="status-badge status-error">0 matches</span>`):(i.value=s.join(`
`),a.innerHTML=`<span class="status-badge status-ok">${s.length} matches</span>`)}catch(e){i.value=`Error: ${e.message}`,a.innerHTML=`<span class="status-badge status-error">Invalid regex</span>`}},e.querySelector(`#regex-clear`).onclick=()=>{i.value=``,a.innerHTML=``}}var j=t({description:()=>F,icon:()=>P,id:()=>M,name:()=>N,render:()=>ee}),M=`hash`,N=`Hash Generator`,P=`#️⃣`,F=`Generate hash digests (SHA-1, SHA-256, SHA-384, SHA-512, MD5-like) of any text.`;async function ee(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${P} ${N}</h2>
      <p>${F}</p>
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
  `;let t=e.querySelector(`#hash-input`),n=e.querySelector(`#hash-results`),r=e.querySelector(`#hash-list`);async function i(e,t){let n=new TextEncoder().encode(t),r=await crypto.subtle.digest(e,n);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function a(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return(t>>>0).toString(16).padStart(32,`0`)}e.querySelector(`#hash-generate`).onclick=async()=>{let e=t.value;e.trim()&&(r.innerHTML=[{label:`SHA-1`,value:await i(`SHA-1`,e)},{label:`SHA-256`,value:await i(`SHA-256`,e)},{label:`SHA-384`,value:await i(`SHA-384`,e)},{label:`SHA-512`,value:await i(`SHA-512`,e)},{label:`MD5 (simple)`,value:a(e)}].map(e=>`
      <div class="hash-item">
        <span class="hash-label">${e.label}</span>
        <span class="hash-value">${e.value}</span>
        <button class="btn btn-sm btn-secondary" style="margin-left:8px" onclick="navigator.clipboard.writeText('${e.value}');showToast('Copied!')">Copy</button>
      </div>
    `).join(``),n.style.display=`block`)},e.querySelector(`#hash-clear`).onclick=()=>{t.value=``,n.style.display=`none`}}var te=t({description:()=>R,icon:()=>L,id:()=>ne,name:()=>I,render:()=>z}),ne=`case`,I=`Case Converter`,L=`🔤`,R=`Convert text between different cases: camelCase, snake_case, kebab-case, and more.`;function z(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${L} ${I}</h2>
      <p>${R}</p>
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
  `;let t=e.querySelector(`#case-input`),n=e.querySelector(`#case-output`);function r(e){return e.replace(/([A-Z])/g,` $1`).replace(/[-_]+/g,` `).replace(/\s+/g,` `).trim().toLowerCase().split(` `)}e.querySelectorAll(`[data-case]`).forEach(e=>{e.onclick=()=>{let i=r(t.value||``);if(i.length===0||i.length===1&&i[0]===``){n.value=``;return}switch(e.dataset.case){case`camel`:n.value=i[0]+i.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join(``);break;case`pascal`:n.value=i.map(e=>e[0].toUpperCase()+e.slice(1)).join(``);break;case`snake`:n.value=i.join(`_`);break;case`kebab`:n.value=i.join(`-`);break;case`upper`:n.value=t.value.toUpperCase();break;case`lower`:n.value=t.value.toLowerCase();break;case`title`:n.value=t.value.replace(/\w\S*/g,e=>e[0].toUpperCase()+e.slice(1).toLowerCase());break;case`sentence`:n.value=t.value.charAt(0).toUpperCase()+t.value.slice(1).toLowerCase();break}}})}var B=t({description:()=>U,icon:()=>`⏰`,id:()=>V,name:()=>H,render:()=>W}),V=`timestamp`,H=`Timestamp Converter`,U=`Convert between Unix timestamps and human-readable dates.`;function W(e){e.innerHTML=`
    <div class="tool-header">
      <h2>⏰ ${H}</h2>
      <p>${U}</p>
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
  `;let t=e.querySelector(`#ts-input`),n=e.querySelector(`#ts-date-result`),r=e.querySelector(`#ts-date-input`),i=e.querySelector(`#ts-timestamp-result`),a=e.querySelector(`#ts-now`);e.querySelector(`#ts-to-date`).onclick=()=>{let e=parseInt(t.value);if(isNaN(e)){n.textContent=`Please enter a valid number.`;return}let r=new Date(e*1e3);n.innerHTML=`<strong>${r.toLocaleString()}</strong> (${r.toUTCString()})`},e.querySelector(`#ts-to-timestamp`).onclick=()=>{let e=r.value;if(!e){i.textContent=`Please select a date.`;return}let t=new Date(e);i.innerHTML=`<strong>${Math.floor(t.getTime()/1e3)}</strong> seconds since Unix epoch`};function o(){let e=new Date;a.innerHTML=`
      <div><span style="color:var(--text-dim)">Unix:</span> <strong>${Math.floor(e.getTime()/1e3)}</strong></div>
      <div><span style="color:var(--text-dim)">ISO:</span> <strong>${e.toISOString()}</strong></div>
      <div><span style="color:var(--text-dim)">Local:</span> <strong>${e.toLocaleString()}</strong></div>
    `}o(),setInterval(o,1e3)}var G=t({description:()=>Y,icon:()=>J,id:()=>K,name:()=>q,render:()=>re}),K=`lorem`,q=`Lorem Ipsum Generator`,J=`📝`,Y=`Generate placeholder text in various lengths.`,X=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`.replace(/[,\.]/g,``).split(` `);function re(e){e.innerHTML=`
    <div class="tool-header">
      <h2>${J} ${q}</h2>
      <p>${Y}</p>
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
  `;let t=e.querySelector(`#lorem-type`),n=e.querySelector(`#lorem-count`),r=e.querySelector(`#lorem-output`);function i(){return X[Math.floor(Math.random()*X.length)]}function a(){let e=5+Math.floor(Math.random()*10),t=[];for(let n=0;n<e;n++)t.push(i());return t[0][0].toUpperCase()+t[0].slice(1)+` `+t.slice(1).join(` `)+`.`}function o(){let e=3+Math.floor(Math.random()*5);return Array.from({length:e},()=>a()).join(` `)}e.querySelector(`#lorem-generate`).onclick=()=>{let e=parseInt(n.value)||3;switch(t.value){case`words`:r.value=Array.from({length:e},()=>i()).join(` `);break;case`sentences`:r.value=Array.from({length:e},()=>a()).join(`
`);break;case`paragraphs`:r.value=Array.from({length:e},()=>o()).join(`

`);break}},e.querySelector(`#lorem-clear`).onclick=()=>{r.value=``}}var Z=[n,c,m,y,T,j,te,B,G],ie=document.getElementById(`tool-nav`),Q=document.getElementById(`tool-content`);Z.forEach(e=>{let t=document.createElement(`button`);t.className=`tool-btn`,t.dataset.tool=e.id,t.innerHTML=`<span class="icon">${e.icon}</span><span>${e.name}</span>`,t.onclick=()=>$(e.id),ie.appendChild(t)});function $(e){document.querySelectorAll(`.tool-btn`).forEach(e=>e.classList.remove(`active`));let t=document.querySelector(`.tool-btn[data-tool="${e}"]`);t&&t.classList.add(`active`);let n=Z.find(t=>t.id===e);if(!n)return;Q.innerHTML=``;let r=document.createElement(`div`);r.className=`tool-section active`,Q.appendChild(r),n.render(r),window.location.hash=e}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-copy]`);if(t){let e=t.dataset.copy,n=document.getElementById(e);if(n){let e=n.value||n.textContent;navigator.clipboard.writeText(e.trim()).then(()=>showToast(`Copied to clipboard!`))}}}),window.showToast=function(e){let t=document.querySelector(`.toast`);t||(t=document.createElement(`div`),t.className=`toast`,document.body.appendChild(t)),t.textContent=e,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),2e3)},$(window.location.hash.slice(1)||`json`),window.addEventListener(`hashchange`,()=>{let e=window.location.hash.slice(1);e&&Z.some(t=>t.id===e)&&$(e)});