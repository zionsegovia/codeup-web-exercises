// vanilla js event listener
document.querySelector("#clickMe").addEventListener('click', function(){
    alert("Sorry I can't release early :(")
});

// jquery event listener

$("#clickMe").click(function(){
    alert("It would be nice but no go")
});
