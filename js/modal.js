
    var modal_1 = document.getElementById("tracyModal");
    var modal_2 = document.getElementById("leilaniModal");
    var modal_3 = document.getElementById("historyModal");
    // Get the button that opens the modal
    var btn_1 = document.getElementById("tracyBtn");
    var btn_2 = document.getElementById("leilaniBtn");
    var btn_3 = document.getElementById("historyBtn");
    // Get the <span> element that closes the modal
    var span_1 = document.getElementsByClassName("close")[0];
    var span_2 = document.getElementsByClassName("close2")[0];
    var span_3 = document.getElementsByClassName("close3")[0];
    // When the user clicks on the button, open the modal
    btn_1.onclick = function () {
        modal_1.style.display = "block";
    };
    btn_2.onclick = function () {
        modal_2.style.display = "block";
    };
    btn_3.onclick = function () {
        modal_3.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span_1.onclick = function () {
        modal_1.style.display = "none";
    };
    span_2.onclick = function () {
        modal_2.style.display = "none";
    };
    span_3.onclick = function () {
        modal_3.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal_1) {
            modal_1.style.display = "none";
        }else if (event.target == modal_2) {
            modal_2.style.display = "none";
        }else if (event.target == modal_3) {
            modal_3.style.display = "none";
        }
    
    }


   
   