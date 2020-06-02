function isHighest(a){
    var saigo = document.getElementById("saigo");
    var reg = /\d+/;
    var highest = ""+saigo.innerText;
    height = highest.match(reg)[0];
    saigo.innerText="分数："+a+"";
}
window.isHighest = isHighest;