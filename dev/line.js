var myCars = [
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/92011/特殊性：张江实训专用车</span></div>',
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/92022/特殊性：张江实训专用车</span></div>',
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/92033/特殊性：张江实训专用车</span></div>',
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/93442/特殊性：张江实训专用车</span></div>',
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/93453/特殊性：张江实训专用车</span></div>',
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/94102/特殊性：张江实训专用车</span></div>',
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/94113/特殊性：张江实训专用车</span></div>',
    '<div class="mdui-chip mdui-ripple"><span class="mdui-chip-title">1号线/01A01/01001/94121/特殊性：张江实训专用车</span></div>',
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
