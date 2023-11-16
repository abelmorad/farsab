import TestimonialCard from "../components/Cards/TestimonialCard"


function Testimonials() {
  return (
    <section className="flex flex-col items-center place-content-center px-4 py-24 bg-gray-900">
      <h2 className="text-center text-gray-50 text-4xl mb-14 font-semibold tracking-wide">
        What our clients says
      </h2>
      <section className="flex flex-wrap gap-4 place-content-center max-w-5xl">
        <TestimonialCard />
      </section>
    </section>
  )
}

export default Testimonials