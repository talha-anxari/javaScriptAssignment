var username = "Talha Ansari";
alert(username);
var age = "26";
alert(age);
var development = "certified mobile application development";
alert(development);

alert("Pizza\nPizz\nPiz\nPi\nP");

var email = "talhaanxaritn@outlook.com";
alert("My email address is: " + email);

var book = "A smarter way to learn JavaScript";
alert("Book title: " + book);

document.write("Yeh! I Can Write HTML Content Through JavaScript");

// Check if the visitor count is stored in local storage
var visitorCount = localStorage.getItem("visitorCount");

// If not found, initialize it to 1
if (!visitorCount) {
    visitorCount = 1;
} else {
    // Otherwise, increment the count
    visitorCount++;
}

// Save the updated count back to local storage
localStorage.setItem("visitorCount", visitorCount);

// Display the message on the page
document.getElementById("visitorMessage").innerHTML = "You have visited this site " + visitorCount + " times.";
