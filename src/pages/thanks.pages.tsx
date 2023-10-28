import { useContext, useEffect } from "react";
import Body from "../ui/atoms/body.atom";
import Button from "../ui/atoms/button.atom";
import CheckSuccessIcon from "../ui/atoms/icons/checkSuccess.icon";
import Phrase from "../ui/atoms/phrase.atom";
import Title from "../ui/atoms/title.atom";
import Card from "../ui/molecules/card.molecule";
import BackgroundTemplate from "../ui/templates/background.template";
import EmailContext from "../contexts/email.context";
import { useNavigate } from "react-router-dom";

const ThanksPage = () => {
  const navigate = useNavigate();
  const { email, setEmail } = useContext(EmailContext);

  useEffect(() => {
    if (!email) navigate("/");
  }, []);

  const handleDismiss = () => {
    setEmail("");
    navigate("/");
  };

  return (
    <BackgroundTemplate>
      <Card className="grid gap-12 pt-36 px-4 lg:gap-8 lg:p-12 w-full max-w-[28rem] min-w-[18rem]">
        <div className="grid gap-4 lg:gap-4">
          <CheckSuccessIcon />
          <Title children={"Thanks for subscribing!"} textColor="slate-800" textWeight="bold" className="lg:text-5xl mt-5" />

          <Body textColor="slate-700">
            <>
              A confirmation email has been sent to <Phrase textWeight="bold" textColor="slate-800" children={email} />. Please open it and click the
              button inside to confirm your subscription.
            </>
          </Body>
        </div>

        <Button onClick={handleDismiss}>Dismiss message</Button>
      </Card>
    </BackgroundTemplate>
  );
};

export default ThanksPage;
