// App Component - Root React component for CopyCode
(function () {
  const { useState, createElement: h } = React;

  function App({ sections }) {
    const [activeSectionId, setActiveSectionId] = useState(
      sections[0] ? sections[0].id : ''
    );

    const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

    const handleSelectSection = (id) => {
      setActiveSectionId(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return h('div', { className: 'layout-wrapper' },
      h(window.Sidebar, {
        sections: sections,
        activeSectionId: activeSectionId,
        onSelectSection: handleSelectSection
      }),
      h('div', { className: 'container' },
        activeSection && h('header', { className: 'page-header' },
          h('h1', { id: 'page-title' }, activeSection.pageTitle)
        ),
        activeSection && h('div', { className: 'code-section' },
          activeSection.cards.map((card, idx) =>
            h(window.CodeCard, {
              key: `${activeSection.id}-${idx}`,
              title: card.title,
              code: card.code
            })
          )
        )
      )
    );
  }

  window.App = App;
})();
