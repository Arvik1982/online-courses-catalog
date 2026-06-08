var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=[{id:1,category:`Marketing`,title:`The Ultimate Google Ads Training Course`,price:`$100`,author:`by Jerome Bell`,image:`https://c.animaapp.com/S9lGUeEE/img/image@2x.png`},{id:2,category:`Design`,title:`User Experience. Human-centered Design`,price:`$240`,author:`by Cody Fisher`,image:`https://c.animaapp.com/S9lGUeEE/img/image-1@2x.png`},{id:3,category:`HR & Recruting`,title:`Human Resources – Selection and Recruitment`,price:`$150`,author:`by Kathryn Murphy`,image:`https://c.animaapp.com/S9lGUeEE/img/image-2@2x.png`},{id:4,category:`Development`,title:`Highload Software Architecture`,price:`$600`,author:`by Brooklyn Simmons`,image:`https://c.animaapp.com/S9lGUeEE/img/image-3@2x.png`},{id:5,category:`Management`,title:`Business Development Management`,price:`$400`,author:`by Dianne Russell`,image:`https://c.animaapp.com/S9lGUeEE/img/image-4@2x.png`},{id:6,category:`Design`,title:`Graphic Design Basic`,price:`$500`,author:`by Guy Hawkins`,image:`https://c.animaapp.com/S9lGUeEE/img/image-5@2x.png`},{id:7,category:`Marketing`,title:`Brand Management & PR Communications`,price:`$530`,author:`by Kristin Watson`,image:`https://c.animaapp.com/S9lGUeEE/img/image-6@2x.png`},{id:8,category:`HR & Recruting`,title:`HR Management and Analytics`,price:`$200`,author:`by Leslie Alexander Li`,image:`https://c.animaapp.com/S9lGUeEE/img/image-7@2x.png`},{id:9,category:`Management`,title:`Product Management Fundamentals`,price:`$480`,author:`by Marvin McKinney`,image:`https://c.animaapp.com/S9lGUeEE/img/image-8@2x.png`},{id:10,category:`Marketing`,title:`The Ultimate Google Ads Training Course`,price:`$100`,author:`by Jerome Bell`,image:`https://c.animaapp.com/S9lGUeEE/img/image-9@2x.png`},{id:11,category:`Management`,title:`Leadership & Team Management`,price:`$350`,author:`by Jane Cooper`,image:`https://c.animaapp.com/S9lGUeEE/img/image@2x.png`},{id:12,category:`HR & Recruting`,title:`Talent Acquisition & Retention`,price:`$180`,author:`by Jenny Wilson`,image:`https://c.animaapp.com/S9lGUeEE/img/image-1@2x.png`},{id:13,category:`HR & Recruting`,title:`HR & Recruting Analytics`,price:`$220`,author:`by Jacob Jones`,image:`https://c.animaapp.com/S9lGUeEE/img/image-2@2x.png`},{id:14,category:`HR & Recruting`,title:`Workplace Diversity`,price:`$190`,author:`by Kristin Watson`,image:`https://c.animaapp.com/S9lGUeEE/img/image-3@2x.png`},{id:15,category:`Marketing`,title:`Social Media Marketing`,price:`$280`,author:`by Jerome Bell`,image:`https://c.animaapp.com/S9lGUeEE/img/image-4@2x.png`},{id:16,category:`Marketing`,title:`SEO Fundamentals`,price:`$320`,author:`by Cody Fisher`,image:`https://c.animaapp.com/S9lGUeEE/img/image-5@2x.png`},{id:17,category:`Development`,title:`React Advanced Patterns`,price:`$550`,author:`by Brooklyn Simmons`,image:`https://c.animaapp.com/S9lGUeEE/img/image-6@2x.png`},{id:18,category:`Development`,title:`Node.js Microservices`,price:`$480`,author:`by Dianne Russell`,image:`https://c.animaapp.com/S9lGUeEE/img/image-7@2x.png`},{id:19,category:`Development`,title:`GraphQL API Design`,price:`$420`,author:`by Guy Hawkins`,image:`https://c.animaapp.com/S9lGUeEE/img/image-8@2x.png`},{id:20,category:`Design`,title:`UI/UX Design Principles`,price:`$300`,author:`by Kristin Watson`,image:`https://c.animaapp.com/S9lGUeEE/img/image-9@2x.png`}]}));function i(e,t={}){let{class:n,innerHTML:r,children:i,...a}=t,o=document.createElement(e);return n&&(o.className=n),r!==void 0&&(o.innerHTML=r),i&&i.forEach(e=>{typeof e==`string`?o.appendChild(document.createTextNode(e)):o.appendChild(e)}),Object.keys(a).forEach(e=>{o.setAttribute(e,a[e])}),o}function a(e){for(;e.firstChild;)e.removeChild(e.firstChild)}var o=e((()=>{}));function s(e){let t=i(`div`,{class:`search`});return t.innerHTML=`
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
  `,t.querySelector(`.search__input`).addEventListener(`input`,t=>{e(t.target.value.trim().toLowerCase())}),t}var c=e((()=>{o()}));function l(e,t){let n=i(`div`,{class:`tabs`});return e.forEach(e=>{let r=i(`button`,{class:`tabs__tab ${e.active?`tabs__tab--active`:``}`,type:`button`});r.innerHTML=`
      <span class="tabs__label">${e.label}</span>
      <span class="tabs__count">${e.count}</span>
    `,r.addEventListener(`click`,()=>{t(e.label)}),n.appendChild(r)}),n}var u=e((()=>{o()}));function d(e){let t=e.category===`Design`?`card__badge card__badge--design`:e.category===`Development`?`card__badge card__badge--development`:e.category===`HR & Recruting`?`card__badge card__badge--hr`:e.category===`Management`?`card__badge card__badge--management`:`card__badge`,n=i(`div`,{class:`card`});return n.innerHTML=`
    <img class="card__image" src="${e.image}" alt="${e.title}" />
    <div class="card__content">
      <div class="${t}">
        <span class="card__badge-text">${e.category}</span>
      </div>
      <h3 class="card__title">${e.title}</h3>
      <div class="card__info">
        <span class="card__price">${e.price}</span>
        <span class="card__divider">|</span>
        <span class="card__author">${e.author}</span>
      </div>
    </div>
  `,n}var f=e((()=>{o()}));function p(e){let t=i(`div`,{class:`courses-grid`});if(e.length===0){let e=i(`div`,{class:`courses-grid__empty`,innerHTML:`<p>No courses found</p>`});return t.appendChild(e),t}return e.forEach(e=>{let n=d(e);t.appendChild(n)}),t}var m=e((()=>{o(),f()}));function h(e,t){a(e),e.appendChild(t)}var g=e((()=>{o()}));async function _(e,t){try{let n=await fetch(e);if(!n.ok)throw Error(`Failed to load SVG: ${n.status} ${n.statusText}`);t.innerHTML=await n.text()}catch(t){console.error(`Error loading SVG from ${e}:`,t)}}var v=e((()=>{}));t((()=>{r(),c(),u(),m(),g(),v();function e(){return{query:``,category:`All`,courses:n}}function t(e){let{courses:t,category:n,query:r}=e,i=n===`All`?[...t]:t.filter(e=>e.category===n);if(r){let e=r.toLowerCase();i=i.filter(t=>t.title.toLowerCase().includes(e))}return i}function i(e){let{courses:t,category:n}=e,r={};t.forEach(e=>{r[e.category]=(r[e.category]||0)+1});let i=[{label:`All`,count:t.length,active:n===`All`}];return Object.keys(r).sort().forEach(e=>{i.push({label:e,count:r[e],active:n===e})}),i}function a(e,n){let r=e.querySelector(`.page__grid`);r&&h(r,p(t(n)))}function o(e,t){let n=e.querySelector(`.page__tabs`);n&&h(n,l(i(t),n=>b(e,t,n)))}function d(e){[{name:`dots`,svg:`assets/icons/dots.svg`},{name:`shape-left`,svg:`assets/icons/shape-left.svg`},{name:`shape-right`,svg:`assets/icons/shape-right.svg`}].forEach(({name:t,svg:n})=>{let r=e.querySelector(`.app__${t}`);r&&_(n,r)})}function f(e){e.innerHTML=``,[`dots`,`shape-left`,`shape-right`].forEach(t=>{let n=document.createElement(`div`);n.className=`app__${t}`,e.appendChild(n)});let t=document.createElement(`div`);t.className=`page`,t.innerHTML=`
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
  `,e.appendChild(t)}function y(e,t,n){t.query=n,a(e,t)}function b(e,t,n){t.category=n,o(e,t),a(e,t)}function x(){let n=document.getElementById(`app`);if(!n){console.error(`Root element #app not found`);return}let r=e();f(n),d(n);let a=n.querySelector(`.page`);h(a.querySelector(`.page__tabs`),l(i(r),e=>b(n,r,e))),h(a.querySelector(`.page__search`),s(e=>y(n,r,e))),h(a.querySelector(`.page__grid`),p(t(r)))}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,x):x()}))();