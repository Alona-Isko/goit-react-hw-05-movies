import styles from './Container.module.css';

export default function Container({ children }) {
  return <div className={styles.container}>
    <h1 className={styles.title}>Movies</h1>
    {children}
  </div>;
}