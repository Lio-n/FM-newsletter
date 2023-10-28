import FormSignUp from "../components/formSignUp.component";
import ServiceDetails from "../components/serviceDetails.component";
import SignUpIllustration from "../ui/atoms/illustrations/signUp.illustration";
import Title from "../ui/atoms/title.atom";
import Card from "../ui/molecules/card.molecule";

const HomePage = () => {
  return (
    <div className="grid place-content-center lg:h-screen lg:bg-slate-700">
      <Card className="flex flex-col gap-4 lg:gap-16 lg:flex-row-reverse lg:mx-auto lg:p-5 lg:pl-12">
        <div className="lg:w-96">
          <SignUpIllustration />
        </div>

        <div className="mb-9 w-80 lg:w-96 lg:mt-16">
          <Title children={"Stay updated!"} textColor="slate-800" textWeight="bold" className="mb-4 lg:text-5xl" />
          <ServiceDetails />

          <FormSignUp className="mt-9" />
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
