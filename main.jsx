// main.jsx - Entry point mounting React JSX App to DOM
(function () {
  const sectionIds = [
    'spring-boot-factory',
    'spring-boot-hospital',
    'spring-boot-bike'
  ];

  const sections = sectionIds
    .map((id) => (window.SECTIONS_DATA && window.SECTIONS_DATA[id]) || null)
    .filter(Boolean);

  const rootElement = document.getElementById('root');
  if (rootElement && window.ReactDOM && window.App) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App sections={sections} />);
  } else {
    console.error('Failed to initialize CopyCode: missing root, ReactDOM, or App component.');
  }
})();
