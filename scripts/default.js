function greetTheWorld() {
    document.getElementById("message").innerHTML = "\"Hello world!\" from adekorir";
}
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        alert("Hello" + x.toString());
        return true;
    }
}