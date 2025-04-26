import { addComment } from "@/actions/postActions";
import { cn } from "@/libs/utils";
import { commentValidation } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { z } from "zod";

type commentT = z.infer<typeof commentValidation>;
export default function CommentForm({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<commentT>({
    resolver: zodResolver(commentValidation),
  });

  const handleSubmit = async () => {
    const resault = await trigger();

    if (!resault) return;
    const formData = getValues();
    setLoading(true);
    await addComment(formData, postId);
    setLoading(false);
    router.refresh();
  };

  const error = errors.content?.message;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={cn(
        "flexBetween gap-2 border-b border-secondLight pb-[14px] pl-2 text-second",
        error && "border-error",
      )}
    >
      <input
        {...register("content")}
        type="text"
        placeholder={error ?? "Join the conversation..."}
        className={cn(
          "w-full border-none outline-none placeholder:text-second",
          error && "placeholder:text-error",
        )}
      />

      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <button>
          <MdSend className="hover:text-main" />
        </button>
      )}
    </form>
  );
}
