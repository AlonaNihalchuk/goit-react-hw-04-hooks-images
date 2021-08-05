import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div class={styles.spinner}>
      <div class="hollow-dots-spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  );
};
export default Loader;
