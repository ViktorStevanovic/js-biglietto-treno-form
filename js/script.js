

const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click', function(){

    // console.log('inizio funzione di callback');

    const userDistance = document.getElementById('distance').value;
    let distanceValue = parseInt (userDistance)
    // console.log(distanceValue)

    const userAge = document.getElementById('age').value;
    let ageValue = parseInt (userAge)
    // console.log(ageValue)

    let ticketPrice = (distanceValue * 0.1976)

    if (ageValue < 18) {
        ticketPrice = (ticketPrice * 0.8235);
    } 
    else if (ageValue > 65) {
        ticketPrice = (ticketPrice * 0.4673);
    }
    else{
    
    }

    console.log(parseFloat(ticketPrice.toFixed(2)));

    // console.log('fine funzione di callback');
});

