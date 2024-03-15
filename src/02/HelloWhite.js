import styles from "./HelloWhite.module.css";
import { CiIceCream } from "react-icons/ci";

export default function HelloWhite() {
  return (
    // <h1 className={styles.ch1}>
    //     안녕하세요
    //   </h1>
    <div><CiIceCream className="text-red-500 text-6xl"/></div>
  )
}
