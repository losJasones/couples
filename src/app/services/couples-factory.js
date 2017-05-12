(function (angular) {

  angular.module('app').factory('couplesFactory', [couplesFactory]);

  function couplesFactory() {
    var module = {};
    var self = module;

    var allCards = [
      { id: 0, name: 'javascript', img: 'javascript.jpg', isVisible: false },
      { id: 1, name: 'grunt', img: 'grunt.jpg', isVisible: false },
      { id: 2, name: 'node', img: 'node.jpg', isVisible: false },
      { id: 3, name: 'gulp', img: 'gulp.jpg', isVisible: false },
      { id: 4, name: 'angular', img: 'angular.jpg', isVisible: false },
      { id: 5, name: 'css', img: 'css.jpg', isVisible: false },
      { id: 6, name: 'html', img: 'html.jpg', isVisible: false },
      { id: 7, name: 'sass', img: 'sass.jpg', isVisible: false },
      { id: 8, name: 'javascript', img: 'javascript.jpg', isVisible: false },
      { id: 9, name: 'grunt', img: 'grunt.jpg', isVisible: false },
      { id: 10, name: 'node', img: 'node.jpg', isVisible: false },
      { id: 11, name: 'gulp', img: 'gulp.jpg', isVisible: false },
      { id: 12, name: 'angular', img: 'angular.jpg', isVisible: false },
      { id: 13, name: 'css', img: 'css.jpg', isVisible: false },
      { id: 14, name: 'html', img: 'html.jpg', isVisible: false },
      { id: 15, name: 'sass', img: 'sass.jpg', isVisible: false }
    ];

    module.remainingCards = angular.copy(allCards);

    module.getRemainingCards = function () {
      return self.remainingCards;
    }

    module.hideCards = function () {
      var len = self.remainingCards.length;
      while (len--) {
        if (self.remainingCards[len].isVisible) {
          self.remainingCards[len].isVisible = false;
        }
      }
    };

    module.showCardById = function (_id_) {
      var len = self.remainingCards.length;
      var id = parseInt(_id_);
      while (len--) {
        if (self.remainingCards[len].id === _id_) {
          self.remainingCards[len].isVisible = true;
          break;
        }
      }
    };

    module.isGuessCorrect = function () {
      let isFirstFound = false;
      let firstVisibleCard = {};
      let len = self.remainingCards.length;
      while (len--) {
        let currentCard = self.remainingCards[len];
        if (currentCard.isVisible) {
          if (!isFirstFound) {
            isFirstFound = true;
            firstVisibleCard=currentCard;
          } else if (firstVisibleCard.name === currentCard.name) {
            return true;
          }
        }
      }
      return false;
    };

    module.shuffleCards = function () {
      self.remainingCards = angular.copy(allCards);
      for (let i = self.remainingCards.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [self.remainingCards[i - 1], self.remainingCards[j]] = [self.remainingCards[j], self.remainingCards[i - 1]];
      }
      return self.remainingCards;
    };

    module.deleteVisibleCards = function () {
      var len = self.remainingCards.length;
      while (len--) {
        if (self.remainingCards[len].isVisible) {
          self.remainingCards.splice(len, 1);
        }
      }
    };

    return module;
  };

})(angular);


