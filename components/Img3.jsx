import { motion, useViewportScroll, useTransform } from "framer-motion";


const Img3 = () => {
    const { scrollYProgress } = useViewportScroll()
    const translateY = useTransform(scrollYProgress, [0.8, 0.9], [0, 70]);
    return ( 
        <motion.img style={{translateY}} src="/project3.jpg"></motion.img>
     );
}
 
export default Img3;
