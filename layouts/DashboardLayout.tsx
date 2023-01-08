import { ReactElement } from "react";

import TopNavControl from "components/organisms/TopNavControl";
import LeftNavigation from "components/organisms/LeftNavigation";

import styles from "styles/pages/Dashboard.module.scss";
import animatedStyles from "styles/components/Animation.module.scss";

const DashboardLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={`flex h-full w-full ${styles.main}`}>
      <LeftNavigation />
      <div className={`p-5 w-full h-full ${styles.content}`}>
        <div className={animatedStyles.fade_in}>
          <TopNavControl />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
