import createElement from '../../lib/createElement.js'

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const container = document.querySelector('.topics')

const { div } = createElement()

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    const topics = response.data.topics
    topics.forEach(topic => {
      const t = Tab(topic)
      container.appendChild(t)
    });
  })

function Tab(topic) {
  return div({ class: "tab" }, topic)
}

