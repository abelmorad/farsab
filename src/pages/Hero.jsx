import heroImg from "../../public/images/hero.jpg";

function Hero() {
  return (
    <section className="flex flex-col h-screen items-center place-content-center hero-img px-4 text-center">
      <h1 className="text-4xl font-bold text-white mb-2 max-w-md">
      Strategic Solutions for Lasting Business <span className="text-yellow-500">Success</span>
      </h1>
      <p className="text-gray-200 text-sm tracking-wide max-w-md mb-8">Your success is our passion, and we're here to make your business dreams a reality</p>
      <div className="flex gap-4">
        <a
          className=" bg-yellow-500 text-white text-lg font-medium tracking-wide rounded-lg px-4 py-2 hover:bg-white hover:text-yellow-500"
          href="#contact"
        >
          Free Consultation
        </a>
        <a
          className="bg-transparent border-2 border-white hover:border-yellow-500 text-white text-lg font-medium tracking-wide rounded-lg px-4 py-2 hover:text-yellow-500"
          href="#services"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
