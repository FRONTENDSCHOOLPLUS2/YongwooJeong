import { ReactCsspin } from "react-csspin";

const Spinner = () => {
  return (
    <ReactCsspin
      message={"Loading..."}
      spinStyle={"cp-round"}
      color={"black"}
      opacity={Number("0.7")}
    />
  );
};

export default Spinner;

ReactCsspin;
