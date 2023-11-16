import { data } from "autoprefixer";
import { testimonials } from "../../data/testimonials";

function TestimonialCard() {
  return (
    <>
      {testimonials.map((data) => (
        <div className="flex flex-col p-6 place-content-center w-72 h-40 bg-gray-50 rounded-lg" key={data.id}>
          <p className="text-gray-600 text-xs mb-2">{data.testimony}</p>
          <p className="text-yellow-500 text-sm font-semibold">{data.name}</p>
          <p className="text-sm font-semibold">{data.company}</p>
        </div>
      ))}
    </>
  );
}

export default TestimonialCard;
