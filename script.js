function clicked() {
    console.log("You clicked me")
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
//Clicking function 

//Event listener function 
var button = document.getElementById("my-btn");
    button.addEventListener("click", function() {
        alert("You clicked me!");
    });