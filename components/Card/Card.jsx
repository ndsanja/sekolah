export default function Card() {
  return (
    <div className="w-4/12 rounded-lg shadow-lg overflow-hidden">
      <div className="h-52 bg-green-500"></div>
      <div className="space-y-6 p-6 bg-white">
        <h4>Subtite</h4>
        <h1>Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ea dolores
          error magni labore tenetur tempora beatae veniam consequatur corrupti?
        </p>
        <div className="flex items-center justify-between">
          <div>Harga</div>
          <div>Durasi</div>
          <div>Waktu Nulai</div>
        </div>
      </div>
    </div>
  );
}
