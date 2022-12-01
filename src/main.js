// Fetch the items from the JSON file
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items){
    const container=document.querySelector(".items");
    const HTML = items.map(item => createHTMLString(item)).join('');
    console.log(HTML);
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}"class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
    `;
}

// 4. button event
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    // console.log(key);
    // console.log(value);
    // console.log(items.filter(item => item[key] == value));

    const filterData = items.filter(item => item[key] == value);
    displayItems(filterData);
}

// 5. setEvent
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', () => onButtonClick(event, items));
}

// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);