import Join from "@/components/sections/about/Join";
import Story from "@/components/sections/about/Story";
import Unique from "@/components/sections/about/Unique";
import Values from "@/components/sections/about/Values";
import Welcome from "@/components/sections/about/Welcome";

export default function AboutPage() {
  return (
    <main className="bg-secondLight">
      <Welcome
        title="Welcome to JoinSpot"
        para="Where Experiences Come to Life!"
      />
      <Story />
      <Unique />
      <Values />
      <Join />
    </main>
  );
}
