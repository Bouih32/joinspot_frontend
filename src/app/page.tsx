import Button from "@/components/Button";
import TextArea from "@/components/TextArea";

export default function Home() {
  return (
    <div className="grid place-content-center space-y-3 border-neutralHover text-neutralHover">
      <Button>Hello</Button>
      <Button variant>Hello</Button>
      <Button disabled>Hello</Button>

      <Button secondary>Hello</Button>
      <Button variant secondary>
        Hello
      </Button>
      <Button disabled secondary>
        Hello
      </Button>

      <Button disabled variant secondary>
        Hello
      </Button>
    </div>
  );
}
