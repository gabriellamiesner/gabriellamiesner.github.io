function showDiv() {
    div = document.getElementById('by_semester');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    }
}
function showDiv1() {
    div = document.getElementById('by_subject');
    if (div.style.display == "block"){
      div.style.display = "none";
      document.getElementById('by_sem').style.display = "block";
    }else{
    div.style.display = "block";
    document.getElementById('by_sem').style.display = "none";
    }
}

function showKodeWithKlossy() {
    div = document.getElementById('kwk');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('pickhacks').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    }
}


function showTechTogether() {
    div = document.getElementById('techtogether');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
  document.getElementById('kwk').style.display = "none";
    document.getElementById('pickhacks').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    
    
    }
}

function showLaunchCode() {
    div = document.getElementById('launchcode');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
   document.getElementById('kwk').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('pickhacks').style.display = "none";
    }
}

function showGoogle() {
    div = document.getElementById('google');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('kwk').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('pickhacks').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    }
}

function showPickHacks() {
    div = document.getElementById('pickhacks');
    if (div.style.display == "block"){
      div.style.display = "none";
    }else{
    div.style.display = "block";
    document.getElementById('kwk').style.display = "none";
    document.getElementById('techtogether').style.display = "none";
    document.getElementById('google').style.display = "none";
    document.getElementById('launchcode').style.display = "none";
    }
}