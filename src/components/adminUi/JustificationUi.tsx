import Image from "next/image";

type JustificationUiProps = {
  justification: string;
  justificationPic: string;
};

export default function JustificationUi({
  justificationPic,
  justification,
}: JustificationUiProps) {
  return (
    <div className="flex flex-col gap-[25px] tablet:flex-row">
      <div className="flex flex-col space-y-[6px] tablet:min-w-[204px] laptop:min-w-[157px]">
        <h3 className="text-10lg text-neutralActive">Justification Image</h3>

        <Image
          src={justificationPic}
          alt="verification image"
          height={92}
          width={204}
          className="h-[92px] w-full rounded-[6px] object-cover tablet:w-[204px] laptop:w-[157px]"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-10lg text-neutralActive">Description</h3>
        <p className="text-12sm text-darker">{justification}</p>
      </div>
    </div>
  );
}
