var hoverImg = document.getElementById("hover-img");
var moreInfoP = document.getElementById("moreInfo-p");
var clickBtn = document.getElementById("learnMore-btn");

hoverImg.addEventListener('mouseover', function() {
hoverImg.style.borderColor = 'lime';
});

hoverImg.addEventListener('mouseout', function() {
hoverImg.style.borderColor = 'transparent'; 
});

clickBtn.addEventListener('click', function() {
moreInfoP.textContent = 'I am a semi-retired data engineer going back to college to learn some new things!';
});

