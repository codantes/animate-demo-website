import styles from '../styles/Home.module.css';
import ZoomOutSection from '../components/ZoomOutSection';
import ScaleDownTextSection from '../components/ScaleDownTextSection';
import SelectedProjectsSection from '../components/SelectedProjectsSection';
import {motion, useViewportScroll, useTransform} from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.5], [3, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  
  return (
    <main className={styles.main}>
      <ZoomOutSection />
      <ScaleDownTextSection />
      <SelectedProjectsSection />
    </main>
  )
}
