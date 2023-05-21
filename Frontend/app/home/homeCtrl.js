app.controller('homeCtrl', function ($scope,$http,$location,$state) {
    // $scope.name=localStorage.getItem('firstname').value;
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
  
    $scope.addSlide = function() {
      var newWidth = 910 + slides.length + 1;
      slides.push({
        image: '//unsplash.it/' + newWidth + '/350',
        text: ['You can add your product in the list','You can edit your product','You can delete any product from the list','You can sort the list'][slides.length % 4],
        id: currIndex++
      });
    };
  
    $scope.randomize = function() {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };
  
    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }
  
    // Randomize logic below
  
    function assignNewIndexesToSlides(indexes) {
      for (var i = 0, l = slides.length; i < l; i++) {
        slides[i].id = indexes.pop();
      }
    }
  
    function generateIndexesArray() {
      var indexes = [];
      for (var i = 0; i < currIndex; ++i) {
        indexes[i] = i;
      }
      return shuffle(indexes);
    }
  
    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
      var tmp, current, top = array.length;
  
      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      }
  
      return array;
    }
  });