import coursesData from './data/courses';
import { Search } from './components/Search/Search';
import { Tabs } from './components/Tabs/Tabs';
import { CoursesGrid } from './layouts/CoursesGrid/CoursesGrid';
import { render } from './utils/render';
import { loadSVG } from './utils/loadSVG';

function createAppState() {
  return {
    query: '',
    category: 'All',
    courses: coursesData,
  };
}

function getFilteredCourses(state) {
  const { courses, category, query } = state;

  let filtered = category === 'All' ? [...courses] : courses.filter((c) => c.category === category);

  if (query) {
    const searchQuery = query.toLowerCase();
    filtered = filtered.filter((c) => c.title.toLowerCase().includes(searchQuery));
  }

  return filtered;
}

function getTabsData(state) {
  const { courses, category } = state;
  const categoriesMap = {};

  courses.forEach((course) => {
    categoriesMap[course.category] = (categoriesMap[course.category] || 0) + 1;
  });

  const tabs = [
    {
      label: 'All',
      count: courses.length,
      active: category === 'All',
    },
  ];

  Object.keys(categoriesMap)
    .sort()
    .forEach((cat) => {
      tabs.push({
        label: cat,
        count: categoriesMap[cat],
        active: category === cat,
      });
    });

  return tabs;
}

function renderGrid(root, state) {
  const gridContainer = root.querySelector('.page__grid');
  if (!gridContainer) return;

  const filteredCourses = getFilteredCourses(state);
  render(gridContainer, CoursesGrid(filteredCourses));
}

function renderTabs(root, state) {
  const tabsContainer = root.querySelector('.page__tabs');
  if (!tabsContainer) return;

  const tabsData = getTabsData(state);
  render(
    tabsContainer,
    Tabs(tabsData, (cat) => handleCategorySelect(root, state, cat))
  );
}

function renderDecorations(root) {
  const decorations = [
    { name: 'dots', svg: '/assets/icons/dots.svg' },
    { name: 'shape-left', svg: '/assets/icons/shape-left.svg' },
    { name: 'shape-right', svg: '/assets/icons/shape-right.svg' },
  ];

  decorations.forEach(({ name, svg }) => {
    const container = root.querySelector(`.app__${name}`);
    if (container) {
      loadSVG(svg, container);
    }
  });
}

function renderApp(root) {
  root.innerHTML = '';

  const decorations = ['dots', 'shape-left', 'shape-right'];
  decorations.forEach((name) => {
    const div = document.createElement('div');
    div.className = `app__${name}`;
    root.appendChild(div);
  });

  const page = document.createElement('div');
  page.className = 'page';
  page.innerHTML = `
    <section class="page__hero">
      <h1 class="page__title">ENJOY YOUR STUDYING!</h1>
      <p class="page__subtitle">Our online courses</p>
    </section>

    <div class="page__controls">
      <div class="page__tabs"></div>
      <div class="page__search"></div>
    </div>

    <div class="page__grid"></div>

    <div class="page__load-more">
      <button class="button--secondary" type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4V20M20 12H4"/>
        </svg>
        Load more
      </button>
    </div>
  `;
  root.appendChild(page);
}

function handleSearch(root, state, query) {
  state.query = query;
  renderGrid(root, state);
}

function handleCategorySelect(root, state, category) {
  state.category = category;
  renderTabs(root, state);
  renderGrid(root, state);
}

function initApp() {
  const root = document.getElementById('app');
  if (!root) {
    console.error('Root element #app not found');
    return;
  }

  const state = createAppState();

  renderApp(root);

  renderDecorations(root);

  const page = root.querySelector('.page');

  const tabsContainer = page.querySelector('.page__tabs');
  const tabsData = getTabsData(state);
  render(
    tabsContainer,
    Tabs(tabsData, (cat) => handleCategorySelect(root, state, cat))
  );

  const searchContainer = page.querySelector('.page__search');
  render(
    searchContainer,
    Search((query) => handleSearch(root, state, query))
  );

  const gridContainer = page.querySelector('.page__grid');
  render(gridContainer, CoursesGrid(getFilteredCourses(state)));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
