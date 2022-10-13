window.onload = function() {
    var orderButton = document.getElementById('button-order');
    orderButton.addEventListener('click', clickedOnOrderButton);

    function clickedOnOrderButton(){
        console.log("Clicked on order button");
    }

    
}