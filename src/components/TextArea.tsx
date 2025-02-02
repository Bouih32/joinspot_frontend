import { cn } from "@/libs/utils";

type TextAreaProps = {
  valid?: boolean;
  error?: boolean;
  disabled?: boolean;
};

export default function TextArea({ valid, error, disabled }: TextAreaProps) {
  return (
    <textarea
      disabled={disabled}
      className={cn(
        "resize-none rounded border border-neutralHover px-3 py-2 text-16sm text-darker outline-none placeholder:text-neutralHover disabled:pointer-events-none disabled:bg-neutralLight",
        valid && "border-success text-darker",
        error && "border-error text-error placeholder:text-error",
      )}
      placeholder="Placeholder"
    ></textarea>
  );
}
