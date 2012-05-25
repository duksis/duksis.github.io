// TODO 
// And when it comes to this piece of JavaScript below ... kids, don't do this at home ;)
// It's just a quick and dirty workaround to get different hint text for touch devices.
// In a real world the touch content should be probably just hidden somewhere in HTML - not hard-coded in the script.

if ("ontouchstart" in document.documentElement) { 
    document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
}
