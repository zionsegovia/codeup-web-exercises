// jquery selector
let jQueryParent = $('#paragraphParent')



// vanilla js equivalent
let vanillaParent = document.querySelector('#paragraphParent');

// changing one css property
jQueryParent.css('color', 'red');

// or change a bunch of them
jQueryParent.css({
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'fontStyle': 'italic'
});

// adding classes with Jquery
jQueryParent.addClass('active')