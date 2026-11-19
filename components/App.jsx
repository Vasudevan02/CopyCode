// App.jsx - Root React JSX Component for CopyCode
function App({ sections }) {
  const [activeSectionId, setActiveSectionId] = React.useState(
    sections[0] ? sections[0].id : 'spring-boot-factory'
  );
  const [selectedType, setSelectedType] = React.useState('spring-boot-factory');
  const [projectName, setProjectName] = React.useState('');
  const [inputVal, setInputVal] = React.useState('');

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  const handleSelectSection = (id) => {
    setActiveSectionId(id);
    setSelectedType(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyProjectName = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;
    setProjectName(trimmed);
    setActiveSectionId(selectedType);
  };

  const handleResetProjectName = () => {
    setProjectName('');
    setInputVal('');
  };

  const transformCode = (code) => {
    if (!code || !projectName) return code;
    return code.replace(/dipdb/g, projectName);
  };

  return (
    <div className="layout-wrapper">
      <Sidebar
        sections={sections}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
        projectName={projectName}
        inputVal={inputVal}
        setInputVal={setInputVal}
        onApplyProjectName={handleApplyProjectName}
        onResetProjectName={handleResetProjectName}
      />
      <div className="container">
        {activeSection && (
          <header className="page-header">
            <h1 id="page-title">{activeSection.pageTitle}</h1>
          </header>
        )}

        {!projectName ? (
          <div className="project-input-container">
            <div className="project-type-selector">
              <label className={`type-option ${selectedType === 'spring-boot-factory' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="projectType"
                  value="spring-boot-factory"
                  checked={selectedType === 'spring-boot-factory'}
                  onChange={() => setSelectedType('spring-boot-factory')}
                />
                <span>Factory</span>
              </label>
              <label className={`type-option ${selectedType === 'spring-boot-hospital' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="projectType"
                  value="spring-boot-hospital"
                  checked={selectedType === 'spring-boot-hospital'}
                  onChange={() => setSelectedType('spring-boot-hospital')}
                />
                <span>Hospital</span>
              </label>
              <label className={`type-option ${selectedType === 'spring-boot-bike' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="projectType"
                  value="spring-boot-bike"
                  checked={selectedType === 'spring-boot-bike'}
                  onChange={() => setSelectedType('spring-boot-bike')}
                />
                <span>Bike Showroom</span>
              </label>
            </div>

            <form onSubmit={handleApplyProjectName} className="project-form">
              <input
                type="text"
                className="project-input"
                placeholder="Enter project name (e.g. vasu)"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="btn-primary"
                disabled={!inputVal.trim()}
              >
                Add Project Name
              </button>
            </form>
          </div>
        ) : (
          <>
            {activeSection && (
              <div className="code-section">
                {activeSection.cards.map((card, idx) => (
                  <CodeCard
                    key={`${activeSection.id}-${idx}-${projectName}`}
                    title={card.title}
                    code={transformCode(card.code)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

window.App = App;
