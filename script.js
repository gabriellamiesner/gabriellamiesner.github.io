function showDiv() {
    div = document.getElementById('by_semester');
    if (div.style.display == "inline"){
      div.style.display = "none";
    }else{
    div.style.display = "inline";
    }
}
function showDiv1() {
    div = document.getElementById('by_subject');
    if (div.style.display == "inline"){
      div.style.display = "none";
      document.getElementById('by_sem').style.display = "inline";
    }else{
    div.style.display = "inline";
    document.getElementById('by_sem').style.display = "none";
    }
}

function showKodeWithKlossy() {
    div = document.getElementById('kwk');
    if (div.style.display == "inline"){
      div.style.display = "none";
    }else{
    div.style.display = "inline";
    document.getElementById('pickhacks').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    }
}


function showTechTogether() {
    div = document.getElementById('techtogether');
    if (div.style.display == "inline"){
      div.style.display = "none";
    }else{
    div.style.display = "inline";
  document.getElementById('kwk').style.display = "none";
    document.getElementById('pickhacks').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    
    
    }
}

function showLaunchCode() {
    div = document.getElementById('launchcode');
    if (div.style.display == "inline"){
      div.style.display = "none";
    }else{
    div.style.display = "inline";
   document.getElementById('kwk').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('pickhacks').style.display = "none";
    }
}

function showGoogle() {
    div = document.getElementById('google');
    if (div.style.display == "inline"){
      div.style.display = "none";
    }else{
    div.style.display = "inline";
    document.getElementById('kwk').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('pickhacks').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    }
}

function showPickHacks() {
    div = document.getElementById('pickhacks');
    if (div.style.display == "inline"){
      div.style.display = "none";
    }else{
    div.style.display = "inline";
    document.getElementById('kwk').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    }
}

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
