import { motion, useViewportScroll, useTransform } from "framer-motion";


const Img1 = () => {
    const { scrollYProgress } = useViewportScroll()
    const translateY = useTransform(scrollYProgress, [0.8, 0.9], [0, -220]);
    
    return ( 
        <motion.img 
        style={{translateY}}
        src="/project1.jpg"></motion.img>
     );
}
 
export default Img1;
