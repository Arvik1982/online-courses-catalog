/**
 * Создаёт HTML-элемент с атрибутами и классами
 * @param {string} tag
 * @param {object} options - { class, ...attrs, innerHTML, children }
 * @returns {HTMLElement}
 */
export function createElement(tag, options = {}) {
  const { class: className, innerHTML, children, ...attrs } = options;

  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (innerHTML !== undefined) {
    element.innerHTML = innerHTML;
  }

  if (children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }

  Object.keys(attrs).forEach((key) => {
    element.setAttribute(key, attrs[key]);
  });

  return element;
}

/**
 * Очищает контейнер
 * @param {HTMLElement} container
 */
export function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
