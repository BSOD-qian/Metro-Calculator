var myCars = [
    '1号线<br/>01A01<br/>01001<br/>92011<br/>特殊性：张江实训专用车<hr/>',
];
function findone() {
    mykey = document.getElementById("mykeyword").value;
    myfind = document.getElementById("myfind").value;
    myfind = "";
    for (i in myCars) {
        if (myCars[i].search(mykey) >= 0) { myfind = myfind + myCars[i] + "" }
    }
    document.getElementById("myfind").innerHTML = myfind;
}
