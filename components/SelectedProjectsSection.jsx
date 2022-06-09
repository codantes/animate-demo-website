import styles from '../styles/Home.module.css';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Img1 from './Img1';
import Img2 from './Img2';
import Img3 from './Img3';
import Img4 from './Img4';
import Img5 from './Img5';

const SelectedProjectsSection = () => {
    const { scrollYProgress } = useViewportScroll()

    const opacity = useTransform(scrollYProgress, [0.7, 0.72], [0, 1]);

    return ( 
        <motion.section 
        className={styles.selectedProjects}
        style={{opacity}}
        >
            <motion.h1>Selected Projects</motion.h1>
            <Img1 />
            <Img2 />
            <Img3 />
            <Img4 />
            <Img5 />
        </motion.section>
     );

}
 
export default SelectedProjectsSection;