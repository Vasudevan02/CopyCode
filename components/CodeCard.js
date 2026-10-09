// CodeCard Component - React component for an individual code card
(function () {
  const { useState, createElement: h } = React;

  function CodeCard({ title, code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      const textToCopy = code || '';
      let success = false;

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          success = true;
        } catch (err) {
          // Fallback below
        }
      }

      if (!success) {
        try {
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.top = '-9999px';
          textarea.style.left = '-9999px';
          textarea.setAttribute('readonly', '');
          document.body.appendChild(textarea);
          textarea.select();
          success = document.execCommand('copy');
          document.body.removeChild(textarea);
        } catch (e) {
          console.error('Copy failed:', e);
        }
      }

      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    };

    const lines = (code || '').split('\n');

    return h('div', { className: 'code-card' },
      h('div', { className: 'code-toolbar' },
        h('div', { className: 'left-section' },
          h('div', { className: 'window-dots', 'aria-hidden': 'true' },
            h('span', { className: 'dot dot-red' }),
            h('span', { className: 'dot dot-yellow' }),
            h('span', { className: 'dot dot-green' })
          ),
          h('span', { className: 'file-name' }, title)
        ),
        h('button', {
          className: `btn btn-copy ${copied ? 'copied' : ''}`,
          type: 'button',
          onClick: handleCopy,
          'aria-label': `Copy ${title}`
        },
          h('svg', {
            className: 'btn-icon copy-icon',
            viewBox: '0 0 24 24',
            style: { display: copied ? 'none' : 'inline-block' }
          },
            h('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
            h('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
          ),
          h('svg', {
            className: 'btn-icon check-icon',
            viewBox: '0 0 24 24',
            style: { display: copied ? 'inline-block' : 'none' }
          },
            h('polyline', { points: '20 6 9 17 4 12' })
          ),
          h('span', { className: 'btn-text' }, copied ? 'Copied!' : 'Copy')
        )
      ),
      h('div', { className: 'code-body' },
        h('div', { className: 'line-numbers', 'aria-hidden': 'true' },
          lines.map((_, i) => h('span', { key: i }, i + 1))
        ),
        h('pre', null,
          h('code', { className: 'code-content' }, code)
        )
      )
    );
  }

  window.CodeCard = CodeCard;
})();
