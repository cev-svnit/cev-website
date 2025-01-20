export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <section className="relative w-full h-[33.333vh] md:h-screen md:w-1/3 bg-gray-900">
        <video
          className="w-full h-full object-cover aspect-[9/16]"
          autoPlay
          muted
          loop
          playsInline>
          <source src="/videos/design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-vindey cursor-default text-beige">
            Design
          </h2>
        </div>
      </section>

      <section className="relative w-full h-[33.333vh] md:h-screen md:w-1/3 bg-gray-900">
        <video
          className="w-full h-full object-cover aspect-[9/16]"
          autoPlay
          muted
          loop
          playsInline>
          <source src="/videos/tech.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-vindey cursor-default text-beige">
            Technology
          </h2>
        </div>
      </section>

      <section className="relative w-full h-[33.333vh] md:h-screen md:w-1/3 bg-gray-900">
        <video
          className="w-full h-full object-cover aspect-[9/16]"
          autoPlay
          muted
          loop
          playsInline>
          <source src="/videos/finance.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-vindey cursor-default text-beige">
            Finance
          </h2>
        </div>
      </section>
    </div>
  );
}
