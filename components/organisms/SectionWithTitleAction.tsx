import { ReactNode } from "react";

import styles from "styles/components/SectionTitle.module.scss";

const SectionWithTitleAction = ({
  title,
  children,
  buttonContent,
}: {
  title: string;
  children: ReactNode;
  buttonContent?: { content: string; is_active: boolean }[];
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <strong>{title}</strong>
        {buttonContent?.length && (
          <div className={styles.buttons}>
            {buttonContent.map(({ content, is_active }, index: number) => (
              <button key={index} className={is_active ? "active" : ""}>
                {content}
              </button>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default SectionWithTitleAction;
