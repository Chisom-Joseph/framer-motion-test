export default ({ message, type }: { message: string; type: string }) => {
  let bgColor = "bg-red-200";
  let borderColor = "border-red-400";

  if (type === "success") {
    bgColor = "bg-green-200";
    borderColor = "border-green-400";
  } else if (type === "warning") {
    bgColor = "bg-yellow-200";
    borderColor = "border-yellow-400";
  } else if (type === "info") {
    bgColor = "bg-blue-200";
    borderColor = "border-blue-400";
  }

  return (
    <p
      className={`max-w-[60em] p-5 m-auto font-bold border-2 rounded cursor-pointer ${bgColor} ${borderColor}`}
    >
      {message}
    </p>
  );
};
