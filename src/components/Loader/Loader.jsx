import { ThreeCircles } from "react-loader-spinner";
import s from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={s.box}>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
