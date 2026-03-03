
const imgRectangle91 =
  "http://localhost:3845/assets/0961530aa528dcd3f810f291ab3928efdb05679a.png";
const imgRectangle92 =
  "http://localhost:3845/assets/cc4a41c6b17fb15ea57fa81d357a134fb65db86b.png";
const imgRectangle93 =
  "http://localhost:3845/assets/c52faa9c7d00e7dd09c98d63e3c53d4a4c1cccc9.png";

interface EventCardProps {
  imageSrc: string;
  title: string;
  description: string;
  borderClass: string;
}

function EventCard({ imageSrc, title, description, borderClass }: EventCardProps): JSX.Element {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-[25px] overflow-hidden h-full">
      <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col items-center text-center">
        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-gray-100">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-urbanist font-bold text-[#00215e] text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-4">
          {title}
        </h3>
        <p className="font-urbanist font-normal text-[#858585] text-base md:text-lg leading-relaxed tracking-tight">
          {description}
        </p>
      </div>
      <div className={`w-full h-1.5 ${borderClass}`}></div>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f8ff] px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-center">
        {/* Left Text */}
        <div className="flex flex-col lg:flex-[0.35] w-full text-center lg:text-left items-center lg:items-start">
          <h2 className="font-urbanist font-bold text-[#00215e] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 md:mb-8">
            CThree Event
          </h2>
          <div className="w-32 h-1.5 bg-[#ffaa28] rounded-full mb-6 md:mb-8"></div>
          <p className="font-urbanist font-normal text-[#858585] text-base md:text-lg leading-relaxed tracking-tight max-w-2xl lg:max-w-none">
            Lorem ipsum dolor sit amet consectetur. Tincidunt consectetur in sit
            elementum elit sed. In egestas mauris eget leo ut amet. Non odio in
            purus laoreet sit ut. Habitasse lacus vitae sed mauris.
          </p>
        </div>

        {/* Right Cards */}
        <div className="flex-[0.65] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            imageSrc={imgRectangle91}
            title="Workshop"
            description="Workshop adalah kegiatan komunitas kami untuk belajar bareng secara praktikal."
            borderClass="bg-[#00215e]"
          />
          <EventCard
            imageSrc={imgRectangle92}
            title="Engangement Day"
            description="Workshop adalah kegiatan rutin komunitas kami untuk belajar bareng secara praktikal."
            borderClass="bg-[#ffaa28]"
          />
          <EventCard
            imageSrc={imgRectangle93}
            title="Showcase Day"
            description="Showcase Day adalah momen untuk kami menunjukkan sejauh mana perkembangan proyek yang sedang dikerjakan."
            borderClass="bg-[#ffe028]"
          />
        </div>
      </div>
    </section>
  );
}
