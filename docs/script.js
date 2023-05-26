function scrollFunc() {
    var dist = window.pageYOffset;
    if(dist > 0)
        document.getElementById('navbar').style.backgroundColor = "black";
    else
        document.getElementById('navbar').style.backgroundColor = "";
}
document.getElementById('menu').onclick = function() {
    var navigation = document.getElementById('navigation');
    if(navigation.style.display == "" || navigation.style.display == "none")
        navigation.style.display = "block";
    else
        navigation.style.display = "none";
};



