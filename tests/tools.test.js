import { describe, it, expect } from 'vitest';

describe('JSON Formatter', () => {
  it('formats valid JSON', () => {
    const input = '{"a":1,"b":2}';
    const parsed = JSON.parse(input);
    expect(parsed.a).toBe(1);
    expect(parsed.b).toBe(2);
  });

  it('rejects invalid JSON', () => {
    expect(() => JSON.parse('{invalid}')).toThrow();
  });
});

describe('Base64', () => {
  it('encodes and decodes', () => {
    const text = 'Hello World!';
    const encoded = btoa(unescape(encodeURIComponent(text)));
    const decoded = decodeURIComponent(escape(atob(encoded)));
    expect(decoded).toBe(text);
  });
});

describe('URL encoder', () => {
  it('encodes and decodes', () => {
    const text = 'hello world & foo=bar';
    const encoded = encodeURIComponent(text);
    const decoded = decodeURIComponent(encoded);
    expect(decoded).toBe(text);
  });
});

describe('Case converter', () => {
  it('converts to camelCase', () => {
    const words = 'hello world'.toLowerCase().split(' ');
    const camel = words[0] + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join('');
    expect(camel).toBe('helloWorld');
  });

  it('converts to snake_case', () => {
    const snake = 'hello world'.toLowerCase().replace(/\s+/g, '_');
    expect(snake).toBe('hello_world');
  });
});
