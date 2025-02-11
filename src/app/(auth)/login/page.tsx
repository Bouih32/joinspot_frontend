import AuthWrapper from "@/components/authUi/AuthWrapper";
import LoginForm from "@/components/authUi/LoginForm";
import MainTitle from "@/components/authUi/MainTitle";
import SubTitle from "@/components/authUi/SubTitle";
import Container from "@/components/Container";

export default function Login() {
  return (
    <AuthWrapper classname="tablet:bg-loginBg bg-loginBgMobile bg-cover bg-bottom tablet:bg-center  bg-no-repeat">
      <div className="text-center font-poppins">
        <MainTitle>Login</MainTitle>
        <SubTitle>Login whit your account</SubTitle>
      </div>
      <Container classname="laptop:w-fit tablet:w-fit">
        <LoginForm />
      </Container>
    </AuthWrapper>
  );
}
