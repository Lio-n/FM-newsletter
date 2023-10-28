import Body from "../atoms/body.atom";
import CheckListIcon from "../atoms/icons/checkList.icon";

interface CheckFeature {
  text: string;
}

const CheckFeature = (props: CheckFeature) => (
  <div className="flex gap-4 items-center">
    <CheckListIcon /> <Body children={props.text} textColor="slate-700" />
  </div>
);

export default CheckFeature;
