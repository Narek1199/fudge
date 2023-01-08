import { ReactElement } from "react";

import DashboardLayout from "layouts/DashboardLayout";
import Box from "components/molecules/Box";
import CardBox from "components/molecules/CardBox";
import GoalCard from "components/molecules/GoalCard";
import PageTitle from "components/molecules/PageTitle";
import DashboardChart from "components/organisms/DashboardChart";
import SectionWithTitleAction from "components/organisms/SectionWithTitleAction";

import styles from "styles/pages/Dashboard.module.scss";
import DashboardInfo from "components/organisms/DashboardInfo";

export default function Dashboard() {
  return (
    <>
      <PageTitle title="Dashboard Home" />
      <div className={styles.section}>
        <SectionWithTitleAction title="Quick Stats">
          <div className={styles.mainBox}>
            <CardBox
              title="£563,350"
              content="Your net worth as of today"
              classes="flex-1"
            />
            <CardBox title="£12,430" content="Monthly Cashflow" />
            <CardBox title="£161,430" content="Overall Liabilities" />
          </div>
        </SectionWithTitleAction>
        <SectionWithTitleAction
          title="My Financial Health"
          buttonContent={[
            { content: "View Financial Health", is_active: true },
          ]}
        >
          <Box classes={styles.financialHealth}>
            <div>
              <div className={styles.line}>
                <span className={styles.range}>
                  88%
                  <span className={styles.dot} />
                </span>
              </div>
              <div className={styles.lineTitle}>
                <p>POOR</p>
                <p>AVERAGE</p>
                <p>GOOD!</p>
              </div>
            </div>
            <hr />
            <div className={styles.info}>
              <p>
                Your financial health status is{" "}
                <span className={styles.good}>GOOD</span>. However there’s still
                room for improvement.{" "}
                <a href="#" className={styles.link}>
                  See how you can improve
                </a>
              </p>
            </div>
          </Box>
        </SectionWithTitleAction>
      </div>
      <div className={styles.section}>
        <SectionWithTitleAction
          title="My Performance"
          buttonContent={[
            { content: "Weekly", is_active: false },
            { content: "Monthly", is_active: true },
            { content: "Yearly", is_active: false },
            { content: "All time", is_active: false },
          ]}
        >
          <DashboardChart />
        </SectionWithTitleAction>
        <SectionWithTitleAction
          title="My Goals"
          buttonContent={[{ content: "View All Goals", is_active: true }]}
        >
          <div className={styles.mainBox}>
            <GoalCard
              progress={65}
              title="Retirement"
              goal="£ 2,000,000"
              current="£ 563,350"
            />
            <GoalCard
              progress={78}
              goal="£ 150,000"
              current="£ 101,342"
              title="Vacation Home"
            />
            <GoalCard
              progress={46}
              title="Travel"
              goal="£ 100,000"
              current="£ 46,350"
            />
          </div>
        </SectionWithTitleAction>
      </div>
      <div className={styles.section}>
        <DashboardInfo />
      </div>
    </>
  );
}

Dashboard.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
