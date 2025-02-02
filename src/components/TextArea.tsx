import { cn } from "@/libs/utils";

type TextAreaProps = {
  valid?: boolean;
  error?: boolean;
  disabled?: boolean;
};

export default function TextArea({ valid, error, disabled }: TextAreaProps) {
  return (
    <textarea
      className={cn(
        "text-16sm border-neutralHover text-neutralHover rounded border px-3 py-2 outline-none",
        valid && "border-success text-darker",
        error && "border-error text-error",
        disabled && "bg-neutralLight pointer-events-none",
      )}
      placeholder="Placeholder"
    ></textarea>
  );
}
