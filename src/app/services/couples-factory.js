(function (angular) {

  angular.module('app').factory('couplesFactory', [couplesFactory]);

  function couplesFactory() {
    var module = {};
    var self = module;

    module.allCards = [
      { id: 0, name: 'javascript', img: 'javascript.jpg', isSelected: false },
      { id: 1, name: 'grunt', img: 'grunt.jpg', isSelected: false },
      { id: 2, name: 'node', img: 'node.jpg', isSelected: false },
      { id: 3, name: 'gulp', img: 'gulp.jpg', isSelected: false },
      { id: 4, name: 'angular', img: 'angular.jpg', isSelected: false },
      { id: 5, name: 'css', img: 'css.jpg', isSelected: false },
      { id: 6, name: 'html', img: 'html.jpg', isSelected: false },
      { id: 7, name: 'sass', img: 'sass.jpg', isSelected: false },
      { id: 8, name: 'javascript', img: 'javascript.jpg', isSelected: false },
      { id: 9, name: 'grunt', img: 'grunt.jpg', isSelected: false },
      { id: 10, name: 'node', img: 'node.jpg', isSelected: false },
      { id: 11, name: 'gulp', img: 'gulp.jpg', isSelected: false },
      { id: 12, name: 'angular', img: 'angular.jpg', isSelected: false },
      { id: 13, name: 'css', img: 'css.jpg', isSelected: false },
      { id: 14, name: 'html', img: 'html.jpg', isSelected: false },
      { id: 15, name: 'sass', img: 'sass.jpg', isSelected: false },
    ];

    module.getAllCards = function () {
      return self.allCards;
    };

    module.remainingCards = angular.copy(self.allCards);
    module.getRemainingCards = function () {
      return self.remainingCards;
    }

    module.getCardById = function (_id_) {
      var len = self.remainingCards.length;
      var id = parseInt(_id_);

      if (!id) {
        return false;
      }

      while (len--) {
        if (self.remainingCards[len].id === id) {
          return self.remainingCards[len];
        }
      }
    };

    module.selectCardById = function(_id_){
      var len = self.remainingCards.length;
      var id = parseInt(_id_);

      if (!id) {
        return false;
      }

      while (len--) {
        if (self.remainingCards[len].id === id) {
          self.remainingCards[len].isSelected=!(self.remainingCards[len].isSelected);
        }
      }
    };

    module.shuffleCards = function () {
      self.remainingCards = angular.copy(self.allCards);
      for (let i = self.remainingCards.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [self.remainingCards[i - 1], self.remainingCards[j]] = [self.remainingCards[j], self.remainingCards[i - 1]];
      }
    };
     /*Este bucle actualmente peta y no sé por qué: creo que lo voy a necesitar para actualizar los id de los
     elementos del array después de hacer shuffle y que haya correspondencia entre su indice y la propiedad id 
     for (let j = self.remainingCards.length; j; j--) {
        self.remainingCards[j].id = j;
      }*/

    module.deleteCardById = function (_id_) {
      ;
    };

    return module;
  };

})(angular);


