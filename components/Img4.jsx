import { motion, useViewportScroll, useTransform } from "framer-motion";

const Img4 = () => {
    const { scrollYProgress } = useViewportScroll()
    const translateY = useTransform(scrollYProgress, [0.8, 0.9], [0,-280]);
    return ( 
        <motion.img style={{translateY}} src="/project4.jpg"></motion.img>
     );
}
 
export default Img4;
