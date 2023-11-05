import ServiceCard from "../components/Cards/ServiceCard";

function Services() {
  return (
    <section className="flex flex-col items-center place-content-center px-4 py-24 bg-slate-50">
      <h2 className="text-4xl mb-2 font-semibold tracking-wide">
        Our Services
      </h2>
      <p className="text-gray-500 mb-14">
        Our commitment to excellence, expertise, and client satisfaction sets us
        apart in the following key service areas
      </p>
      <section className="flex flex-wrap gap-4 place-content-center max-w-5xl">
        <ServiceCard />
      </section>
    </section>
  );
}

export default Services;