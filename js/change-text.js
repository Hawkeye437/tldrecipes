$text = 0;
$("#change").click(function () {
    if ($text == 0) {
        $("#about-me p").text("I changed my mind. Now I am all about bacon. I love bacon. I eat them every hour I am awake. I can only dream about bacon. So much love for bacon.");
        $text = 1;
    }
    else {
        $("#about-me p").text("I love pasta. I eat pasta 3 meals a day. Morning, noon and night I make and eat pasta. I've made every pasta recipe known to man.  I simply love pasta.");
        $text = 0;
    }
});