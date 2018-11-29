const app = angular.module('AutismApp', []);
app.controller('AutismCtrl', [function(){
  //----------Partials
  this.includePath = './partials/blog.html';
  this.changeInclude = (path) => {
  this.includePath = './partials/'+ path +'.html';
  }
  //----------
}]);
