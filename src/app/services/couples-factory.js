(function (angular) {

  angular.module('app').factory('couplesFactory', ['$http', couplesFactory]);

  function couplesFactory($http) {
    var module = {};
    var self = module;
    var allCards = {};
    module.allAvatars = {};

    module.initCards = function () {
      $http({
        url: 'http://localhost:8080/couples/cards',
        method: 'GET'
      }).then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].isVisible = false;
        }
        self.setCards(res.data);
      }, function (error) {
        console.log(error);
      });
    }

    module.initAvatars = function () {
      $http({
        url: 'http://localhost:8080/couples/avatars',
        method: 'GET'
      }).then(function (res) {
        self.setAvatars(res.data);
      }, function (error) {
        console.log(error);
      });
    }

    module.setUser = function (_firstName, _lastName, _email, _avatar) {
      let user = self.getuser(email);
      if (!user) {
        $http({
          url: 'http://localhost:8080/couples/user',
          method: 'POST',
          data: {
            email: _email,
            firstName: _firstName,
            lastName: _lastName,
            avatar: _avatar
          }
        }).then(function (res) {
          self.setAvatars(res.data);
          return true;
        }, function (error) {
          console.log(error);
          return false;
        });
      }else return false;
    }

    module.getUser = function (_email) {
        $http({
          url: 'http://localhost:8080/couples/user/'+_email,
          method: 'GET',
        }).then(function (res) {
          return res.data;
        }, function (error) {
          console.log(error);
        });
    }

    module.setAvatars = function (avatars) {
      self.allAvatars = avatars;
    }

    module.getAvatars = function () {
      return self.allAvatars;
    }

    module.remainingCards = {};

    module.setCards = function (cards) {
      allCards = cards;
      self.remainingCards = angular.copy(allCards);
    }

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
            firstVisibleCard = currentCard;
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


