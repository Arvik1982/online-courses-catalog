/**
 * Загружает SVG-файл и вставляет его содержимое в контейнер
 * @param {string} path - путь к SVG-файлу (относительно public/)
 * @param {HTMLElement} container - элемент, куда вставить SVG
 * @returns {Promise<void>}
 */
export async function loadSVG(path, container) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.status} ${response.statusText}`);
    }

    const svgText = await response.text();

    container.innerHTML = svgText;
  } catch (error) {
    console.error(`Error loading SVG from ${path}:`, error);
  }
}
