export default function Frame() {
  return (
    <>
      <div className="Frame hover:cursor-pointer opacity-100 hover:opacity-75 bg-cyan-200 p-2 flex flex-col gap-2 rounded-md">
        <div className="text-center font-semibold text-2xl">Title</div>
        <div className="text-center flex flex-col justify-center items-center h-[80px]">
          Image
        </div>
      </div>
    </>
  );
}
