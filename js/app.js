'use strict';
const parentElement = document.getElementById('cookies');
let hourss = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Cookie(name, minCust, maxCust, avgCookieSale, cookiesPerHour, customerPerHour, hours,Total) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.cookiesPerHour = cookiesPerHour;
    this.customerPerHour = customerPerHour;
    this.avgCustomerConsuming = 0;
    this.hours = hours;
    Cookie.allCity.push(this);
    this.total=0
}
Cookie.allCity = [];
Cookie.prototype.getAvg = function (min, max) {
    for (let i = 0; i < hourss.length; i++) {
        let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
        this.cookiesPerHour.push(cookie);
        this.avgCustomerConsuming += cookie;
        console.log(`${this.hours[i]}:${this.cookiesPerHour[i]}`);
        
    };
}
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
        td2Element.textContent = `${this.cookiesPerHour[i]}`;
    }
    td2Element = document.createElement('td')
    tr2.appendChild(td2Element);
    td2Element.textContent = `${this.avgCustomerConsuming}`
};

Cookie.prototype.renderr = function () {
    const tr1 = document.createElement('tr');
    table.appendChild(tr1);
    for (let k = 0; this.hours.length > k; k++) {

        let thElement = document.createElement('th');
        thElement.textContent = this.hours[k];
        tr1.appendChild(thElement);
    }
};
Cookie.prototype.gitCustNumber = function () {
    const tr3 = document.createElement('tr');
    table.appendChild(tr3);
  
      let thEle = document.createElement('th');
      tr3.appendChild(thEle)
        thEle.textContent =' Total';
        let totalOfTotals = 0;
        for (let i = 0; i < hourss.length; i++) {
            let thEle = document.createElement('th');
            let hourlyTotal = 0;
            for(let j = 0; j <Cookie.allCity.length; j++) {
              hourlyTotal +=Cookie.allCity[j].cookiesPerHour[i];
              totalOfTotals +=Cookie.allCity[j].cookiesPerHour[i];
            }
            thEle.textContent = hourlyTotal;
            tr3.appendChild(thEle);
          } 
          let th1Ele = document.createElement('th');
          tr3.appendChild(th1Ele);
          th1Ele.textContent = totalOfTotals;     
    };


let seattleCookie = new Cookie('seattle', 23, 65, 6.3, [], 0, ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','total']);
let tokyoCookie = new Cookie('tokyo', 3, 24, 1.2, [], [], 0,0);
let dubaiCookie = new Cookie('duai', 11, 38, 3.2, [], [], 0,0);
let parisCookie = new Cookie('paris', 20, 38, 2.3, [], [], 0,0);
let limaCookie = new Cookie('lima', 2, 16, 4.6, [], [], 0,0);
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
seattleCookie.gitCustNumber();
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}





//   let headArray = ['Is Good With Kids', 'Is Good With Cats', 'Is Good With Dogs'];
//   for(let i = 0; i < headArray.length; i++) {
//     const th = document.createElement('th');
//     tr1.appendChild(th);
//     th.textContent = headArray[i];
//   }

// Cat.prototype.render = function() {
//     const parentElement = document.getElementById('kittenProfiles');
// console.log(parentElement);

// Create a new element
// add the text to the new element
// append the new element to the parent element

//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;

//     const table = document.createElement('table');
//     articleElement.appendChild(table);

//     const tr1 = document.createElement('tr');
//     table.appendChild(tr1);

//     let headArray = ['Is Good With Kids', 'Is Good With Cats', 'Is Good With Dogs'];
//     for(let i = 0; i < headArray.length; i++) {
//       const th = document.createElement('th');
//       tr1.appendChild(th);
//       th.textContent = headArray[i];
//     }

//     const tr2 = document.createElement('tr')
//     table.appendChild(tr2);

//     let bodyArray = [this.isGoodWithKids, this.isGoodWithCat,  this.isGoodWithDog];
//     for(let i = 0; i < bodyArray.length; i++) {
//       const tdBody = document.createElement('td');
//       tr2.appendChild(tdBody);
//       tdBody.textContent = bodyArray[i];
//     }


//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement)

//     for(let i = 0; i < this.likes.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = this.likes[i];
//       ulElement.appendChild(liElement);
//     }

//     const imgEle = document.createElement('img');
//     // imgEle.setAttribute('src', this.img);
//     imgEle.src = this.img;
//     articleElement.appendChild(imgEle);
//   }

//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name} is a ${this.breed}, and has a ${this.age} months old.`;

//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement)

//     for(let i = 0; i < this.likes.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = this.likes[i];
//       ulElement.appendChild(liElement);
//     }

//     const imgEle = document.createElement('img');
//     // imgEle.setAttribute('src', this.img);
//     imgEle.src = this.img;
//     articleElement.appendChild(imgEle);
//   }
// }


// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let seattle = {
//     name: 'seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookieSale: 6.3,
//     cookiesPerHour: [],
//     customerPerHour: [],
//     avgCustomerConsuming: 0,
//     getAvg: function (min, max) {
//         for (let i = 0; i < hours.length; i++) {
//             let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//             this.cookiesPerHour.push(cookie);
//             this.avgCustomerConsuming += cookie;
//             console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
//         }
//     },
//     render: function () {
//         const articleElement = document.createElement('article');
// parentElement.appendChild(articleElement);

// const h2Element = document.createElement('h2');
// h2Element.textContent = this.name;
// articleElement.appendChild(h2Element);

// let ulElement = document.createElement('ul');
// articleElement.appendChild(ulElement)


//     for (let i = 0; i < hours.length; i++) {
// let liElement = document.createElement('li');
// liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
// ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
// liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
// ulElement.appendChild(liElement);

//     },
// }
// // let tokyo = {
//     name: 'tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,
//     cookiesPerHour: [],
//     customerPerHour: [],
//     avgCustomerConsuming: 0,
//     getAvg: function (min, max) {
//         for (let i = 0; i < hours.length; i++) {
//             let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//             this.cookiesPerHour.push(cookie);
//             this.avgCustomerConsuming += cookie;
//             console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
//         }
//     },
//     render: function () {
//         const articleElement = document.createElement('article');
// parentElement.appendChild(articleElement);

// const h2Element = document.createElement('h2');
// h2Element.textContent = this.name;
// articleElement.appendChild(h2Element);

// let ulElement = document.createElement('ul');
// articleElement.appendChild(ulElement)


//     for (let i = 0; i < hours.length; i++) {
// let liElement = document.createElement('li');
// liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
// ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
// liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
// ulElement.appendChild(liElement);

//     },
// }
// let dubai = {
//     name: 'dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,
//     cookiesPerHour: [],
//     customerPerHour: [],
//     avgCustomerConsuming: 0,
//     getAvg: function (min, max) {
//         for (let i = 0; i < hours.length; i++) {
//             let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//             this.cookiesPerHour.push(cookie);
//             this.avgCustomerConsuming += cookie;
//             console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
//         }
//     },
//     render: function () {
//         const articleElement = document.createElement('article');
// parentElement.appendChild(articleElement);

// const h2Element = document.createElement('h2');
// h2Element.textContent = this.name;
// articleElement.appendChild(h2Element);

// let ulElement = document.createElement('ul');
// articleElement.appendChild(ulElement)


//     for (let i = 0; i < hours.length; i++) {
// let liElement = document.createElement('li');
// liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
// ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
// liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
// ulElement.appendChild(liElement);

//     },
// }
// let paris = {
//     name: 'paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookieSale: 2.3,
//     cookiesPerHour: [],
//     customerPerHour: [],
//     avgCustomerConsuming: 0,
//     getAvg: function (min, max) {
//         for (let i = 0; i < hours.length; i++) {
//             let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//             this.cookiesPerHour.push(cookie);
//             this.avgCustomerConsuming += cookie;
//             console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
//         }
//     },
//     render: function () {
//         const articleElement = document.createElement('article');
// parentElement.appendChild(articleElement);

// const h2Element = document.createElement('h2');
// h2Element.textContent = this.name;
// articleElement.appendChild(h2Element);

// let ulElement = document.createElement('ul');
// articleElement.appendChild(ulElement)


//     for (let i = 0; i < hours.length; i++) {
// let liElement = document.createElement('li');
// liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
// ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
// liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
// ulElement.appendChild(liElement);

//     },
// }
// let lima = {
//     name: 'lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookieSale: 4.6,
//     cookiesPerHour: [],
//     customerPerHour: [],
//     avgCustomerConsuming: 0,
//     getAvg: function (min, max) {
//         for (let i = 0; i < hours.length; i++) {
//             let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookieSale);
//             this.cookiesPerHour.push(cookie);
//             this.avgCustomerConsuming += cookie;
//             console.log(`${hours[i]}:${this.cookiesPerHour[i]}`);
//         }
//     },
//     render: function () {
//         const articleElement = document.createElement('article');
// parentElement.appendChild(articleElement);

// const h2Element = document.createElement('h2');
// h2Element.textContent = this.name;
// articleElement.appendChild(h2Element);

// let ulElement = document.createElement('ul');
// articleElement.appendChild(ulElement)


//     for (let i = 0; i < hours.length; i++) {
// let liElement = document.createElement('li');
// liElement.textContent = `${hours[i]}:${this.cookiesPerHour[i]} cookies`;
// ulElement.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
// liElement.textContent = `Total:${this.avgCustomerConsuming} cookies`;
// ulElement.appendChild(liElement);

//     },
// }