// ImgaeRollingGallery.js
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion'
import '../ImgaeRollingGallery/ImgaeRollingGallery.css'
import { imagesData } from '../../constants/Constant'
import { AnimatedContainer } from '../AnimatedContainer/AnimatedContainer'
import { SplitText } from '../SplitText/SplitText'
const ImgaeRollingGallery = ({ autoplay = false, pauseOnHover = false }) => {
    const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640)

    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = imagesData.length
    const faceWidth = (cylinderWidth / faceCount) * 1.5 // Increased width for items
    const dragFactor = 0.05
    const radius = cylinderWidth / (2 * Math.PI)

    const rotation = useMotionValue(0)
    const controls = useAnimation()
    const autoplayRef = useRef()

    const handleDrag = (_, info) => {
        rotation.set(rotation.get() + info.offset.x * dragFactor)
    }

    const handleDragEnd = (_, info) => {
        controls.start({
            rotateY: rotation.get() + info.velocity.x * dragFactor,
            transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
        })
    }

    const transform = useTransform(rotation, value => {
        return `rotate3d(0, 1, 0, ${value}deg)`
    })

    useEffect(() => {
        if (autoplay) {
            autoplayRef.current = setInterval(() => {
                controls.start({
                    rotateY: rotation.get() - 360 / faceCount,
                    transition: { duration: 2, ease: 'linear' }
                })
                rotation.set(rotation.get() - 360 / faceCount)
            }, 2000)

            return () => clearInterval(autoplayRef.current)
        }
    }, [autoplay, rotation, controls, faceCount])

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSizeSm(window.innerWidth <= 640)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleMouseEnter = () => {
        if (autoplay && pauseOnHover) {
            clearInterval(autoplayRef.current)
            controls.stop() // Stop the animation smoothly
        }
    }

    const handleMouseLeave = () => {
        if (autoplay && pauseOnHover) {
            controls.start({
                rotateY: rotation.get() - 360 / faceCount,
                transition: { duration: 2, ease: 'linear' }
            })
            rotation.set(rotation.get() - 360 / faceCount)

            autoplayRef.current = setInterval(() => {
                controls.start({
                    rotateY: rotation.get() - 360 / faceCount,
                    transition: { duration: 2, ease: 'linear' }
                })
                rotation.set(rotation.get() - 360 / faceCount)
            }, 2000)
        }
    }

    return (
        <AnimatedContainer reverse={true} direction="vertical" distance={100}>
            <div className="gallery-container mt-5 bg-dark border border-2 border-secondary rounded">
                <div className="contaienr text-light text-center">
                    <SplitText text="Explore The Nature" className="custom-class" delay={50} />
                </div>
                <div className="gallery-content  bg-dark rounded">
                    <motion.div
                        drag="x"
                        className="gallery-track"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: transform,
                            rotateY: rotation,
                            width: cylinderWidth,
                            transformStyle: 'preserve-3d'
                        }}
                        onDrag={handleDrag}
                        onDragEnd={handleDragEnd}
                        animate={controls}
                    >
                        {imagesData.map(image => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                style={{
                                    width: `${faceWidth}px`,
                                    transform: `rotateY(${image.id * (360 / faceCount)}deg) translateZ(${radius}px)`
                                }}
                            >
                                <img src={image.url} alt={`gallery-${image.id}`} className="gallery-img" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedContainer>
    )
}

export default ImgaeRollingGallery
