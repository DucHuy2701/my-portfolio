import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {ArrowUp} from "lucide-react"

export default function ScrollToTopButton(){
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        show && (
            <motion.button className="btn btn-primary rounded-circle position-fixed"
                style={{
                    bottom: "30px",
                    right: "30px",
                    zIndex: 1000,
                    width: "50px",
                    height: "50px"
                }}
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0}}
                whileHover={{scale: 1.1}}
                onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>
                    <ArrowUp size={20}/>
            </motion.button>
        )
    );
}