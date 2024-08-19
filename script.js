const IMbtn = document.getElementById('btn2');

function ash(){
    let a = parseFloat(document.getElementById("w1").value);
    let b = parseFloat(document.getElementById("w2").value);
    let c = parseFloat(document.getElementById("w3").value);
    let result = (c-a)*100/(b-a);
    document.getElementById("result").textContent = result;
}
function im(){
    let a = parseFloat(document.getElementById("w1").value);
    let b = parseFloat(document.getElementById("w2").value);
    let c = parseFloat(document.getElementById("w3").value);
    let result = (b-c)*100/(b-a);
    document.getElementById("result2").textContent = result;
}

document.getElementById("btn").addEventListener("click", ash);
IMbtn.addEventListener('click', im)

