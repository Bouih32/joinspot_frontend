import AuthWrapper from "@/components/authUi/AuthWrapper";
import MainTitle from "@/components/authUi/MainTitle";
import FirstStep from "@/components/authUi/steps/FirstStep";
import SubTitle from "@/components/authUi/SubTitle";

export default function Signup() {
  return (
    <AuthWrapper signup>
      <div className="text-center font-poppins">
        <MainTitle>Sign Up</MainTitle>
        <SubTitle>Sign up today and be part of something amazing!</SubTitle>
      </div>
      <FirstStep />
    </AuthWrapper>
  );
}
