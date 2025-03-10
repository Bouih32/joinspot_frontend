export default function ContactInput() {
  return (
    <div className="flex flex-col gap-3 text-darker">
      <label htmlFor="" className="text-12lg">
        First Name
      </label>
      <input
        type="text"
        placeholder="hello"
        className="border-b border-darker bg-transparent pb-[11px] text-14lg outline-none"
      />
    </div>
  );
}
