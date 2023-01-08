import {memo, useEffect, useState} from "react"
import Link from "next/link";
import styles from "../../styles/components/MainInfo.module.scss";

const MainInfo = ({additionalStyles}: any) => {
  const [animate, setAnimate] = useState();
  useEffect(() => {
    if (additionalStyles) {
      setTimeout(() => {
        setAnimate(additionalStyles);
      });
    }
  }, [additionalStyles])
  return (
    <div className={`text-center text-white p-5 ${styles.info} ${animate || ''}`}>
      <h1 className="text-6xl font-bold mb-5">All your finances in one place.</h1>
      <p className="mb-10 text-2xs font-light text-gray-400">
        Find out how our team of highly qualified financial consultants can help <br /> you achieve your financial goals.
      </p>
      <Link href="/dashboard" className="border rounded border-white bg-transparent px-10 py-2">View Dashboard</Link>
    </div>
  );
}

export default memo(MainInfo);
