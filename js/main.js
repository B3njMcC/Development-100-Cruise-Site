let tripArr = [
{
    location: 'Lima to Buenos',
    price: 85439.74,
    duration: "18 Dec - 11 Jan 2024",
    picture: "Hawaii.jpg",
    filter: "expensive"
},
{
    location: 'Miami to Lima',
    price: 49357.17,
    duration: "3 Dec - 18 Dec 2023",
    picture: "",
    filter: "cheap"
},
{
    location: 'Dubai to Singapore',
    price:  64549.83,
    duration: "8 Dec - 28 Dec 2023",
    filter: "expensive"
},
{
    location: 'Mumbai to Singapore',
    price:  112026.91,
    duration: "8 Jan - 28 Jan 2024",
    picture: "",
    filter: "expensive"
},
{
    location: 'Bangkok to Hong Kong',
    price:  91136.99,
    duration: "25 Jan - 8 Feb 2024",
    picture: "",
    filter: "expensive"
}
]

let appliedPriceFilter = "";

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
    loadTrips(tripArr);
})

//Load all obj in tripArr
loadTrips = (tripsToDisplay) => {

    $("#tripsContainer").empty();

    for(let i = 0; i < tripsToDisplay.length; i++){
        let trips = tripsToDisplay[i];
        
        $("#tripsContainer").append($('#tripsTemplate').html());

        let activeChild = $($("#tripsContainer")).children().eq(i);

        $(activeChild).find('#cardTitle').text(trips.location);
        $(activeChild).find('#cardDuration').text("R" + trips.price);
        $(activeChild).find('#cardDate').text(trips.duration);

        console.log(trips)
    }
}

//Upon clicking filter radio buttons
$("input[name='filterTrips']").click(function(){
    appliedPriceFilter = $(this).attr("value");


    filterTrips();
})

filterTrips = () => {

    let filteredTrips = [];

    if (appliedPriceFilter){
        filteredTrips = tripArr.filter(trips => trips.filter == appliedPriceFilter);
    } else {
        filteredTrips = tripArr;
    }

    loadTrips(filteredTrips);
}