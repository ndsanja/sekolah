export default function CardDetail(props) {
  return (
    <div
      className={` lg:w-3/12 rounded-lg shadow-xl lg:shadow-2xl overflow-hidden ${
        props.className && props.className
      }`}
    >
      <div className="h-52 bg-green-500"></div>
      <div className=" bg-white divide-y divide-gray-300">
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Duration
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">
            11 weeks long
          </div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Time Commitment
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">
            10-20 hourse per week
          </div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Pace
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">
            Self Pace
          </div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Subject
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">
            Progamming
          </div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Course Language
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">English</div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            VIdeo Transkripy
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">
            Engglish
          </div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Dificult
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">
            Introductory
          </div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Credit
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">
            <div>Audit for free</div>
            <div>Add Verified Certificated for $100</div>
          </div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Platform
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">edX</div>
        </div>
        <div className="flex p-6">
          <div className="w-1/2 text-gray-800 uppercase font-semibold text-xs">
            Topic's
          </div>
          <div className="w-1/2 text-gray-800 font-medium text-xs">edX</div>
        </div>
      </div>
    </div>
  );
}
