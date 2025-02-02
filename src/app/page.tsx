import Button from "@/components/Button";
import Check from "@/components/Check";
import Radio from "@/components/Radio";
import TextArea from "@/components/TextArea";

export default function Home() {
  return (
    <main className="grid place-content-center space-y-5 border-neutralHover text-neutralHover">
      <section className="flexCenter gap-5">
        <div className="space-y-3">
          <Button>Hello</Button>
          <Button variant>Hello</Button>
          <Button disabled>Hello</Button>
        </div>
        <div className="space-y-3">
          <Button secondary>Hello</Button>
          <Button variant secondary>
            Hello
          </Button>
          <Button disabled secondary>
            Hello
          </Button>
        </div>
      </section>
      <section className="space-x-3">
        <TextArea />
        <TextArea valid />
        <TextArea error />
        <TextArea disabled />
      </section>
      <section className="flex gap-5">
        <Check id="1" />
        <Check disabled id="2" />
        <Check error id="3" />
      </section>

      <section className="flex gap-5">
        <Radio id="4" />
        <Radio disabled id="5" />
        <Radio error id="6" />
      </section>
    </main>
  );
}
