function pointLeft() {
    document.getElementById('slider-wrapper-left-trans').style.display = "block";
    document.getElementById('slider-wrapper-left-red').style.display = "none";
    document.getElementById('slider-wrapper-right-trans').style.display = "none";
    document.getElementById('slider-wrapper-right-red').style.display = "block";
    document.getElementById('slider-row').style.justifyContent = "flex-start";
}
function pointRight() {
    document.getElementById('slider-wrapper-left-trans').style.display = "none";
    document.getElementById('slider-wrapper-left-red').style.display = "block";
    document.getElementById('slider-wrapper-right-trans').style.display = "block";
    document.getElementById('slider-wrapper-right-red').style.display = "none";
    document.getElementById('slider-row').style.justifyContent = "flex-end";
}