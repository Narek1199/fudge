import styles from "styles/components/CardBox.module.scss";

const CardBox = ({
  title,
  content,
  classes,
}: {
  title: string;
  content: string;
  classes?: string;
}) => (
  <div className={`${styles.main} ${classes}`}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.content}>{content}</p>
  </div>
);

export default CardBox;
