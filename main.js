// Main entry point - Initializes and mounts the React application
(function () {
  const sectionIds = [
    'git-commands',
    'simple-reg-form',
    'feedback-form',
    'simple-ts-program',
    'registration',
    'react-router',
    'mongodb-cmds',
    'mysql-cmds',
    'spring-boot'
  ];

  const sections = sectionIds
    .map(id => (window.SECTIONS_DATA && window.SECTIONS_DATA[id]) || null)
    .filter(Boolean);

  const rootElement = document.getElementById('root');
  if (rootElement && window.ReactDOM && window.App) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(window.App, { sections }));
  } else {
    console.error('Failed to initialize CopyCode: missing root, ReactDOM, or App component.');
  }
})();
