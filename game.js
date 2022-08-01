var numberofdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function())
    var buttoninnerhtml=this.innerHTML;
    makesound(buttoninnerhtml);
});
};
   document.addEventListener("keypress",function(event)){
    makesound(event.key);
   }
   function makesound(key){
    switch(key){
        case:"w"
    }
   }