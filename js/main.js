let tripArr = [
{
    location: 'Hawaii',
    price: 12000,
    duration: 3
},
{
    location: 'Malaysia',
    price: 10000,
    duration: 4
},
{
    location: 'Mauritius',
    price:  8000,
    duration: 1
}
]

//-------------------------
//When document loads
//-------------------------
$(document).ready(function(){
    console.log("Jquery")

//-------------------------
//Homepage
//-------------------------

//-------------------------
//Trips Page
//-------------------------
    loadTrips();
})

//Load all obj in tripArr
loadTrips = () => {
    for(let i = 0; i < tripArr.length; i++){
        let trips = tripArr[i];
        console.log(trips)
    }
}