import Image from "next/image";
import cursor from "../../../public/cursors/focus.png";
import Link from "next/link";
import { WorksTileProps } from "@/types/types";

const WorksTile = ({ item }: { item: WorksTileProps }) => {
  return (
    <div
      className="w-full flex flex-col gap-4 md:gap-6 text-white group hover:cursor-pointer"
      style={{ cursor: `url(${cursor.src}), auto` }}
    >
      {/* Heading with responsive text size */}
      <div className="text-2xl md:text-3xl lg:text-5xl font-semibold">{item.heading}</div>
      
      {/* Description with responsive text */}
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl">{item.description}</div>
      
      {/* Image container with proper scaling on hover */}
      <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] aspect-square rounded-2xl overflow-hidden">
        <div className="w-full h-full transform group-hover:scale-105 transition-all duration-300">
          <Image
            src={item.src}
            alt={item.heading}
            width={600}
            height={550}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>

      {/* Responsive button container */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
        <Link href={item.link} rel="noopener noreferrer" target="_blank">
          <button className="border-white border-2 md:border-3 font-bold text-sm md:text-lg w-full sm:w-fit px-4 md:px-6 lg:px-8 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </Link>
        
        <Link href={item.deploy} rel="noopener noreferrer" target="_blank">
          <button 
            className={`border-2 md:border-3 font-bold text-sm md:text-lg w-full sm:w-fit px-4 md:px-6 lg:px-8 py-2 rounded-lg transition-all duration-300 flex justify-center items-center
              ${item.deploy === "server down 404" 
                ? "border-red-500 text-red-500 hover:bg-red-500/10" 
                : "border-green-500 text-green-500 hover:bg-green-500/10"}`}
          >
            {item.deploy === "server down 404" ? "Status: Err503" : "Status: Active"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorksTile;
