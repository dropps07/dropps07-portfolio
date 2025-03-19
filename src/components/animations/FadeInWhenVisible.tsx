"use client" 
import { motion, useAnimation } from "framer-motion";   //using framer motion for complex styling
import { useEffect} from "react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({children, className, flow="left"}:
    {
        children: ReactNode;
        className?: string;
        flow?:string;
    }) {
        const controls = useAnimation();  // controls the animation && latest of a year ago
        const [ref, inView] = useInView();  // inView is a boolean that tells us if the element is in view

        useEffect(()=>{                   //runs if inView changes
            if(inView){ 
                controls.start("visible");    //if inView is true it runs visible animation
            } else {
                controls.start("hidden");     //if inView is false it runs hidden animation
            }
        },[controls, inView]);  //dependencies if whenever either changes the func is called
    
        return(
            <motion.span
            
            ref={ref}    //ref is the reference to the element to be called by useInView in useAnimate
            // whatever we add to this div will apply to every component with only using 'ref' word.

            animate={controls}
            initial="hidden"
            transition={{
                type: "spring",
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
            }}
            variants={{
                visible:{
                    x:0,
                    y:0,
                    opacity:1,
                    scale: 1
                },
                hidden: {
                    x: getX({ flow }), //func yet to be defined below
                    y: getY({ flow }), //func yet to be defined below
                    opacity: 0,
                    scale: 0
                }
            }}
            className={className}
            >
                {children}
            </motion.span>
        );
    
    }

    
function getX ({flow}: {flow: string}) {
    if(flow === "left"){
        return 100;
    }
    else if (flow == "right"){
        return -85;
    }
    else return 0;
}


   
function getY ({flow}: {flow: string}) {
    if(flow === "up"){
        return 100;
    }
    else if (flow == "down"){
        return -40;
    }
    else return 0;
}
