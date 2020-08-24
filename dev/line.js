var myCars = [
    '<div class="mdui-chip"><span class="mdui-chip-title">1号线/01A01/01001/92011/特殊性：张江实训专用车</span></div>',
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
