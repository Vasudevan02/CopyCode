// App.jsx - Root React JSX Component for CopyCode
function App({ sections }) {
  const [activeSectionId, setActiveSectionId] = React.useState(
    sections[0] ? sections[0].id : ''
  );

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  const handleSelectSection = (id) => {
    setActiveSectionId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="layout-wrapper">
      <Sidebar
        sections={sections}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
      />
      <div className="container">
        {activeSection && (
          <header className="page-header">
            <h1 id="page-title">{activeSection.pageTitle}</h1>
          </header>
        )}
        {activeSection && (
          <div className="code-section">
            {activeSection.cards.map((card, idx) => (
              <CodeCard
                key={`${activeSection.id}-${idx}`}
                title={card.title}
                code={card.code}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

window.App = App;
