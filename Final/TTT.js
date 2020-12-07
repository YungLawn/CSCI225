//ADDED BY CHRIS TEELON DURING IMPLENTATION

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function showSeconds(){
    console.log(seconds);
}

function timer() {
    t = setTimeout(add, 1000);
}

// /* Start button */
start.onclick = timer;

// /* Stop button */
function stopTimer() {
    clearTimeout(t);
    showSeconds();
}
//--------------------------------------------------------------------------------------------


// CREATED BY MATTHEW RUSSELL


var list = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var c = 0;
var x;
function clicked(i) {
    WinORLose();
    if (document.getElementById(i).innerHTML == "1" && x != 5) {
        document.getElementById(i).innerHTML = "X";
        document.getElementById(i).style.color = "black";
        delete list[i];
        c++;
        WinORLose();
        if (c != 5 || x != 5) {
            computer(list);
        }
    }
}


function computer(list) {

    while (true) {
        var x = Math.floor((Math.random() * (9 - 1)));
        if (x in list) {
            break;
        }

    }
    for (var y = 0; y < list.length; y++) {
        if (x == list[y]) {
            document.getElementById(y).innerHTML = "O";
            document.getElementById(y).style.color = "black";
            delete list[y];
            break;
        }


    }
}


function num() {
    return Math.floor((Math.random() * (9 - 1)));
}


function WinORLose() {
    var s0 = document.getElementById("0").innerHTML;
    var s1 = document.getElementById("1").innerHTML;
    var s2 = document.getElementById("2").innerHTML;
    var s3 = document.getElementById("3").innerHTML;
    var s4 = document.getElementById("4").innerHTML;
    var s5 = document.getElementById("5").innerHTML;
    var s6 = document.getElementById("6").innerHTML;
    var s7 = document.getElementById("7").innerHTML;
    var s8 = document.getElementById("8").innerHTML;
    //horizontal  
    if (s0 == "X" && s1 == "X" && s2 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
    }
    if (s0 == "O" && s1 == "O" && s2 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }

    if (s3 == "X" && s4 == "X" && s5 == "X") {
        
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
        
    }
    if (s3 == "O" && s4 == "O" && s5 == "O") {
        ;
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }

    if (s6 == "X" && s7 == "X" && s8 == "X") {
        
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
    }
    if (s6 == "O" && s7 == "O" && s8 == "O") {
       
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }
    //vertical
    if (s0 == "X" && s3 == "X" && s6 == "X") {
      
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
    }
    if (s0 == "O" && s3 == "O" && s6 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }

    if (s1 == "X" && s4 == "X" && s7 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
    }
    if (s1 == "O" && s4 == "O" && s7 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }

    if (s2 == "X" && s5 == "X" && s8 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
    }
    if (s2 == "O" && s5 == "O" && s8 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }
    //diagonal
    if (s0 == "X" && s4 == "X" && s8 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
    }
    if (s0 == "O" && s4 == "O" && s8 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }

    if (s2 == "X" && s4 == "X" && s6 == "X") {
       
        x = 5;
        window.alert("YOUR A WINNER!!!! press reset to play again!");
        stopTimer();
    }
    if (s2 == "O" && s4 == "O" && s6 == "O") {
        
        x = 5;
        window.alert("YOUR A LOSSSSSEEEEEERRRRRRR!!!! press reset to play again!");
        stopTimer();
    }
    if (c == 5) {
        window.alert("YOU'RE A SUCKER IT'S A CAT ;) !!!! press reset to play again!");
        stopTimer();
    }
}


function color() {
    if(document.getElementById(0).className == "blue"){
    for(var i = 0; i<=8;i++){
    document.getElementById(i).setAttribute("class","red");}}
    else{
        for(var i = 0; i<=8;i++){
        document.getElementById(i).setAttribute("class","blue");}}
}

var firebaseConfig = {
    apiKey: "AIzaSyDaq17_jm_sBe6XEffuf8uye6wXoq5WgYQ",
    authDomain: "final-project-660e8.firebaseapp.com",
    projectId: "final-project-660e8",
    storageBucket: "final-project-660e8.appspot.com",
    messagingSenderId: "798331069936",
    appId: "1:798331069936:web:a6b7fa5b75cacef8dca935",
    measurementId: "G-NBT3QYCHDR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function save(){
    var data = document.querySelector("#name").value;
    console.log(data);
    inputJson = {"name":data};
    inputJson = {"time": seconds};

    firebase
    .firestore()
    .collection("TicTacToe")
    .add(inputJson);

    console.log(inputJson);
    console.log("saved");
}