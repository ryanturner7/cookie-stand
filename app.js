'use strict';
var hours = ['6 am:', '7 am:', '8 am:', '9 am:', '10 am:', '11 am:', '12 pm:', '1 pm:', '2 pm:', '3 pm:', '4 pm:', '5 pm:', '6 pm:', '7 pm:', '8 pm:'];
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < 15 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    };
  }
};
firstAndPike.cookiesPerHour();
console.log(firstAndPike.hourlySales);
var cookiesPerHourUl = document.getElementById('ul-1');
for (var i = 0; i < firstAndPike.hourlySales.length; i++){
  var cookiesPerHourLi = document.createElement('li');
  cookiesPerHourLi.setAttribute('class', 'hourlySales');
  cookiesPerHourLi.textContent = hours [i] + ' ' + firstAndPike.hourlySales[i];
  cookiesPerHourUl.appendChild(cookiesPerHourLi);
}

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < 15 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    };
  }
};
seaTacAirport.cookiesPerHour();
console.log(seaTacAirport.hourlySales);
var cookiesPerHourUl = document.getElementById('ul-2');
for (var i = 0; i < seaTacAirport.hourlySales.length; i++){
  var cookiesPerHourLi = document.createElement('li');
  cookiesPerHourLi.setAttribute('class', 'hourlySales');
  cookiesPerHourLi.textContent = hours [i] + ' ' + seaTacAirport.hourlySales[i];
  cookiesPerHourUl.appendChild(cookiesPerHourLi);
}

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 2.3,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < 15 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    };
  }
};
seattleCenter.cookiesPerHour();
console.log(seattleCenter.hourlySales);
var cookiesPerHourUl = document.getElementById('ul-3');
for (var i = 0; i < seattleCenter.hourlySales.length; i++){
  var cookiesPerHourLi = document.createElement('li');
  cookiesPerHourLi.setAttribute('class', 'hourlySales');
  cookiesPerHourLi.textContent = hours [i] + ' ' + seattleCenter.hourlySales[i];
  cookiesPerHourUl.appendChild(cookiesPerHourLi);
}
var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < 15 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    };
  }
};
capitolHill.cookiesPerHour();
console.log(capitolHill.hourlySales);
var cookiesPerHourUl = document.getElementById('ul-4');
for (var i = 0; i < capitolHill.hourlySales.length; i++){
  var cookiesPerHourLi = document.createElement('li');
  cookiesPerHourLi.setAttribute('class', 'hourlySales');
  cookiesPerHourLi.textContent = hours [i] + ' ' + capitolHill.hourlySales[i];
  cookiesPerHourUl.appendChild(cookiesPerHourLi);
}
var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < 15 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    };
  }
};
alki.cookiesPerHour();
console.log(alki.hourlySales);
var cookiesPerHourUl = document.getElementById('ul-5');
for (var i = 0; i < alki.hourlySales.length; i++){
  var cookiesPerHourLi = document.createElement('li');
  cookiesPerHourLi.setAttribute('class', 'hourlySales');
  cookiesPerHourLi.textContent = hours [i] + ' ' + alki.hourlySales[i];
  cookiesPerHourUl.appendChild(cookiesPerHourLi);
}
