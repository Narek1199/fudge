import Circle from "react-circle";

import Box from "./Box";

import styles from "styles/components/GoalCard.module.scss";

const GoalCard = ({
  goal,
  title,
  current,
  progress,
}: {
  goal: string;
  title: string;
  current: string;
  progress: number;
}) => {
  return (
    <Box classes={styles.main}>
      <strong>{title}</strong>
      <div className={styles.circle}>
        <Circle
          size="180"
          lineWidth="2"
          animate={true}
          textColor="#000"
          bgColor="#E0E0E0"
          progress={progress}
          progressColor="#74B35A"
        />
      </div>
      <hr />
      <div className={styles.info}>
        <strong>{current}</strong>
        <span>{goal}</span>
      </div>
    </Box>
  );
};

export default GoalCard;
