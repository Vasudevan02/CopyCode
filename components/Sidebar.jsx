// Sidebar.jsx - React JSX Component for sidebar navigation
function Sidebar({ sections, activeSectionId, onSelectSection }) {
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
    </aside>
  );
}

window.Sidebar = Sidebar;
