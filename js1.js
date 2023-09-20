function Average(){
    let x=+document.getElementById("vl").value;
    let y=+document.getElementById("hh").value;
    let z=+document.getElementById("sh").value;
    let average=(x+y+z)/3;
    document.getElementById("Average").innerHTML="Kết quả là: " + average;
}