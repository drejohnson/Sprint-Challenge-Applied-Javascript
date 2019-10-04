import createElement from '../../lib/createElement.js'
// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const { div, h1, span } = createElement()

function Header() {
  return div({ class: "header" }, [
    span({ class: 'date' }, 'SMARCH 28, 2019'),
    h1({}, 'Lambda Times'),
    span({ class: 'temp' }, '98')
  ])
}

const h = Header()

const container = document.querySelector('.header-container')
container.appendChild(h)
