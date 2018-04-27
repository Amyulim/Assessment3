var toDiv = document.getElementById("to"),
    messageDiv = document.getElementById("message"),
    fromDiv = document.getElementById("from"),
    toInp = document.getElementById("toInp"),
    messageInp = document.getElementById("messageInp"),
    fromInp = document.getElementById("fromInp"),
    imgInp = document.getElementById("imgInp"),
    postcard = document.getElementById("postcard"),
    add = document.getElementById("add"),
    save = document.getElementById("save"),
    load = document.getElementById("load"),
    preview = document.getElementById("preview");

/*4b*/
var myPostcards = [];
var num =0;
/*--------------------------------LEVEL2A--------------------------------*/
toInp.addEventListener("keyup", function () {
    toDiv.innerHTML = "To " + toInp.value;
});

messageInp.addEventListener("keyup", function () {
    messageDiv.innerHTML =  messageInp.value;
});

fromInp.addEventListener("keyup", function () {
    from.innerHTML = "From " + fromInp.value;
});

/*--------------------------------LEVEL2B--------------------------------*/
imgInp.addEventListener("keyup", function (key) {
    
     if(key.keyCode == 13){
         num++;
         if(imgInp.value == "auto"){
             
             console.log("")
            postcard.style.backgroundImage = "url(imgs/auto"+num+".jpg)";
                if(num == 3){
                num = 0;
            }
   
           
         } else {
                postcard.style.backgroundImage = "url("+ imgInp.value +")"
         }
        
    }

});

/*--------------------------------LEVEL3--------------------------------*/
add.addEventListener("click", function () {
    
//if there is no inline style: like backgroundImg source in HTML file, it couldn't grab information. So state backgroundImage url first then sotre it.
    if (imgInp.value == "") {
        postcard.style.backgroundImage = "url(imgs/default.png)";
    }
    /*4B*/
    var obj = {
        bgimg:postcard.style.backgroundImage,
        to:toDiv.innerHTML,
        message:messageDiv.innerHTML,
        from:fromDiv.innerHTML
    };
    
    myPostcards.push(obj);
    //console.log(myPostcards);

    
    createPostcard(obj.to,obj.bgimg,obj.from,obj.message);
    
//    if(imgInp.value == ""){


    
});

/*--------------------------------LEVEL4A--------------------------------*/

function createPostcard(to2,bgImg,from,msg){
    var MiniPC = document.createElement("div");
    var MiniTo = document.createElement("div");
    var MiniMsg = document.createElement("div");
    var MiniFrom = document.createElement("div");

    MiniPC.className = "MiniPostcard";
    MiniTo.className = "MiniTo";
    MiniMsg.className = "MiniMsg";
    MiniFrom.className = "MiniFrom";

    MiniPC.style.backgroundImage = bgImg ;
    MiniTo.innerHTML = to2;
    MiniMsg.innerHTML = msg;
    MiniFrom.innerHTML = from;

    preview.appendChild(MiniPC);
    MiniPC.appendChild(MiniTo); 
    MiniPC.appendChild(MiniMsg);
    MiniPC.appendChild(MiniFrom);
    
    
    MiniPC.addEventListener("click", function(){
        postcard.style.backgroundImage = this.style.backgroundImage;
        toDiv.innerHTML = this.firstChild.innerHTML;
        messageDiv.innerHTML = this.children[1].innerHTML;
        fromDiv.innerHTML = this.children[2].innerHTML;
    })
}

/*--------------------------------LEVEL4C--------------------------------*/
save.addEventListener("click", function (){
   localStorage.setItem("myPostCard",JSON.stringify(myPostcards))
    console.log(localStorage.getItem("myPostCard"))
});

var PreviousPC = [];

load.addEventListener("click", function () {
console.log(localStorage.getItem("myPostCard"))
    preview.innerHTML = "";
    PreviousPC = localStorage.getItem("myPostCard");
    PreviousPC = JSON.parse(PreviousPC);
    
    for(var i=0; i<PreviousPC.length; i++ ){
        createPostcard(PreviousPC[i].to, PreviousPC[i].bgimg,PreviousPC[i].from,PreviousPC[i].message)
    }
})
































