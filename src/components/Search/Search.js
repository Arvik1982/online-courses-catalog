import { createElement } from '../../utils/dom';

/**
 * Компонент поля поиска по БЭМ
 * @param {Function} onInput - callback с поисковым запросом
 * @returns {HTMLElement}
 */
export function Search(onInput) {
  const searchBlock = createElement('div', { class: 'search' });

  searchBlock.innerHTML = `
    <div class="search__icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="$gray-600" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    </div>
    <input
      class="search__input"
      type="text"
      placeholder="Search course..."
      autocomplete="off"
    />
  `;

  const input = searchBlock.querySelector('.search__input');

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    onInput(query);
  });

  return searchBlock;
}
