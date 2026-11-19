// Sidebar.jsx - React JSX Component for sidebar navigation
function Sidebar({
  sections,
  activeSectionId,
  onSelectSection,
  projectName,
  inputVal,
  setInputVal,
  onApplyProjectName,
  onResetProjectName
}) {
  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    if (onApplyProjectName) onApplyProjectName();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>CheatSheets</h2>
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
              ✕
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
