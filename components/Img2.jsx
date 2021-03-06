import { motion, useViewportScroll, useTransform } from "framer-motion";


const Img2 = () => {
    const { scrollYProgress } = useViewportScroll()
    const translateX = useTransform(scrollYProgress, [0.8, 0.9], [0, -160]);
    return ( 
        <motion.img style={{translateX}} src="/project2.jpg"></motion.img>
     );
}
 
export default Img2;
