{
  
    {var div = document.createElement("httpwarning");
    div.style.width = "1910px";
    div.style.height = "85px";
    div.style.position = "fixed";
    div.style.left = '0' ;
    div.style.top = '0' ;
    div.style.background = "transparent";
    div.style.backgroundImage = "url('" + browser.extension.getURL("images/pagewarning.png") + "')";
    document.body.appendChild(div);
    
    
     
    var btn = document.createElement("button");
    var btnimg = document.createElement("buttonimg");
    btnimg.style.position = "fixed";
    btnimg.style.left = '0' ;
    btnimg.style.top = '0' ;
    btnimg.style.width= "30px";
    btnimg.style.height= "30px";
    btnimg.style.color= "transparent";
    btnimg.style.backgroundImage = "url('" + browser.extension.getURL("images/closebutton.png") + "')";
    btnimg.appendChild(btn);                                
    document.body.appendChild(btnimg);
    btn.style.width= "inherit";
    btn.style.height= "inherit";
    btn.style.background= "transparent";
    btn.style.border= "none";
    }
    
    {btn.onclick = function(){closingDiv()};  
    
    function closingDiv() {
        div.style.display= "none";
        btn.style.display= "none";
        btnimg.style.display= "none";
    }
    }

}