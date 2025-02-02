import Button from "@/components/Button";
import TextArea from "@/components/TextArea";

export default function Home() {
  return (
    <div className="border-neutralHover text-neutralHover grid place-content-center space-y-3">
      <TextArea />
      <TextArea valid />
      <TextArea disabled />
      <TextArea error />
    </div>
  );
}
