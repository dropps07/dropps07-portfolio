import sampleImg from "../../../public/worksampleimg.jpg"
import Image from "next/image";
import cursor from "../../../public/cursors/focus.png";
import Link from "next/link";

import { WorksTileProps } from "@/types/types";

const WorksTile = ({ item }: { item: WorksTileProps }) => {
  return (
    <div
      className={`size-full flex flex-col gap-[24px] text-white group hover:cursor-pointer`}
      style={{ cursor: `url(${cursor.src}), auto` }}
    >
      <div className="text-5xl font-semibold">{item.heading}</div>
      <div className="lg:text-[24px] sm:text-[20px] text-[18px]">{item.description}</div>
      <div
        className="flex justify-center items-center sm:max-w-[300px] sm:max-h-[300px] max-w-[250px] max-h-[250px] size-full overflow-hidden"
      >
        <Image
          src={sampleImg}
          alt="Sample Image"
          className="group-hover:scale-110 transition-all duration-300 -transition-x-[2px]"
        />
      </div>
      <Link href={item.link} rel="noopener noreferrer" target="_blank">
        <button className="border-white border-[3px] font-bold text-[20px] w-fit px-[100px] rounded-[14px]">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default WorksTile;