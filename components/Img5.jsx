import { motion, useViewportScroll, useTransform } from "framer-motion";

const Img5 = () => {
    const { scrollYProgress } = useViewportScroll()
    const translateX = useTransform(scrollYProgress, [0.8, 0.9], [0, 130]);
    return ( 
        <motion.img style={{translateX}} src="/project5.jpg"></motion.img>
     );
}
 
export default Img5;
