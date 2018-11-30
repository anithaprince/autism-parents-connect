const app = angular.module('AutismApp', []);
app.controller('AutismCtrl', ['$http', function($http){
  //----------Partials
  this.includePath = './partials/blog.html';
  this.changeInclude = (path) => {
  this.includePath = './partials/'+ path +'.html';
  }
  //----------
  const controller = this;
  this.heading= "";
  this.image= "";
  this.posted_by= "";
  this.post_body= "";
  this.event_title= "";
  this.event_image= "";
  this.event_details= "";
  /*********    Show route      ********/
  this.getBlogs = function(){
    $http({
      method:'GET',
      url: '/blogs'
    }).then(function(response){
    //  console.log(response.data);
      controller.blogs = response.data
    }, error=>{
            console.log(error);
        })
    };

    this.getEvents = function(){
      $http({
        method:'GET',
        url: '/events'
      }).then(function(response){
      //  console.log(response.data);
        controller.events = response.data
      }, error=>{
              console.log(error);
          })
      };
  /*********    Create route      ********/
  this.createBlog = function(){
    if(this.posted_by==''){
      this.posted_by = "Anonymous"
    }
    if(this.image==''){
      this.image = "images/question.jpg"
    }
    $http({
        method:'POST',
        url: '/blogs',
        data: {
          heading: this.heading,
          image: this.image,
          posted_by: this.posted_by,
          post_body: this.post_body,
        }
    }).then(function(response){
        controller.heading= "";
        controller.image= "";
        controller.posted_by= "";
        controller.post_body= "";
        controller.includePath = './partials/blog.html';
        controller.getBlogs();
    }, function(){
        console.log('error');
    });
  }

  this.createEvent = function(){
    $http({
        method:'POST',
        url: '/events',
        data: {
          event_title: this.event_title,
          event_image: this.event_image,
          event_details: this.event_details
        }
    }).then(function(response){
        controller.event_title= "";
        controller.event_image= "";
        controller.event_details= "";
        controller.getEvents();
    }, function(){
        console.log('error');
    });
  }
  /*********    Show blog route      ********/
  this.getBlog = function(blog){
    $http({
      method:'GET',
      url: '/blogs/' + blog._id,
    }).then(function(response){
      //console.log(response.data);
      controller.blog = response.data,
      controller.includePath = './partials/blog_single.html';
    }, error=>{
            console.log(error);
    })
  };
  /*********    Edit route      ********/
  this.editBlog = function(blog){
    let index = blog._id;
    let arr = blog.comments;
    console.log(arr);
    arr.push(this.newComment);
    console.log(arr);

    console.log(index);
    $http({
      method:'PUT',
      url: '/blogs/' + index,
      data: {
        comments: arr,
      }
    }).then(function(response){
      controller.newComment= "";
      controller.getBlog();

    }).catch(angular.noop);
  }
  /*********    Delete route      ********/
  this.deleteBlog = function(blog){
    $http({
      method:'DELETE',
      url:'/blogs/'+ blog._id
    }).then(function(response){
      controller.getBlogs();
    })
  }

  this.deleteEvent = function(event){
    $http({
      method:'DELETE',
      url:'/events/'+ event._id
    }).then(function(response){
      controller.getEvents();
    })
  }

this.getBlogs();
this.getEvents();

}]);
