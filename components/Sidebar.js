// Sidebar Component - React component for sidebar navigation
(function () {
  const { createElement: h } = React;

  function Sidebar({ sections, activeSectionId, onSelectSection }) {
    return h('aside', { className: 'sidebar' },
      h('div', { className: 'sidebar-header' },
        h('h2', null, 'CheatSheets')
      ),
      h('ul', { className: 'nav-list' },
        sections.map(section =>
          h('li', {
            key: section.id,
            className: `nav-item ${activeSectionId === section.id ? 'active' : ''}`,
            onClick: () => onSelectSection(section.id)
          }, section.title)
        )
      )
    );
  }

  window.Sidebar = Sidebar;
})();
