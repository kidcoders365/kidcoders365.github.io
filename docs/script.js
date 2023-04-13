function scrollFunc() {
    var dist = window.pageYOffset;
    if(dist > 0)
        document.getElementById('navbar').style.backgroundColor = "black";
    else
        document.getElementById('navbar').style.backgroundColor = "";
}