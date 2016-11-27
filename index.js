
var Vue = require("vue");
var App = require("./app.vue");

new Vue({
  el: '#mountpoint',
  render: function (createElement) {
    return createElement(App)
  }
});