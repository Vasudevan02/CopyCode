// CodeCard.jsx - React JSX Component for an individual code card
function CodeCard({ title, code }) {
  const [copied, setCopied] = React.useState(false);

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

  return (
    <div className="code-card">
      <div className="code-toolbar">
        <div className="left-section">
          <div className="window-dots" aria-hidden="true">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="file-name">{title}</span>
        </div>
        <button
          className={`btn btn-copy ${copied ? 'copied' : ''}`}
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${title}`}
        >
          <svg
            className="btn-icon copy-icon"
            viewBox="0 0 24 24"
            style={{ display: copied ? 'none' : 'inline-block' }}
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg
            className="btn-icon check-icon"
            viewBox="0 0 24 24"
            style={{ display: copied ? 'inline-block' : 'none' }}
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="btn-text">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="code-body">
        <div className="line-numbers" aria-hidden="true">
          {lines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre>
          <code className="code-content">{code}</code>
        </pre>
      </div>
    </div>
  );
}

window.CodeCard = CodeCard;
