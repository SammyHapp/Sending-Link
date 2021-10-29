const firebaseConfig = {
      apiKey: "AIzaSyBDHplaEZATAGSKlCNo1D_X9g_cc16iJdA",
      authDomain: "samrath-s-kwitter-92819.firebaseapp.com",
      databaseURL: "https://samrath-s-kwitter-92819-default-rtdb.firebaseio.com",
      projectId: "samrath-s-kwitter-92819",
      storageBucket: "samrath-s-kwitter-92819.appspot.com",
      messagingSenderId: "1065160783450",
      appId: "1:1065160783450:web:fffa0b77a4db08d6c04a63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room_name" + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();


function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
   window.location = "index.html";
}