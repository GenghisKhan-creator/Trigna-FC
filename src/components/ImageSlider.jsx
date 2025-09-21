import { useEffect, useState } from "react";
import "./ImageSlider.css"
import { IoIosArrowBack } from "react-icons/io";
import gsap from 'gsap';


const image1 = "src/assets/1.jpg";
const image2 = "src/assets/2.jpg";
const image3 = "src/assets/3.jpg";
const image4 = "src/assets/4.jpg";
const image5 = "src/assets/5.jpg";
const image6 = "src/assets/6.jpg";

const imageArray = [image1,image2,image3,image4,image5,image6];

function ImageSlider() {

    const[midImage,setMidImage] = useState(0);
    const[rightImage,setRightImage] = useState(1);
    const[leftImage,setLeftImage] = useState(imageArray.length-1);

    useEffect(()=>{
        if(midImage == 0){
            setLeftImage(imageArray.length-1)
            setRightImage(1);
        }
        else if(midImage == imageArray.length-1)
        {
            setRightImage(0);
            setLeftImage(midImage-1);
        }
        else{
            setRightImage(midImage+1);
            setLeftImage(midImage-1);
        }

    },[midImage]);

    const Increment=()=>{
        if(midImage == imageArray.length-1){
            setMidImage(0);
        }
        else{
            setMidImage(midImage+1);
        }
        //----------------GSAP ANIMATIONS-------------------------
        gsap.fromTo('.middleImage',
            {x:-200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.rightImage',
            {x:600,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.leftImage',
            {x:-500,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
    }
    const Decrement=()=>{
        if(midImage == 0){
            setMidImage(imageArray.length-1);
        }
        else{
            setMidImage(midImage-1);
        }
        //----------------GSAP ANIMATIONS-------------------------
        gsap.fromTo('.middleImage',
            {x:200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.rightImage',
            {x:600,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.leftImage',
            {x:-500,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
    }

  return (
    <div className="ImageSlider mt-0 h-[90vh] lg:mt-20 lg:h-[100vh]" >
        <div className="ImageSliderContainter">
            <div className="Images">
                <img src={imageArray[rightImage]} className="rightImage w-[150px] h-[250px] lg:w-[250px] lg:h-[450px]" />
                <img src={imageArray[midImage]} className="middleImage w-[250px] h-[350px] lg:w-[450px] lg:h-[600px]" />
                <img src={imageArray[leftImage]} className="leftImage w-[150px] h-[250px] lg:w-[250px] lg:h-[450px]" />
            </div>
        </div>
        <div className="buttons mt-10 lg:mt-40">
            <button className="leftButton" onClick={()=>Decrement()}><IoIosArrowBack />
            </button>
            <button className="rightButton" onClick={()=>Increment()}><IoIosArrowBack />
            </button>
        </div>
        <div className="dotsPlace">
        {
            imageArray.map((_,index)=>(
                <div className={`dots ${index===midImage?'active':'passive'}`}></div>
            ))
        }
        </div>
    </div>
  )
}

export default ImageSlider
