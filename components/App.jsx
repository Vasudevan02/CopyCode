// App.jsx - Root React JSX Component for CopyCode
function App({ sections }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    return sessionStorage.getItem('copycode_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = React.useState('');
  const [authError, setAuthError] = React.useState(false);

  const [activeSectionId, setActiveSectionId] = React.useState(
    sections[0] ? sections[0].id : 'spring-boot-factory'
  );
  const [selectedType, setSelectedType] = React.useState('spring-boot-factory');
  const [projectName, setProjectName] = React.useState('');
  const [inputVal, setInputVal] = React.useState('');

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === '@123@') {
      setIsAuthenticated(true);
      setAuthError(false);
      sessionStorage.setItem('copycode_auth', 'true');
    } else {
      setAuthError(true);
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem('copycode_auth');
    setIsAuthenticated(false);
    setPasswordInput('');
    setAuthError(false);
  };

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

  if (!isAuthenticated) {
    return (
      <div className="login-overlay">
        <div className="login-card">
          <div className="login-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h2>CopyCode Access</h2>
          <p className="login-subtitle">Enter password to unlock developer cheat sheets</p>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="password"
              className={`project-input login-input ${authError ? 'input-error' : ''}`}
              placeholder="Enter password..."
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                if (authError) setAuthError(false);
              }}
              autoFocus
            />
            {authError && <div className="login-error-msg">Incorrect password. Please try again.</div>}
            <button type="submit" className="btn-primary login-btn">
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

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
        onLock={handleLock}
      />
      <div className="container">
        {activeSection && (
          <header className="page-header">
            <h1 id="page-title">{activeSection.pageTitle}</h1>
          </header>
        )}

        {!projectName ? (
          <>
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

          <div className="postman-reference-section">
            <div className="postman-reference-header">
              <h3>Postman Request Bodies (JSON)</h3>
              <p>Sample payloads for testing POST endpoints</p>
            </div>
            <div className="postman-grid">
              <div className="postman-card-wrapper">
                <div className="postman-card-label">Hospital (POST /newpatient):</div>
                <CodeCard
                  title="POST /newpatient (JSON)"
                  code={`{\n  "p_id": 1,\n  "p_name": "Raju",\n  "p_address": "Chennai",\n  "p_phoneNo": 9876543210\n}`}
                />
              </div>
              <div className="postman-card-wrapper">
                <div className="postman-card-label">Factory (POST /newemploy):</div>
                <CodeCard
                  title="POST /newemploy (JSON)"
                  code={`{\n  "empno": 1,\n  "ename": "Raju",\n  "job": "Developer",\n  "salary": "50000"\n}`}
                />
              </div>
              <div className="postman-card-wrapper">
                <div className="postman-card-label">Bike Showroom (POST /newbike):</div>
                <CodeCard
                  title="POST /newbike (JSON)"
                  code={`{\n  "bike_id": 1,\n  "model_nuber": "R15",\n  "brand": "Yamaha",\n  "color": "Blue"\n}`}
                />
              </div>
            </div>
          </div>
          </>
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
