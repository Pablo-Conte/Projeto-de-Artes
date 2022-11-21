
    var arrayImg = new Array("./img/amarelo.png", "./img/azul.png", "./img/laranja.png", "./img/rosa.png", "./img/roxo.png", "./img/verde.png", "./img/vermelho.png");
    var doingA = ""
    var doingB = ""
    var w = window.screen.width; 
    var h = window.screen.height; 
    var maxElements = 1000;
    var currentElements = 0;
    var degree = 0;
    var currentHeadX = 0;
    var currentHeadY = 0;


    
    // changes 0 to 360 in a proper way
    function changeDegree(increment){

        if(increment > 0){
            degree = (degree + increment)%360;
        }else{
            degree = (degree + increment + 360)%360;
        }
        document.getElementsByClassName("cat")[0].style.transform = "rotate("+degree+"deg)";
    }
    
    function moveCat(forward){
        var cat = document.getElementsByClassName("cat")[0];
        var x = cat.offsetLeft;
        var y = cat.offsetTop;
        var w = cat.offsetWidth;
        var h = cat.offsetHeight;

        var speed = 2 * forward;
        var angle = degree * Math.PI / 180;
        var dx = speed * Math.cos(angle);
        var dy = speed * Math.sin(angle);
        var newX = x + dx;
        var newY = y + dy;
        
        if(newX < 0 - w || newX > window.innerWidth){
            changeDegree(180);
        }
        if(newY < 0 - h || newY > window.innerHeight){
            changeDegree(179);
        }
        cat.style.left = newX + "px";
        cat.style.top = newY + "px";

        // set the cat to the correct angle in the css
        cat.style.transform = "rotate(" + degree + "deg)";
    }

    function increaseAngle(){
        changeDegree(1);
    }

    function decreaseAngle(){
        changeDegree(-1);
    }
    

    function handleKeysDown(e){

        if(e != null){
            
            
            if(e.key == "ArrowUp"){
                doingB = "up"
                moveCat(1);
            }else if(e.key == "ArrowDown"){
                doingB = "down";
                moveCat(-1);
            }


            if(e.key == "ArrowRight"){
                doingA = "right"
                increaseAngle();
            }else if(e.key == "ArrowLeft"){
                decreaseAngle();
                doingA = "left";
            }



            if(e.key == " "){
                // doing = "space";
                var cat = document.getElementsByClassName("cat")[0];
                var x = cat.offsetLeft;
                var y = cat.offsetTop;
                
                setSplash(x,y);
            }
        }else{
            // just updating
            if(doingA == "right"){
                increaseAngle();
            }else if(doingA == "left"){
                decreaseAngle();
            }else if(doingB == "up"){
                moveCat(1);
            }else if(doingB == "down"){
                moveCat(-1);
            }
        }
    }

    function handleKeysUp(e){
        
        if(e.key == "ArrowRight"){
            doingA = ""
        }else if(e.key == "ArrowLeft"){
            doingA = "";
        }
        
        if(e.key == "ArrowUp"){
            doingB = ""
        }else if(e.key == "ArrowDown"){
            doingB = "";
        }       

        if(e.key == "Space"){
            // doingA = "";
        }
    }


    // function splash() {
    //     // this functions chooses a random image from the array
    //     // it also chooses a random position for the image, a random size, a random rotation (TODO) and a random 

    //     // if there is too many elements on the screen, it removes the oldest one
    //     if(currentElements >= maxElements){
    //         document.getElementsByTagName("img")[0].remove()
    //         currentElements--
    //     }

    //     // random number for the size of the image and the volume of the song
    //     var rN = Math.random() 
    //     var pppp = Math.floor(rN * 200) + 100;

    //     // creating a random position for the image
    //     let randomPositionW = (Math.floor(Math.random() * (w + pppp))-pppp) + "px";
    //     let randomPositionH = (Math.floor(Math.random() * (h + pppp))-pppp) + "px";
        
        
    //     // random numbers between the size of the array 
    //     var randomNum = Math.floor(Math.random() * arrayImg.length);

        
    //     // setting the volume according to the size of the image
    //     var audio = new Audio('./song/splash.mp3');
    //     audio.volume = rN
    //     audio.play();

        
    //     // setting the attributes of the background image
    //     const para = document.createElement("img");
    //     para.width = pppp
    //     para.height = pppp
    //     para.src = arrayImg[randomNum];
    //     para.style.top = randomPositionH
    //     para.style.left = randomPositionW
    //     para.style.filter = "contrast(0%) contrast(50000) blur(5px)"
    //     document.body.appendChild(para);
        
    //     // setting the attributes of the image
    //     const para2 = document.createElement("img");
    //     para2.width = pppp
    //     para2.height = pppp
    //     para2.src = arrayImg[randomNum];
    //     para2.style.top = randomPositionH
    //     para2.style.left = randomPositionW
    //     document.body.appendChild(para2);

    //     // increasing the variable that controls the number of elements on the screen
    //     currentElements++
    // }







    // function choosePic() {
    //     // this functions chooses a random image from the array
    //     // it also chooses a random position for the image, a random size, a random rotation (TODO) and a random 

    //     // if there is too many elements on the screen, it removes the oldest one
    //     if(currentElements >= maxElements){
    //         document.getElementsByTagName("img")[0].remove()
    //         currentElements--
    //     }

    //     // random number for the size of the image and the volume of the song
    //     var rN = Math.random() 
    //     var pppp = Math.floor(rN * 200) + 100;

    //     // creating a random position for the image
    //     let randomPositionW = (Math.floor(Math.random() * (w + pppp))-pppp) + "px";
    //     let randomPositionH = (Math.floor(Math.random() * (h + pppp))-pppp) + "px";
        
        
    //     // random numbers between the size of the array 
    //     var randomNum = Math.floor(Math.random() * arrayImg.length);

        
    //     // setting the volume according to the size of the image
    //     var audio = new Audio('./song/splash.mp3');
    //     audio.volume = rN
    //     audio.play();

        
    //     // setting the attributes of the background image
    //     const para = document.createElement("img");
    //     para.width = pppp
    //     para.height = pppp
    //     para.src = arrayImg[randomNum];
    //     para.style.top = randomPositionH
    //     para.style.left = randomPositionW
    //     para.style.filter = "contrast(0%) contrast(50000) blur(5px)"
    //     document.body.appendChild(para);
        
    //     // setting the attributes of the image
    //     const para2 = document.createElement("img");
    //     para2.width = pppp
    //     para2.height = pppp
    //     para2.src = arrayImg[randomNum];
    //     para2.style.top = randomPositionH
    //     para2.style.left = randomPositionW
    //     document.body.appendChild(para2);

    //     // increasing the variable that controls the number of elements on the screen
    //     currentElements++
    // }

     // setting the attributes of the background image
    const gato = document.createElement("img");
    gato.classList.add("cat")
    gato.style.zIndex = "100"
    gato.src = "./img/gato.gif";
    gato.style.top = (h/3) + "px"
    gato.style.left = (w/3) + "px"
    // gato.style.filter = "contrast(0%) contrast(50000) blur(5px)"
    document.body.appendChild(gato);
    document.body.onkeydown = handleKeysDown
    document.body.onkeyup = handleKeysUp 

    setInterval(handleKeysDown, 8);




    // setting the attributes of the background image
    // const back = document.createElement("svg");
    // back.classList.add("black")

    // back.style.zIndex = "50"
    // back.style.top = 0
    // back.style.left = 0
    // back.style.width = w + "px"
    // back.style.height = h + "px"
    // document.body.appendChild(back);


function setSplash(x, y){
    svg_points = [[188.180, 472.060],
    [184.918, 453.006],
    [199.375, 423.856],
    [238.185, 324.999],
    [233.152, 320.094],
    [224.944, 328.098],
    [216.588, 335.946],
    [203.651, 330.760],
    [203.746, 319.154],
    [203.860, 305.714],
    [180.471, 302.762],
    [160.220, 328.835],
    [136.510, 330.008],
    [133.500, 321.342],
    [137.288, 313.350],
    [159.764, 300.857],
    [184.574, 281.214],
    [181.930, 264.505],
    [156.741, 283.719],
    [126.968, 302.762],
    [109.491, 292.894],
    [104.369, 273.291],
    [107.967, 261.386],
    [126.490, 248.945],
    [148.713, 246.410],
    [198.391, 236.604],
    [213.301, 225.462],
    [205.393, 217.638],
    [178.781, 215.040],
    [169.938, 206.251],
    [175.628, 194.916],
    [194.624, 200.916],
    [209.570, 208.122],
    [220.936, 208.505],
    [224.666, 187.650],
    [202.879, 164.370],
    [178.797, 134.733],
    [176.479, 116.550],
    [179.181, 99.656],
    [204.404, 98.891],
    [210.348, 126.146],
    [223.404, 166.523],
    [243.581, 175.669],
    [245.172, 163.397],
    [242.971, 150.894],
    [245.524, 134.122],
    [239.955, 96.106],
    [237.596, 79.105],
    [251.568, 74.989],
    [252.462, 95.950],
    [260.284, 131.197],
    [265.813, 154.963],
    [267.382, 162.257],
    [283.827, 164.213],
    [289.584, 156.320],
    [298.091, 146.776],
    [307.676, 144.533],
    [317.288, 148.699],
    [325.273, 152.410],
    [342.602, 138.035],
    [339.560, 128.139],
    [338.018, 104.412],
    [360.785, 83.285],
    [379.809, 96.512],
    [375.204, 118.569],
    [371.766, 161.608],
    [379.717, 166.593],
    [400.731, 155.928],
    [420.673, 145.688],
    [425.878, 152.516],
    [427.455, 160.305],
    [404.727, 184.819],
    [394.842, 188.456],
    [404.437, 211.987],
    [428.466, 201.776],
    [472.243, 170.579],
    [514.407, 164.742],
    [525.361, 193.267],
    [508.948, 198.235],
    [456.012, 203.019],
    [424.104, 220.316],
    [427.491, 240.004],
    [439.302, 253.698],
    [431.315, 268.625],
    [422.815, 287.570],
    [434.531, 297.237],
    [457.450, 299.378],
    [483.687, 302.000],
    [506.815, 332.219],
    [508.680, 352.927],
    [501.977, 379.429],
    [464.366, 344.652],
    [452.808, 319.304],
    [420.750, 306.419],
    [408.289, 318.935],
    [415.855, 343.887],
    [437.298, 385.047],
    [431.648, 397.639],
    [417.626, 399.971],
    [408.660, 389.607],
    [398.435, 347.373],
    [373.459, 340.720],
    [367.352, 361.081],
    [366.897, 370.510],
    [356.813, 375.655],
    [338.603, 347.633],
    [328.151, 335.047],
    [317.759, 344.014],
    [322.161, 379.191],
    [338.085, 417.577],
    [345.393, 437.421],
    [340.226, 452.502],
    [325.604, 446.013],
    [318.420, 412.844],
    [302.663, 344.552],
    [292.816, 333.230],
    [278.560, 352.423],
    [282.755, 366.362],
    [288.537, 378.267],
    [289.188, 398.891],
    [274.115, 404.950],
    [259.391, 397.899],
    [261.791, 371.739],
    [263.916, 340.728],
    [254.773, 332.221],
    [233.008, 379.961],
    [223.967, 432.227],
    [214.827, 464.692],
    [188.182, 472.067]]

    let newRect = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    
    scale = 0.4
    holds = document.getElementById("holds_splashs")
    newRect.setAttribute("fill","white")
    newRect.setAttribute("transform","scale("+scale+")")

    cat = document.getElementsByClassName("cat")[0]
    
    newRect.setAttribute("points", svg_points.map(p => [p[0]+cat.width+(x*(1/scale)),p[1]+(cat.height/2)+y*(1/scale)].join(" ") + ", ").join(" "));
    
    holds.appendChild(newRect);
    
    // newRect.setAttribute("points", "");
    // newRect.setAttribute("y", "350");
    
}

// setSplash(0,0)
// setSplash(500,0)
// setSplash(300,500)

var arrayImg = new Array("./img/back.jpg", "./img/back2.jpg");
var randomNum = Math.floor(Math.random() * arrayImg.length);
document.getElementById("backimage").setAttribute("href", arrayImg[randomNum])