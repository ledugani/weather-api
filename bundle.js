(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// // import axios for use
// const axios = require('axios');

// // add an event listener to make api call on button click
// // had to modify axios request to bypass CORS error
// document.getElementById("button").addEventListener("click", function(){
//   axios.get('https://api.openweathermap.org/data/2.5/forecast?id=4608408&APPID=25e989bd41e3e24ce13173d8126e0fd6&units=imperial', {
//       crossdomain: true,
//       proxy: {
//         host: '104.236.174.88',
//         port: 3128
//       }
//     })
//     .then(function (response) {
//       domStringBuilder(response.data)
//     })
//     .catch(function (error) {
//     console.log(error);
//   });
// });

// // create a function that will print api response to dom
// const domStringBuilder = (weatherArray) => {
//   console.log(weatherArray);

//   let strang = '';
//   strang += `<p>${Math.ceil(weatherArray.list[0].main.temp)}&#8457;</p>`;

//   // actually print to dom
//   document.getElementById(`test-results`).innerHTML = strang;
// };
},{}]},{},[1]);
