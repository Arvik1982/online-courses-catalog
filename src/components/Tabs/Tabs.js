import { createElement } from '../../utils/dom';

/**
 * Компонент табов-фильтров по БЭМ
 * @param {Array} tabs - [{ label, count, active }]
 * @param {Function} onSelect - callback с выбранной категорией
 * @returns {HTMLElement}
 */
export function Tabs(tabs, onSelect) {
  const tabsContainer = createElement('div', { class: 'tabs' });

  tabs.forEach((tab) => {
    const tabButton = createElement('button', {
      class: `tabs__tab ${tab.active ? 'tabs__tab--active' : ''}`,
      type: 'button',
    });

    tabButton.innerHTML = `
      <span class="tabs__label">${tab.label}</span>
      <span class="tabs__count">${tab.count}</span>
    `;

    tabButton.addEventListener('click', () => {
      onSelect(tab.label);
    });

    tabsContainer.appendChild(tabButton);
  });

  return tabsContainer;
}
