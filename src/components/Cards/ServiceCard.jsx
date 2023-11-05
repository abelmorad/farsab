import { services } from "../../data/services";

function ServiceCard() {
  return (
    <>
      {services.map((data) => (
        <div key={data.id} className="flex flex-col p-6 place-content-center w-72 h-40 border border-slate-400 shadow-lg rounded-lg">
          <div className="flex mb-2 items-center gap-2">
            <img className="h-10 w-10" src={data.image} alt={data.title} />
          <h3 className="font-semibold tracking-wide">{data.title}</h3>
          </div>
          <p className="text-xs text-gray-600">{data.description.substring(0,110)}...</p>
        </div>
      ))}
    </>
  );
}

export default ServiceCard;
