export default function ContactInput() {
  return (
    <div className="flex w-full flex-col gap-3 text-darker">
      <label htmlFor="" className="text-14lg">
        First Name
      </label>
      <input
        type="text"
        placeholder="hello"
        className="rounded-none border-b border-darker bg-transparent pb-[11px] text-14lg outline-none"
      />
    </div>
  );
}
