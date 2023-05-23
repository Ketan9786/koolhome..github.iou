
function lightsoff(){
    let ele = document.getElementById("lightsoff");

ele.innerHTML=`

<div class="featureslightsoff"><img src="/Assets/features/home-off.png" class="img-fluid rounded-start " alt="..."
          style="opacity: 0;" id="lightsoff">
        </div>
        
`
document.getElementById("lightsoff").appendChild(ele);
}

export {lightsoff}