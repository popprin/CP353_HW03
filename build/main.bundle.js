"use strict";

function myFunction() {
    var text = document.getElementById("name").value;
    getByName(text);
}


var getBeerAPIByName = function getBeerAPIByName(name) {
    return fetch(`https://api.punkapi.com/v2/beers/?beer_name=` + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {
            result += "<b>Name : </b>" + beers[i].name 
            + "<br> <b>Tagline : </b>" + beers[i].tagline 
            + "<br> <b>PH : </b>" + beers[i].ph 
            + "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast 
            + "<br> <b>First Brewed : </b>" + beers[i].first_brewed 
            + "<br> <b>Description : </b>" + beers[i].description 
            + "<br>" + "<image src =" + beers[i].image_url + "/><hr>";
        }
        document.getElementById('result').innerHTML = result;
    });
};


var toSearch = function toSearch(name) {
    if (name != "") {
          getBeerAPIByName(name);
    } else {
        var result = "No result";
        document.getElementById('result').innerHTML = result;
    }
};
