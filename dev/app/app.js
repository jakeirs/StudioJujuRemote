(function(global, $ ){

  var G$,
    Greetr;
    supportedLangs = [];

    Greetr = function(firstName, lastName, language) {
      //zwracam nowo utworzony obiekt
      return new Greetr.init(firstName, lastName, language); 
    }

    /**
     * tutaj wstawimy metody, bo będą zajmowac mniej pamięci. 
     * Gdyż zostaną utworzone tylko raz
     * 
     * Będziemy dodawać metody tutaj: Greetr.prototype,
     * gdyż to wygląda lepiej
     */ 
    
    supportedLangs = ['en', 'es'];
    
    var greetings = {
      en: 'Hello',
      es: 'Hola'
    };

    var formalGreetings = {
      en: 'Good Morning',
      es: 'Saludos'
    };

    var logMessages = {
      en: 'Logged in',
      es: 'Inició sesión'
    };

    Greetr.prototype = {

      /**
       * metody które nie zwracają 'this' nie są chainable
       */

      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },

      /**
       *  iteruje po tablicy supportedLangs i sprawdza
       * czy język podany do obiektu jako parametr 
       * istnieje w tablicy supportedLangs
       */
      validate: function() {
        if (supportedLangs.indexOf(this.language) === -1) {
          throw "Invalid language ziom";
        }
      },

      greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
      },

      formalGreetings: function() {
        return formalGreetings[this.language] + ' ' + this.fullName();
      },

      greet: function(formal) {
        var msg;

        if (formal) {
          msg = this.formalGreetings();
        } else {
          msg = this.greeting();
        }

        if (console) {
          console.log(msg);
        }
        
        /**
         * 'this' refers to the calling object at execution time 
         * makes the method chainable
         */
        return this;
      },

      log: function() {
        if(console) {
          console.log(logMessages[this.language] + ': ' + this.fullName() );
        }
        return this;
      },

      setLang: function(lang) {
        this.language = lang;
        this.validate();

        return this;
      },

      HTMLGreeting: function(selector, formal) {
        if(!$) {
          throw 'jQuery not loaded';
        }

        if (!selector) {
          throw 'Missing jQuery selector';
        }

        var msg;
        if (formal) {
          msg = this.formalGreetings();
        } else {
          msg = this.greeting();
        }

        $(selector).html(msg);

        return this;

      }

    };


    /**
     * init - tworzy nowy obiekt
     */
    Greetr.init = function(firstName, lastName, language) {
      
      var self = this;

      self.firstName = firstName || "default";
      self.lastName = lastName || "default";
      self.language = language || "en";

    }
    /**
     * przypisanie prototypu nowo utworzonych obiektów 
     * do prototypu całej biblioteki.
     * Czyli nowo utworzone obiekty, będą mogły korzystać 
     * z metod całej biblioteki
     */

    /**
     * eksponowanie mojej biblioteki do globalnej przestrzeni
     * czyli przypisanie Greetr do globalnej obiektu 'window'
     */
     global.G$ = global.Greetr = Greetr;     

    /**
     * przypisanie metod, które znajdują się Greetr.prototype,
     * do konstruktora
     * 
     * Każdy nowo utworzony obiekt, będzie mieć dostęp do metod 
     * znajdujących się w Greetr.prototype
     */

    Greetr.init.prototype =  Greetr.prototype;



})(window, jQuery);

var g = G$("Johnny", "Bravo", "es"),
 button = $("input"), // it waill init script
 select = $("#lang"),
 option; // selected language

console.log(option);
console.log(button);

button.on("click", function(){
  //get value form selected option of the select
  option = $("option:selected").attr("value");

  //set language choosen in select then insert greeding text in h1 and 
  // then give me logged in message
  g.setLang(option).HTMLGreeting("h1", true).log();
  
});

