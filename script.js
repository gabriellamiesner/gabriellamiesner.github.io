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