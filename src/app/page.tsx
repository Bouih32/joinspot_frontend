import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="grid place-content-center space-y-3">
      <Button icon>Button</Button>
      <Button secondary>Button</Button>
      <Button variant>Button</Button>
      <Button disabled>Button</Button>
      <Button disabled secondary>
        Button
      </Button>
      <Button disabled variant>
        Button
      </Button>
      <Button disabled variant secondary>
        Button
      </Button>
    </div>
  );
}
