'use strict'

function CityInfo(name, residents) {
    this.name = name;
    this.residents = residents;
}

function showSortByResidents(arr, n) {
    var sortedArr = arr.slice().sort(function(a, b) {
        return a.residents - b.residents;
    }).splice(0, n);

    sortedArr.forEach(function(element) {
        console.log(element.residents);
    }, this);
}

var urbanisatinon = [];

var tokio = new CityInfo('Tokio', 37750);
var moskow = new CityInfo('Moscow', 16570);
var manila = new CityInfo('Manila', 22930);

urbanisatinon.push(tokio);
urbanisatinon.push(moskow);
urbanisatinon.push(manila);

showSortByResidents(urbanisatinon, 3);
