window.onload = function () {
    document.getElementById("capcha").onclick = function() {

        document.getElementById("galkanot").classList.remove("showRadius");
        document.getElementById("galkanot").classList.add("hideRadius");
        
        setTimeout(rt, 250);
        setTimeout(rt2, 1300);
        setTimeout(rt3, 1700);
        setTimeout(PEREHOD_PO_SSILKE, 2000);
        

        function rt() {
            document.getElementById("galkanot").remove();
            document.getElementById("galkasppiner").classList.remove("hideRadius")
            document.getElementById("galkasppiner").classList.add("showRadius");
        }
        
        function rt2() {
            document.getElementById("galkasppiner").classList.remove("showRadius")
            document.getElementById("galkasppiner").classList.add("hideRadius");
        }
        
        function rt3() {
            document.getElementById("galkasppiner").remove();
            document.getElementById("galkarobotacompleate").classList.remove("hide")
            document.getElementById("galkarobotacompleate").classList.add("show");
        }
        function PEREHOD_PO_SSILKE() {

            location.href = 'http://zaebumba8-trek.ru/31hCt1';

        }
        

    }
}

