import { createElement } from '../../utils/dom';

/**
 * Компонент карточки курса по БЭМ
 * @param {object} course - { id, title, category, price, author, image }
 * @returns {HTMLElement}
 */
export function Card(course) {
  const badgeClass =
    course.category === 'Design'
      ? 'card__badge card__badge--design'
      : course.category === 'Development'
        ? 'card__badge card__badge--development'
        : course.category === 'HR & Recruting'
          ? 'card__badge card__badge--hr'
          : course.category === 'Management'
            ? 'card__badge card__badge--management'
            : 'card__badge';

  const card = createElement('div', { class: 'card' });
  card.innerHTML = `
    <img class="card__image" src="${course.image}" alt="${course.title}" />
    <div class="card__content">
      <div class="${badgeClass}">
        <span class="card__badge-text">${course.category}</span>
      </div>
      <h3 class="card__title">${course.title}</h3>
      <div class="card__info">
        <span class="card__price">${course.price}</span>
        <span class="card__divider">|</span>
        <span class="card__author">${course.author}</span>
      </div>
    </div>
  `;

  return card;
}
