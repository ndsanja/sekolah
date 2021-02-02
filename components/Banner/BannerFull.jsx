export default function Banner() {
  return (
    <div className="bg-red-900 py-12">
      <div className="flex space-x-6 items-center justify-center ">
        <h1 className="text-white text-xl">Get Update On New Course</h1>
        <input
          type="text"
          placeholder="Email Addres"
          className="rounded px-3 py-2 placeholder-gray-700"
        />
        <button className="px-4 py-3 border border-white rounded text-white uppercase text-xs focus:outline-none">
          Subscribe
        </button>
      </div>
    </div>
  );
}
