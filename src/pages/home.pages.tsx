import Body from "../ui/atoms/body.atom";
import Button from "../ui/atoms/button.atom";
import CheckListIcon from "../ui/atoms/icons/checkList.icon";
import CheckSuccessIcon from "../ui/atoms/icons/checkSuccess.icon";
import TextField from "../ui/atoms/textField.atom";
import Title from "../ui/atoms/title.atom";

const HomePage = () => {
  return (
    <div>
      home.pages
      <CheckListIcon></CheckListIcon>
      <CheckSuccessIcon></CheckSuccessIcon>
      <Button>Subscribe to monthly newsletter</Button>
      <TextField name={"email"} label="Email" placeholder="Add your email" />
      <TextField name={"email"} label="Email" placeholder="Add your email" error={{ msg: "Invalid", hasError: true }} />
      <Title textWeight="bold" textColor="slate-700">
        Hello world!
      </Title>
      <Title textWeight="bold" textColor="slate-800">
        Hello world!
      </Title>
      <Title textWeight="bold" textColor="tomato">
        Hello world!
      </Title>
      <Title textWeight="bold" textColor="white">
        Hello world!
      </Title>
      <Title textWeight="normal" textColor="slate-700">
        Hello world!
      </Title>
      <Title textWeight="normal" textColor="slate-800">
        Hello world!
      </Title>
      <Title textWeight="normal" textColor="tomato">
        Hello world!
      </Title>
      <Title textWeight="normal" textColor="white">
        Hello world!
      </Title>
      <Body textWeight="bold" textColor="slate-700">
        Hello world!
      </Body>
      <Body textWeight="bold" textColor="slate-800">
        Hello world!
      </Body>
      <Body textWeight="bold" textColor="tomato">
        Hello world!
      </Body>
      <Body textWeight="bold" textColor="white">
        Hello world!
      </Body>
      <Body textWeight="normal" textColor="slate-700">
        Hello world!
      </Body>
      <Body textWeight="normal" textColor="slate-800">
        Hello world!
      </Body>
      <Body textWeight="normal" textColor="tomato">
        Hello world!
      </Body>
      <Body textWeight="normal" textColor="white">
        Hello world!
      </Body>
      <Body>Hello world!</Body>
    </div>
  );
};

export default HomePage;
