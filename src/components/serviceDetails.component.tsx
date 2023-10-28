import Body from "../ui/atoms/body.atom";
import CheckFeature from "../ui/molecules/checkFeature.molecule";

const Feactures = ["Product discovery and building what matters.", "Measuting to ensure updates are a success.", "An mush more!"];

const ServiceDetails = () => (
  <div>
    <Body textColor="slate-700">Join 60,000+ product managers receiving monthly updates on:</Body>

    <ul className="grid gap-2  mt-5">
      {Feactures.map((i, index) => (
        <li className="list-none" key={index} children={<CheckFeature text={i} />} />
      ))}
    </ul>
  </div>
);

export default ServiceDetails;
