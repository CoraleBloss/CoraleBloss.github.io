window.onload=init;

function init()
{
	console.log("windoe had loaded");
	state.i=1;
	state.j=1;
	state.k=1;
	state.l=1

}

var state={
	i:0,
	j:0,
	k:0,
	l:0
};

function nextskin()
{
	console.log("inside function nextskin");
	console.log(state.i);
	var skin=document.getElementById("skincolor");
	if (state.i===0){
		skin.setAttribute("class", "facecolor1");
			state.i++;
			console.log(sate.i);
			}
			else
				if (state.i===1){
					skin.setAttribute("class","facecolor2")
				}
				else
					if (state.i===2){
						skin.setAttribute("class","facecolor3");
						state.i=0
					}
					else	
						if (state.i===3){
							skin.setAttribute("class","facecolor4");
							state.i=0
						}

	}
function nextblush()
{
    console.log("inside function nextblush");
    console.log(state.j);
    var shoe=document.getElementById("blush");
    if(state.j===0){
    shoe.setAttribute("class","blush1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    blush.setAttribute("class","blush");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    blush.setAttribute("class","blush3");
         state.j=0;
    }
    
}

function nexteyeshadow()
{
    console.log("inside function nexteyeshadow");
    
    console.log(state.k);
    var hairf=document.getElementById("eyeshaodw");
    
    
    if(state.k===0){
    eyeshadow.setAttribute("class","eyeshadow1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    eyeshadow.setAttribute("class","eyeshadow2");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
    eyeshadow.setAttribute("class","eyeshadow3");
         state.k=0;
    }
    
}





