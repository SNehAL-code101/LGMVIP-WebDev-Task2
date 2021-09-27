import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderComp = () => {
  return (
    <div className="App">
      <Loader
        type="BallTriangle"
        color="black"
        height={180}
        width={180}
        timeout={5000}
      />
    </div>
  );
};
export default LoaderComp;
