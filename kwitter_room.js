
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAXm6-P320GabSfHWI3LM3Km5GXi7SY4N8",
      authDomain: "kwitter-113f9.firebaseapp.com",
      databaseURL: "https://kwitter-113f9-default-rtdb.firebaseio.com",
      projectId: "kwitter-113f9",
      storageBucket: "kwitter-113f9.appspot.com",
      messagingSenderId: "499268902786",
      appId: "1:499268902786:web:d4c41488338aceddcab99b"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
