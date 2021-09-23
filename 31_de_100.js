for(i=0; i<30; i++){
    let div = document.createElement('div');
    div.className = " dot dot-" +i;
    div.innerHTML = "";
    div.id = 'dotDot1';
    document.getElementById("dotDot").appendChild(div);
    
    let div2 = document.createElement('div');
    div2.className = " dot2 dot2-" +i;
    div2.innerHTML = "";
    div2.id = 'dotDot2';
    document.getElementById("dotDot2").appendChild(div2);
    
    let div3 = document.createElement('div');
    div3.className = " dot3 dot3-" +i;
    div3.innerHTML = "";
    div3.id = 'dots3';
    document.getElementById("dotDot3").appendChild(div3);
    
    let div4 = document.createElement('div');
    div4.className = " dot4 dot4-" +i;
    div4.innerHTML = "";
    div4.id = 'dots4';
    document.getElementById("dotDot4").appendChild(div4);
    
  }