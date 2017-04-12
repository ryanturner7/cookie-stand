'use strict';
var hours = ['6 am:', '7 am:', '8 am:', '9 am:', '10 am:', '11 am:', '12 pm:', '1 pm:', '2 pm:', '3 pm:', '4 pm:', '5 pm:', '6 pm:', '7 pm:', '8 pm:'];

function getTableHeader(){
  var table = document.getElementById('cookie-table');
  var tr = document.createElement('tr');

  var tableData = document.createElement('td');
  tr.appendChild(tableData);

  for (var i = 0; i < hours.length; i++){
    tableData = document.createElement('td');
    tableData.textContent = hours[i];
    tr.appendChild(tableData);
  }
  table.appendChild(tr);
}

function Store(header, minCust, maxCust, avgSale){
  this.header = header;
  this.avgSale = avgSale;
  this.hourlySales = [];
  this.minCust = minCust;
  this.maxCust = maxCust;
}
Store.prototype.getRandomNumCust = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};
Store.prototype.cookiesPerHour = function(){
  for(var i = 0; i < 15 ; i++){
    var avgCookies = this.getRandomNumCust() * this.avgSale;
    this.hourlySales.push(Math.floor(avgCookies));
  }
};
Store.prototype.addList = function(){
  this.cookiesPerHour();
  var header = document.createElement('h2');
  header.textContent = this.header;

  var cookiesPerHourUl = document.createElement('ul');
  for (var i = 0; i < this.hourlySales.length; i++){
    var cookiesPerHourLi = document.createElement('li');
    cookiesPerHourLi.setAttribute('class', 'hourlySales');
    cookiesPerHourLi.textContent = hours [i] + ' ' + this.hourlySales[i];
    cookiesPerHourUl.appendChild(cookiesPerHourLi);
  }
  document.body.appendChild(header);
  document.body.appendChild(cookiesPerHourUl);
};

Store.prototype.getTable = function(){
  this.cookiesPerHour();
  var table = document.getElementById('cookie-table');
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.header;
  tableRow.appendChild(tableData);

  for (var i = 0; i < this.hourlySales.length; i++){
    tableData = document.createElement('td');
    tableData.textContent = this.hourlySales[i];
    tableRow.appendChild(tableData);
  }
  table.appendChild(tableRow);
};

getTableHeader();
var firstAndPike = new Store('firstAndPike', 23, 65, 6.3);
var seaTacAirport = new Store('seaTacAirport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 11, 38, 2.3);
var capitolHill = new Store('capitolHill', 20, 38, 2.3);
var alki = new Store('alki', 2, 16, 4.6);
console.log('first and pike', firstAndPike);
firstAndPike.getTable();
console.log('seaTacAirport', seaTacAirport);
seaTacAirport.getTable();
console.log('seattleCenter', seattleCenter);
seattleCenter.getTable();
console.log('capitolHill', capitolHill);
capitolHill.getTable();
console.log('alki', alki);
alki.getTable();
