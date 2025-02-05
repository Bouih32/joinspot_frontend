import Button from "@/components/Button";
import Check from "@/components/Check";
import Chip from "@/components/Chip";
import Input from "@/components/Input";
import Radio from "@/components/Radio";
import TextArea from "@/components/TextArea";
import { MdDateRange } from "react-icons/md";

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

      <section className="flexCenter gap-5">
        <div className="space-y-3">
          <Chip icon>Hello</Chip>
          <Chip variant icon>
            Hello
          </Chip>
        </div>
        <div className="space-y-3">
          <Chip secondary icon>
            Hello
          </Chip>
          <Chip variant secondary icon>
            Hello
          </Chip>
        </div>
      </section>

      <section className="space-x-3">
        <Input />
        <Input valid icon={<MdDateRange />} />
        <Input error icon={<MdDateRange />} />
        <Input disabled />
      </section>
    </main>
  );
}
