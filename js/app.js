'use strict';
const parentElement = document.getElementById('cookies');
const restaurantForm = document.getElementById('restaurantForm');

let hourss = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Cookie(name, minCust, maxCust, avgCookieSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.total = 0
    this.avgCookieSale = avgCookieSale;
    this.customerPerHour = [];
    this.avgCustomerConsuming = 0;

    Cookie.allCity.push(this);
}
Cookie.allCity = [];
Cookie.prototype.getAvg = function (min, max) {
    for (let i = 0; i < hourss.length; i++) {
        let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
        this.customerPerHour.push(cookie);
        this.avgCustomerConsuming += cookie;
        console.log(
            cookie
        )
        //console.log(`${this.hours[i]}:${this.cookiesPerHour[i]}`);

    }
    return this.customerPerHour;

};
const articleElement = document.createElement('article');
parentElement.appendChild(articleElement);
const table = document.createElement('table');
articleElement.appendChild(table);
Cookie.prototype.render = function () {

    const tr2 = document.createElement('tr');
    table.appendChild(tr2);

    let td2Element = document.createElement('td')
    tr2.appendChild(td2Element);
    td2Element.textContent = `${this.name}`
    for (let i = 0; i < hourss.length; i++) {
        let td2Element = document.createElement('td')
        tr2.appendChild(td2Element);
        td2Element.textContent = `${this.customerPerHour[i]}`;
    }
    td2Element = document.createElement('td')
    tr2.appendChild(td2Element);
    td2Element.textContent = `${this.avgCustomerConsuming}`
};
console.log('hourss.length',hourss.length);
Cookie.prototype.renderr = function () {
    const tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let thElement = document.createElement('th');
    for (let k = 0; hourss.length+2 > k; k++) {
        if (k == 0) {
            thElement = document.createElement('th');
            thElement.textContent = ' City ';
        }
        else if(k==15) {
            thElement = document.createElement('th');
            thElement.textContent = ' Total ';
        }
        else{
            thElement = document.createElement('th');
            thElement.textContent = hourss[k-1];
        }
        tr1.appendChild(thElement);
    }
};
Cookie.prototype.gitCustNumber = function () {
    const tr3 = document.createElement('tr');
    table.appendChild(tr3);

    let thEle = document.createElement('th');
    tr3.appendChild(thEle)
    thEle.textContent = ' Total';
    let totalOfTotals = 0;
    for (let i = 0; i < hourss.length; i++) {
        let thEle = document.createElement('th');
        let hourlyTotal = 0;
        for (let j = 0; j < Cookie.allCity.length; j++) {
            hourlyTotal += Cookie.allCity[j].customerPerHour[i];
            totalOfTotals += Cookie.allCity[j].customerPerHour[i];
        }
        thEle.textContent = hourlyTotal;
        tr3.appendChild(thEle);
    }
    let th1Ele = document.createElement('th');
    tr3.appendChild(th1Ele);
    th1Ele.textContent = totalOfTotals;
};


let seattleCookie = new Cookie('seattle', 23, 65, 6.3);
let tokyoCookie = new Cookie('tokyo', 3, 24, 1.2);
let dubaiCookie = new Cookie('duai', 11, 38, 3.2);
let parisCookie = new Cookie('paris', 20, 38, 2.3);
let limaCookie = new Cookie('lima', 2, 16, 4.6);
seattleCookie.renderr();
seattleCookie.getAvg();
seattleCookie.render();

tokyoCookie.getAvg();
tokyoCookie.render();
dubaiCookie.getAvg();
dubaiCookie.render();
parisCookie.getAvg();
parisCookie.render();
limaCookie.getAvg();
limaCookie.render();


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

restaurantForm.addEventListener('submit', eventCookie)
function eventCookie(event) {
    event.preventDefault();
    const branchName = event.target.branchName.value;
    const minimumCust = event.target.minimumCust.value;
    const maxCustt = event.target.maxCustt.value;
    const avgCookies = event.target.avgCookies.value;
   
    console.log(branchName, minimumCust, maxCustt, avgCookies)
  

    let restaurant = new Cookie(branchName, Number(minimumCust), Number(maxCustt), Number(avgCookies));
    restaurant.getAvg();
    restaurant.render();
    //restaurant.gitCustNumber();
    seattleCookie.gitCustNumber();
    // table.textContent='';
    // seattleCookie.gitCustNumber();
    restaurantForm.reset();
  
    // seattleCookie.gitCustNumber.eventCookie().restaurant;
    // seattleCookie.gitCustNumber();
}
// seattleCookie.gitCustNumber();
// table.textContent='';
seattleCookie.gitCustNumber();