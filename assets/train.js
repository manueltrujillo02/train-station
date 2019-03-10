// Initialize Firebase
var config = {
    apiKey: "AIzaSyBVDOH_2MeraXZjAAcD53FMl_2PaCU9aT4",
    authDomain: "coding-9d575.firebaseapp.com",
    databaseURL: "https://coding-9d575.firebaseio.com",
    projectId: "coding-9d575",
    storageBucket: "coding-9d575.appspot.com",
    messagingSenderId: "308960027859"
};

// this code is needed to connect to firebase
firebase.initializeApp(config);

// we are storing everything in firebase and storing it in a var called firebase
var database = firebase.database();
    // this code is pulling the values from the html and storing them in a var
var name = $("#name").val().trim();
var role = $("#role").val().trim();
var startDate = $("#startDate").val().trim();
var rate = $("#tfrequency").val().trim();

$("#submit").on("click", function (event) {
    // this code is telling the page not to refresh when the submit button is clicked 
    event.preventDefault();
    //  this code is pulling the values from the html and making them global
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    rate = $("#tfrequency").val().trim();
   
    // this code is pushing 
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    });

});

database.ref().on("child_added", function (childSnapshot) {
    // this code is a cleaner way to display what is in firebase
    var newRow = $("<tr>").append(
        $("<td>").text(childSnapshot.val().name),
        $("<td>").text(childSnapshot.val().role),
        $("<td>").text(childSnapshot.val().rate),
        $("<td>").text(moment(nextTrain).format("hh:mm")),
        $("<td>").text(tMinutesTillTrain, "minutes"),
        //         $("<td>").text(empBilled)

    );
    // this code is appending all the <td> & <tr> to the tbody tag in the html
    $("#tbody").append(newRow);
    // this code will also display what is in firebase 
    //     $("#tbody").append( "<tr><td>" + childSnapshot.val().name + "</td>");
    //     $("#tbody").append( "<td>" + childSnapshot.val().role + "</td>");
    //     $("#tbody").append( "<td>" + childSnapshot.val().startDate + "</td>");
    //     $("#tbody").append("<td>" + childSnapshot.val().rate + "</td></tr>");
});
  
// this code i was making sure i was getting the correct values from firebase
    // console.log(childSnapshot.val().name);
    // console.log(childSnapshot.val().role);
    // console.log(childSnapshot.val().startDate);
    // console.log(childSnapshot.val().rate);
 
    

// here i am trying to store the values in another var but it is not working 
    // var tFrequency = $("#tfrequency").val();
    // // console.log(childSnapshot.val().rate);
    // console.log($("#tfrequency").val())
    // // Time is 3:30 AM
    // var firstTime = $("#startDate").val();
    // console.log(firstTime)
    // First Time (pushed back 1 year to make sure it comes before current time)
        // Assumptions
        var tFrequency = rate;
        console.log(rate)

        // Time is 3:30 AM
        var firstTime = "03:30";
    
        // First Time (pushed back 1 year to make sure it comes before current time)
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);
    
        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    
        // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);
    
        // Time apart (remainder)
        var tRemainder = diffTime % tFrequency;
        console.log(tRemainder);
    
        // Minute Until Train
        var tMinutesTillTrain = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    
        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
// var tFrequency = childSnapshot.val().rate;
// console.log(tFrequency);

// // Time is 3:30 AM
// var firstTime = $("#startDate").val().trim();;

// // First Time (pushed back 1 year to make sure it comes before current time)
// var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
// console.log(firstTimeConverted);

// // Current Time
// var currentTime = moment();
// console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// // Difference between the times
// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// console.log("DIFFERENCE IN TIME: " + diffTime);

// // Time apart (remainder)
// var tRemainder = diffTime % tFrequency;
// console.log(tRemainder);

// // Minute Until Train
// var tMinutesTillTrain = tFrequency - tRemainder;
// console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// // Next Train
// var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
