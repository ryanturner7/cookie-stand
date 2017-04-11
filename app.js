'use strict';

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
console.log(firstAndPike.hourlySales, 'hourlySales');
var cookiesPerHourUl = document.getElementById('cookies-per-hour');
console.log(cookiesPerHourUl, 'this is what were looking for');
// for (var i = 0; i < firstAndPike.hourlySales.length; i++);
// cookiesPerHourLi = document.createElement('li');
// cookiesPerHourLi.setAttribute('class', 'hourlySales');
// cookiesPerHourLi.textContent = firstAndPike.hourlySales[i];
// cookiesPerHourUl.appendChild(hourlySales[i]);


var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < 14 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    };
  }
};
seaTacAirport.cookiesPerHour();
console.log(seaTacAirport.hourlySales);

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 2.3,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < 14 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    }
  }
};
seattleCenter.cookiesPerHour();
console.log(seattleCenter.hourlySales);

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hourlySales:[],
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
