// csinalunk egy fuggvenyt ami visszaad nekunk egy sort
var Duma = (function() {
  var last_selected = null;

  return {
    getRandomOne: function(elm) {
      jQuery.get('/array.php', function(res) {
        elm.html(res.message);
        return res.message;
      }, "json");
    }
  }
})(); // futtetjuk a kulso jail fuggvenyt igy a getRandomOne-t tartalmazo objektum
      // bekerul :)