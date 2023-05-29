let executeQuery = ()=> {
    let bool = validacion();
    if(bool == true){
        window.location.href = '../DataFrame/data_frame.html';
    }
}

function validacion() {
    let inp_1 = document.getElementById("inp_1").value;
    let inp_2 = document.getElementById("inp_2").value;
    let inp_3 = document.getElementById("inp_3").value;
    let inp_4 = document.getElementById("inp_4").value;

    const inputs = [inp_1, inp_2, inp_3, inp_4];
    let tam = inputs.filter(input => input != 0);
    if(tam.length == 0){
        window.alert("You have not selected any option");
        return false;
    } else {
        return true;
    }
}
