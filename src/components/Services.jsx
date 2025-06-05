import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

const services = [
  { icon: <FaCode size={30} />, title: "Website Development" },
  { icon: <FaMobileAlt size={30} />, title: "App Development" },
  { icon: <FaServer size={30} />, title: "Website Hosting" },
];

const Services = () => {
  return (
    <div className="services flex flex-col gap-10 relative pl-6">
      {/* Vertical line */}
      <div className="verticalLine absolute left-2 top-0 h-full w-[2px] bg-orange-400"></div>

      {services.map((service, index) => (
        <div key={index} className="flex items-center relative">
          {/* Dot */}
          <div className="dot w-3 h-3 rounded-full bg-orange-500 absolute -left-2"></div>
          {/* Icon + Title */}
          <div className="text flex items-center gap-4 text-white">
            <div>{service.icon}</div>
            <div>{service.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
