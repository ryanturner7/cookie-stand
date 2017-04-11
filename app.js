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
    for(var i = 0; i < 14 ; i++){
      var avgCookies = this.getRandomNumCust() * this.avgSale;
      this.hourlySales.push(Math.floor(avgCookies));
    };
  }
};
firstAndPike.cookiesPerHour();
console.log(firstAndPike.hourlySales);

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
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  getRandomNumCust: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};
