window.onload=function(){
    var header= document.getElementById("right-header-container");
    var tabs= header.getElementsByTagName("A");
    for(var i=0;i<tabs.length;i++){

        tabs[i].addEventListener("click", function(){
            var current=document.getElementsByClassName("active");
            if(current.length>0){
                current[0].className=current[0].className.replace(" active","");

            }
            this.className+=" active";
        });
    }

}
