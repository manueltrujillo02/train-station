// Initialize Firebase
var config = {
    apiKey: "AIzaSyBVDOH_2MeraXZjAAcD53FMl_2PaCU9aT4",
    authDomain: "coding-9d575.firebaseapp.com",
    databaseURL: "https://coding-9d575.firebaseio.com",
    projectId: "coding-9d575",
    storageBucket: "coding-9d575.appspot.com",
    messagingSenderId: "308960027859"
};
firebase.initializeApp(config);




var database = firebase.database();
var name = $("#name").val().trim();
var role = $("#role").val().trim();
var startDate = $("#startDate").val().trim();
var rate = $("#rate").val().trim();

$("#submit").on("click", function (event) {

    event.preventDefault();
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    rate = $("#rate").val().trim();
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    });
});

database.ref().on("child_added", function(childSnapshot){

//     var dateNow = moment().format("MM/DD/YYYY");
// //  console.log(dateNow)
//     var start = moment(childSnapshot.val().startDate,"MM/DD/YYYY");
//     var datedif = start.diff(dateNow,"months",true);
   
    // console.log(datedif);

    // console.log(childSnapshot.val().name);
    // console.log(childSnapshot.val().role);
    // console.log(childSnapshot.val().startDate);
    // console.log(childSnapshot.val().rate);
    $("#tbody").append( "<tr><td>" + childSnapshot.val().name + "</td>");
    $("#tbody").append( "<td>" + childSnapshot.val().role + "</td>");
    $("#tbody").append( "<td>" + childSnapshot.val().startDate + "</td>");
    $("#tbody").append("<td>" + childSnapshot.val().rate + "</td></tr>");
})
