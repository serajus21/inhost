function showNavigation() {
    document.getElementById('show').style.display="none";
    document.getElementById('hide').style.display="block";
    document.getElementById('navigation').style.right="0%";
}
function hideNavigation() {
    document.getElementById('hide').style.display="none";
    document.getElementById('show').style.display="block";
    document.getElementById('navigation').style.right="-100%";
}