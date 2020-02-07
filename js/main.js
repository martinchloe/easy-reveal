$windowSize = window.innerHeight;
// console.log($windowSize);


// $( ".revealable" ).each(function(index) {
//     console.log(index + ": " + $(this).text());

//   });


function easyReveal() {

    $scroll = $(document).scrollTop();

    $( ".revealable" ).each(function(index) {

        $distFromTop = $(this).offset().top;


        if ($distFromTop - $scroll <= $windowSize){
            
            $(this).addClass("max-opacity");

            console.log('index', index,'distance éléments: ', $distFromTop, 'taille de la fenêtre: ', $windowSize, 'scroll: ', $scroll);

        }

    });  
}

$(document).on("scroll", function(){

    easyReveal();

});

easyReveal();
// easyReveal();
