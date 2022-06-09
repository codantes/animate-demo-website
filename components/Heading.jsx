import styles from '../styles/Home.module.css';
import {motion, useViewportScroll, useTransform} from 'framer-motion';

const Heading = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 0.6], [10, 2]);

    return ( 
        <motion.h1
        style={{scale}}
        className={styles.heading}
        >Aerate</motion.h1>
     );
}
 
export default Heading;