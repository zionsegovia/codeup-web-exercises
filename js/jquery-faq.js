//let invisibleFaq = $(".invisible").css("visibility","hidden" )




$(document).ready(function (){
    $('#invisFaq').click(function (event){
        $(".invisible").toggleClass('invisFaq');
    });
});

// this is what i tried and while it works they don't work correctly :/
/* $(document).ready(function (){
    $('h3').click(function (event){
        $('h3').next().css('font-weight', 'bold');
    });
});

$(document).ready(function (){
    $('ul').click(function (event){
        $('li').first().css('color', 'blue');
    });
});
$(document).ready(function (){
    $('.faq-button').click(function (event){
        $('ul').each(function(){
            $('li').last().css('backgroundColor', 'yellow');
        })
    });
});
*/

$("#lastLi").on('click', function (){
    $("#parkFacts").find('ul').each(function (){
        $(this).find('li').last().toggleClass('highlight');
    });
});

$('h3').on('click', function(){
    let $nextUl = $(this).next();
    $nextUl.find('li').css('font-weight','bold');
});

$('li').on('click', function(){
  let $parentUl =  $(this).parent()
    $parentUl.find('li').first().css('color', 'blue');
});


