import React, { useContext, useEffect } from "react";
import { createRoot } from "react-dom/client"
import { loadContext } from "../../Context/Context";
import './Loading.css'

const Loading = props => {
    const {load, setLoad } = useContext(loadContext)

    const timer = () => {
        setTimeout(myTimer, 5000)
    }

    const myTimer = () => {
        setLoad(true)
        clearInterval(intevalId)

        window.cancelAnimationFrame(animationFrameId)
    }

    timer();

    // animation
    const ref = React.useRef(null)
    const ctxRef = React.useRef(null)
    const containerRef = React.useRef(null)
    const lightningStrikeOffset = 5
    const lightningStrikeLenght = 400
    const lightningBoldLenght = 5
    const lightningThickness = 4
    let animationFrameId
    let intevalId
    
    const setup = function() {
        createLightning();
        for (let i = 0 ; i < lightningArray.length ; i++) {
          lightningArray[i].draw();
        }
    }

    function createLightning() {
        lightningArray = []
        let lightningX1 = getRandomInt(2, ref.current.width-2)
        let lightningX2 = getRandomInt(lightningX1 -lightningStrikeOffset, lightningX1 + lightningStrikeOffset);
        lightningArray[0] = new Lightning(lightningX1, 0, lightningX2, lightningBoldLenght, lightningThickness, 1)
        for (let i = 1; i < lightningStrikeLenght; i++) {
            let lastBolt = lightningArray[i-1];
            let bold1 = lastBolt.end.x
            let bold2 = getRandomInt(bold1 - lightningStrikeOffset, bold1 + lightningStrikeOffset)
            lightningArray.push(new Lightning(bold1, lastBolt.end.y, bold2, lastBolt.end.y + lightningBoldLenght, lastBolt.thickness, lastBolt.opacity))
        }
    }

    const createPosition = ( x, y) => { return {x,y} }
    const getRandomFloat = (min, max) => Math.random() * (max - min + 1) + min
    const getRandomInt = (min, max) => Math.floor(getRandomFloat(min,max))

    const line = (start, end, thickness, opacity) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(start.x, start.y);
        ctxRef.current.lineTo(end.x, end.y);
        ctxRef.current.lineWidth = thickness;
        ctxRef.current.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctxRef.current.shadowBlur = 30;
        ctxRef.current.shadowColor = "#bd9df2";
        ctxRef.current.stroke();
        ctxRef.current.closePath();
    }

    useEffect(() => {
        let isAnimating = true

        const canvas = ref.current
        const ctx = canvas.getContext('2d')
        canvas.width = containerRef.current.offsetWidth
        canvas.height = containerRef.current.offsetHeight
        ctxRef.current = ctx
        let frameCount = 0

        const clearCanvas = (x, y, height ,width) => {
            const rectX = x || 0
            const rectY = y || 0
            const rectWidth = width || canvas.width
            const rectHeight = height || canvas.height
            ctxRef.current.fillStyle = "rgba(0,0,0,.8)"
            ctxRef.current.fillRect(rectX, rectY, rectWidth, rectHeight)
            //ctxRef.current.clearRect(rectX, rectY, rectWidth, rectHeight)
            ctxRef.current.beginPath()
        }

        setup()
        const animate = function() {
            if (!isAnimating) {
                return; // Animation anhalten, wenn isAnimating auf false gesetzt ist
            }
            clearCanvas();
            frameCount++
            for (let i = 0 ; i < lightningArray.length ; i++) {
              lightningArray[i].opacity -= 0.01;
              lightningArray[i].thickness -= 0.05;
              if (lightningArray[i].thickness <= 2) {
                lightningArray[i].end.y -= 0.05;
              }
              lightningArray[i].draw();
            }
          
            animationFrameId = window.requestAnimationFrame(animate);
        }
        animate()
        intevalId = setInterval(function() {
        createLightning()
        }, inter)
        return () => {
            isAnimating = false;
            clearInterval(intevalId)
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [setup])
    
    class Lightning {
        constructor(x1, y1, x2, y2, thickness, opacity) {
            this.start = createPosition(x1, y1);
            this.end = createPosition(x2, y2);
            this.thickness = thickness;
            this.opacity = opacity; 
        }
        draw() {
            return line(this.start, this.end, this.thickness, this.opacity)
        }
    }

    const inter = 500
    let lightningArray = []


    return (
         
        <div ref={containerRef} className="container">
            <div className="wrapper">
                <canvas ref={ref} id="canvasLoad"></canvas>
                <div className="loadBar">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* <button onClick={() => setLoad(true)}> wir laden</button> */}
            </div>
        </div>
     );
}

export default Loading;
