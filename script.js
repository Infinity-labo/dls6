    const images = ["images/dog1.jpg","images/dog2.jpg","images/dog3.jpg"];
    let num = -1;
    const slide = ()=>{
        if(num===2){
            num = 0;
        }else{
            num++;
        }
        document.getElementById("mypic").src = images[num];
    };
    setInterval(slide, 2000);
