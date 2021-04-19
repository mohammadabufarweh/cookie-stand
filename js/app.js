'use strict';
const parentElement = document.getElementById('cookies');
let am = 5;
let pm = 1;
let Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    houersam: 0,
    houerspm: 0,
    avgCustomerConsuming:0,
    getAvg: function (min, max) {

        this.avgCustomerConsuming = getRandomIntInclusive(this.minCust, this.maxCust)
        
    },
    

    render: function () {
        const parentElement = document.getElementById('cookies');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        articleElement.appendChild(h2Element);

        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 6; i <= 11; i++) {
            if (i <= 11) {
                let liElement = document.createElement('li');
                liElement.textContent = `${i}am,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
        let liElement = document.createElement('li');
        liElement.textContent = `${12}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
        ulElement.appendChild(liElement);
        for (let k = 1; k < 13; k++) {

            if (k <= 7) {
                let liElement = document.createElement('li');
                liElement.textContent = `${k}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
    },
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let tokyo = {
    name: 'tokyo',
    minCust: 3,
    maxCust:24,
    avgCookieSale: 1.2,
    houersam: 0,
    houerspm: 0,
    avgCustomerConsuming:0,
    getAvg: function (min, max) {

        this.avgCustomerConsuming = getRandomIntInclusive(this.minCust, this.maxCust)
        
    },
    

    render: function () {
        const parentElement = document.getElementById('cookies');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        articleElement.appendChild(h2Element);

        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 6; i <= 11; i++) {
            if (i <= 11) {
                let liElement = document.createElement('li');
                liElement.textContent = `${i}am,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
        let liElement = document.createElement('li');
        liElement.textContent = `${12}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
        ulElement.appendChild(liElement);
        for (let k = 1; k < 13; k++) {

            if (k <= 7) {
                let liElement = document.createElement('li');
                liElement.textContent = `${k}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
    },
}


let Dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust:38,
    avgCookieSale: 3.7,
    houersam: 0,
    houerspm: 0,
    avgCustomerConsuming:0,
    getAvg: function (min, max) {

        this.avgCustomerConsuming = getRandomIntInclusive(this.minCust, this.maxCust)
        
    },
    

    render: function () {
        const parentElement = document.getElementById('cookies');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        articleElement.appendChild(h2Element);

        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 6; i <= 11; i++) {
            if (i <= 11) {
                let liElement = document.createElement('li');
                liElement.textContent = `${i}am,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
        let liElement = document.createElement('li');
        liElement.textContent = `${12}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
        ulElement.appendChild(liElement);
        for (let k = 1; k < 13; k++) {

            if (k <= 7) {
                let liElement = document.createElement('li');
                liElement.textContent = `${k}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
    },
}


let Paris = {
    name: 'Paris',
    minCust: 20,
    maxCust:38,
    avgCookieSale:2.3,
    houersam: 0,
    houerspm: 0,
    avgCustomerConsuming:0,
    getAvg: function (min, max) {

        this.avgCustomerConsuming = getRandomIntInclusive(this.minCust, this.maxCust)
        
    },
    

    render: function () {
        const parentElement = document.getElementById('cookies');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        articleElement.appendChild(h2Element);

        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 6; i <= 11; i++) {
            if (i <= 11) {
                let liElement = document.createElement('li');
                liElement.textContent = `${i}am,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
        let liElement = document.createElement('li');
        liElement.textContent = `${12}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
        ulElement.appendChild(liElement);
        for (let k = 1; k < 13; k++) {

            if (k <= 7) {
                let liElement = document.createElement('li');
                liElement.textContent = `${k}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
    },
}
let Lima = {
    name: 'Lima	',
    minCust: 2,
    maxCust:16,
    avgCookieSale:4.6,
    houersam: 0,
    houerspm: 0,
    avgCustomerConsuming:0,
    getAvg: function (min, max) {

        this.avgCustomerConsuming = getRandomIntInclusive(this.minCust, this.maxCust)
        
    },
    

    render: function () {
        const parentElement = document.getElementById('cookies');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        articleElement.appendChild(h2Element);

        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 6; i <= 11; i++) {
            if (i <= 11) {
                let liElement = document.createElement('li');
                liElement.textContent = `${i}am,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
        let liElement = document.createElement('li');
        liElement.textContent = `${12}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
        ulElement.appendChild(liElement);
        for (let k = 1; k < 13; k++) {

            if (k <= 7) {
                let liElement = document.createElement('li');
                liElement.textContent = `${k}pm,${Math.ceil(this.avgCustomerConsuming * this.avgCookieSale)} cookies`;
                ulElement.appendChild(liElement);
            }
        }
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
Dubai.getAvg();
Dubai.render();
Paris.getAvg();
Paris.render();
Lima.getAvg();
Lima.render();

