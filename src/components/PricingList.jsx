
import { check, dash } from "../assets"; // Ensure the dash symbol is imported for unavailable features
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap justify-center">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center w-[19rem] max-lg:w-full h-full px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <ul className="flex flex-col items-start w-full">
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 py-3 border-t border-n-6 w-full"
              >
                <img src={feature.available ? check : dash} width={24} height={24} alt={feature.available ? "Check" : "Dash"} />
                <span className="ml-4">{feature.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
