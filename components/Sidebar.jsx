// Sidebar.jsx - React JSX Component for sidebar navigation
function Sidebar({
  sections,
  activeSectionId,
  onSelectSection,
  projectName,
  inputVal,
  setInputVal,
  onApplyProjectName,
  onResetProjectName,
  onLock
}) {
  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    if (onApplyProjectName) onApplyProjectName();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>CheatSheets</span>
        </h2>
      </div>
      <ul className="nav-list">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`nav-item ${activeSectionId === section.id ? 'active' : ''}`}
            onClick={() => onSelectSection(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>

      <div className="sidebar-bottom-section">
        <span className="sidebar-bottom-label">Project Name</span>
        <form onSubmit={handleSidebarSubmit} className="sidebar-project-form">
          <input
            type="text"
            className="sidebar-project-input"
            placeholder="e.g. fsdevelopment"
            value={inputVal || ''}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            type="submit"
            className="btn-primary btn-sm"
            disabled={!inputVal || !inputVal.trim()}
          >
            Set
          </button>
        </form>
        {projectName && (
          <div className="sidebar-active-tag">
            <span>{projectName}</span>
            <button
              type="button"
              className="sidebar-reset-btn"
              onClick={onResetProjectName}
              title="Reset to dipdb"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}
        {onLock && (
          <button
            type="button"
            className="sidebar-lock-btn"
            onClick={onLock}
            title="Lock Page"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Lock Page</span>
          </button>
        )}
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
