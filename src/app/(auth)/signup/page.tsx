import AuthWrapper from "@/components/authUi/AuthWrapper";
import MainTitle from "@/components/authUi/MainTitle";
import FirstStep from "@/components/authUi/steps/FirstStep";
import Container from "@/components/Container";

export default function Signup() {
  return (
    <AuthWrapper
      signup
      classname="tablet:bg-loginBg bg-loginBgMobile bg-cover bg-bottom tablet:bg-center bg-no-repeat"
    >
      <Container classname="laptop:w-fit tablet:w-fit">
        <FirstStep />
      </Container>
    </AuthWrapper>
  );
}
