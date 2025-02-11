import AuthWrapper from "@/components/authUi/AuthWrapper";
import LoginForm from "@/components/authUi/LoginForm";
import Container from "@/components/Container";

export default function Login() {
  return (
    <AuthWrapper classname="tablet:bg-loginBg bg-loginBgMobile bg-cover bg-bottom tablet:bg-center  bg-no-repeat">
      <Container classname="laptop:w-fit tablet:w-fit">
        <LoginForm />
      </Container>
    </AuthWrapper>
  );
}
