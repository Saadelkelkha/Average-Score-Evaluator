function f1(){
    var x = parseFloat(document.getElementById("moyC").value);
    var y = parseFloat(document.getElementById("noteEFM").value);
    var mm = (x + y)/3;
    if(mm >= 16){
        document.querySelector("span").innerText = mm + "  Tres bien";
    }else{
        if(mm >= 14 && mm < 16){
            document.querySelector("span").innerText = mm + "  Bien";
        }else{
            if(mm >= 12 && mm < 14){
                document.querySelector("span").innerText = mm + "  Assez bien";
            }else{
                if(mm >= 10 && mm < 12){
                    document.querySelector("span").innerText = mm + "  Passable";
                }else{
                    if(mm >= 7 && mm < 10){
                        document.querySelector("span").innerText = mm + "  Insuffisant";
                    }else{
                        document.querySelector("span").innerText = mm + "  Nil";
                    }
                }
            }
        }
    }

}