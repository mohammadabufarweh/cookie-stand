'use strict';
const parentElement = document.getElementById('cookies');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    cookiesPerHour: [],
    customerPerHour: [],
    avgCustomerConsuming: 0,
    getAvg: function (min, max) {
        for (let i = 0; i < hours.length; i++) {
            let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
            this.cookiesPerHour.push(cookie);
            this.avgCustomerConsuming += cookie;
            console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
        }
    },
    render: function () {
        const articleElement = document.createElement('article');
parentElement.appendChild(articleElement);

const h2Element = document.createElement('h2');
h2Element.textContent = this.name;
articleElement.appendChild(h2Element);

let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement)


    for (let i = 0; i < hours.length; i++) {
let liElement = document.createElement('li');
liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
ulElement.appendChild(liElement);

    },
}
let tokyo = {
    name: 'tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    cookiesPerHour: [],
    customerPerHour: [],
    avgCustomerConsuming: 0,
    getAvg: function (min, max) {
        for (let i = 0; i < hours.length; i++) {
            let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
            this.cookiesPerHour.push(cookie);
            this.avgCustomerConsuming += cookie;
            console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
        }
    },
    render: function () {
        const articleElement = document.createElement('article');
parentElement.appendChild(articleElement);

const h2Element = document.createElement('h2');
h2Element.textContent = this.name;
articleElement.appendChild(h2Element);

let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement)


    for (let i = 0; i < hours.length; i++) {
let liElement = document.createElement('li');
liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
ulElement.appendChild(liElement);

    },
}
let dubai = {
    name: 'dubai',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    cookiesPerHour: [],
    customerPerHour: [],
    avgCustomerConsuming: 0,
    getAvg: function (min, max) {
        for (let i = 0; i < hours.length; i++) {
            let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
            this.cookiesPerHour.push(cookie);
            this.avgCustomerConsuming += cookie;
            console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
        }
    },
    render: function () {
        const articleElement = document.createElement('article');
parentElement.appendChild(articleElement);

const h2Element = document.createElement('h2');
h2Element.textContent = this.name;
articleElement.appendChild(h2Element);

let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement)


    for (let i = 0; i < hours.length; i++) {
let liElement = document.createElement('li');
liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
ulElement.appendChild(liElement);

    },
}
let paris = {
    name: 'paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    cookiesPerHour: [],
    customerPerHour: [],
    avgCustomerConsuming: 0,
    getAvg: function (min, max) {
        for (let i = 0; i < hours.length; i++) {
            let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
            this.cookiesPerHour.push(cookie);
            this.avgCustomerConsuming += cookie;
            console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
        }
    },
    render: function () {
        const articleElement = document.createElement('article');
parentElement.appendChild(articleElement);

const h2Element = document.createElement('h2');
h2Element.textContent = this.name;
articleElement.appendChild(h2Element);

let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement)


    for (let i = 0; i < hours.length; i++) {
let liElement = document.createElement('li');
liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
ulElement.appendChild(liElement);

    },
}
let lima = {
    name: 'lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    cookiesPerHour: [],
    customerPerHour: [],
    avgCustomerConsuming: 0,
    getAvg: function (min, max) {
        for (let i = 0; i < hours.length; i++) {
            let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
            this.cookiesPerHour.push(cookie);
            this.avgCustomerConsuming += cookie;
            console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
        }
    },
    render: function () {
        const articleElement = document.createElement('article');
parentElement.appendChild(articleElement);

const h2Element = document.createElement('h2');
h2Element.textContent = this.name;
articleElement.appendChild(h2Element);

let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement)


    for (let i = 0; i < hours.length; i++) {
let liElement = document.createElement('li');
liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
ulElement.appendChild(liElement);

    },
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Seattle.getAvg();
Seattle.render();
tokyo.getAvg();
tokyo.render();
dubai.getAvg();
dubai.render();
paris.getAvg();
paris.render();
lima.getAvg();
lima.render();

