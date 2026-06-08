import { clearContainer } from './dom';

export function render(container, element) {
  clearContainer(container);
  container.appendChild(element);
}
