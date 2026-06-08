import { createElement } from '../../utils/dom';
import { Card } from '../../components/Card/Card';

/**
 * Сетка карточек курсов
 * @param {Array} courses - массив курсов
 * @returns {HTMLElement}
 */
export function CoursesGrid(courses) {
  const grid = createElement('div', { class: 'courses-grid' });

  if (courses.length === 0) {
    const empty = createElement('div', {
      class: 'courses-grid__empty',
      innerHTML: '<p>No courses found</p>',
    });
    grid.appendChild(empty);
    return grid;
  }

  courses.forEach((course) => {
    const cardElement = Card(course);
    grid.appendChild(cardElement);
  });

  return grid;
}
