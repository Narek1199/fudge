import React from "react";

import UserItem from "./UserItem";
import CommentItem from "./CommentItem";
import Box from "components/molecules/Box";

import styles from "styles/components/DashboardInfo.module.scss";

const DashboardInfo = () => {
  return (
    <>
      <Box classes={styles.box1}>
        <strong className="mb-11">Industry News</strong>

        <small className="text-xs text-gray-400">21 May 2021</small>
        <strong className="mb-5">
          The standard Lorem Ipsum passage, used since the 1500s
        </strong>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="mb-8">
          Read full article
        </a>
        <small>21 May 2021</small>
        <strong className="mb-5">
          The standard Lorem Ipsum passage, used since the 1500s
        </strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="#">Read full article</a>
      </Box>
      <div className={styles.box2}>
        <Box classes="box">
          <strong className="mb-5">Top Comments</strong>
          <CommentItem />
          <CommentItem />
        </Box>
        <Box classes="box">
          <strong className="mb-5">Users</strong>
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </Box>
      </div>
    </>
  );
};

export default DashboardInfo;
