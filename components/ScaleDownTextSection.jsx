import styles from '../styles/Home.module.css';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import Heading from './Heading';
const ScaleDownTextSection = () => {
    
    const { scrollYProgress } = useViewportScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return ( 
        <motion.section 
        className={styles.textAnimation} 
        style={{opacity}}
        initial={{
          z : -100
        }}
        >
          <motion.div><Heading /></motion.div>
        </motion.section>
     );

}
export default ScaleDownTextSection;