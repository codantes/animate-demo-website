import {motion, useViewportScroll, useTransform} from 'framer-motion';
import styles from '../styles/Home.module.css';


const ZoomOutSection = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 0.3], [3, 0.5]);
    
    return ( 
        <section className={styles.zoomInSection}>
        <motion.img 
        className={styles.paris} 
        src='/paris.jpg'
        style={{scale}}
        >

        </motion.img>
      </section>
     );
}
 
export default ZoomOutSection;