"use client"

import { Ubuntu_Mono } from "next/font/google";
import { Comfortaa } from "next/font/google";
const font = Ubuntu_Mono({subsets: ["latin"],weight: ["400","700"]});
const comfortaa = Comfortaa({ subsets: ["greek"]});

import {useEffect, useState} from "react";
import { FaPlus } from "react-icons/fa";
import{ FaAngleDown } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import { FaWindowMinimize } from "react-icons/fa";
import LtrGrid from "./ltrGrid";
import TypeIt from "typeit-react";
import Link from "next/link";

import { RepoData } from "@/constants/repoData";
import { ResumeUrl } from "@/constants/resumeData";

const titlebarButtonClassName =
"size-[24px] sm:size-[30px] bg-slate-500 flex justify-center items-center rounded-[6px] sm:rounded-[9px] transition-all overflow-hidden hover:bg-slate-400 duration-300 shadow"

const Nvim = () => {
    const [fileSize, setFileSize] = useState<string>("000");

    useEffect(() => {
        const interval = setInterval(() => {
            setFileSize((prev) => {
                const num = parseInt(prev) + 1;
                if (num === 247) {
                    clearInterval(interval);
                }
                return num.toString().padStart(3, "0");
            });
        }, 10);

        return () => clearInterval(interval);
    }, []); 

    return (
        <div className={`w-full bg-slate-800 rounded-[8px] sm:rounded-[12px] max-w-[700px] min-h-[100px] p-[2px] sm:p-[4px] h-full ${font.className} font-bold text-[16px] xs:text-[18px] sm:text-[22px] md:text-[26px]`}>
            <div className="flex flex-col justify-between w-full rounded-[8px] sm:rounded-[10px] overflow-hidden h-full">
                {/* Terminal Header */}
                <div className="bg-slate-800 h-fit w-full p-[4px] sm:p-[8px] flex flex-row justify-between items-center">
                    {/* Left buttons */}
                    <div className="flex-1 flex flex-row gap-[2px] sm:gap-[4px]">
                        <button className={titlebarButtonClassName}>
                            <FaPlus size="12px" className="text-slate-700 sm:hidden" />
                            <FaPlus size="15px" className="text-slate-700 hidden sm:block" />
                        </button>
                        <button className={titlebarButtonClassName}>
                            <FaAngleDown size="16px" className="text-slate-700 sm:hidden" />
                            <FaAngleDown size="24px" className="text-slate-700 hidden sm:block" />
                        </button>
                    </div>
                    
                    {/* Terminal title */}
                    <div className="flex-1 flex flex-row justify-center">
                        <div className="text-slate-300 whitespace-nowrap tracking-tighter text-sm sm:text-base md:text-lg">terminal</div>
                    </div>
                    
                    {/* Right buttons */}
                    <div className="flex-1 flex flex-row justify-end">
                        <div className="flex flex-row gap-[2px] sm:gap-[4px]">
                            <button className={titlebarButtonClassName}>
                                <FaWindowMinimize size="10px" className="text-black sm:hidden" />
                                <FaWindowMinimize size="15px" className="text-black hidden sm:block" />
                            </button>
                            <button className={titlebarButtonClassName}>
                                <FiMinimize size="12px" className="text-black sm:hidden" />
                                <FiMinimize size="18px" className="text-black hidden sm:block" />
                            </button>
                            <button className={titlebarButtonClassName}>
                                <FaPlus size="12px" className="text-black rotate-45 sm:hidden" />
                                <FaPlus size="18px" className="text-black rotate-45 hidden sm:block" />
                            </button>
                            
                            <Link href={RepoData.github.url} rel="noopener noreferrer" target="_blank">
                                <button className={`${titlebarButtonClassName} w-[50px] xs:w-[60px] sm:w-[80px] md:w-[108px] text-xs sm:text-sm md:text-base hover:bg-slate-300`}>config</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Terminal Content */}
                <div className="h-full rounded-[6px] sm:rounded-[8px] w-full bg-[#1a1b26] pl-[8px] sm:pl-[24px] p-[4px] sm:p-[8px] text-slate-300 flex flex-row justify-between overflow-x-hidden">
                    {/* Line numbers */}
                    <div className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px]">
                        <div className="text-slate-500">
                            1<br />
                            2<br />
                            3<br />
                            4<br />
                            5<br />
                            6<br />
                            7<br />
                            <div className="md:hidden">
                                <div className="sm:hidden">
                                    8<br />
                                    9<br />
                                    10<br />
                                    11<br />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Terminal text content */}
                    <div className="pl-[4px] sm:pl-[8px] text-slate-200 tracking-tighter w-full text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] overflow-x-hidden">
                        <TypeIt
                            options={{
                                waitUntilVisible: true,
                                cursorChar: "_",
                            }}
                            className="text-yellow-300"
                        ><span>Hello, I am Ajey Awasthi</span><span>&nbsp;</span></TypeIt><br />
                        <span className="break-words">I'm a software developer based in UttarPradesh with years of programming experience and with a diverse portfolio including multiple technologies such as Blockchain</span><br />
                        <span className="break-words">My Track record? 6+ Hackathon Events, 2 wins , Im all about exploring new tech and creating impact.</span><br />
                        <Link href={ResumeUrl} rel="noopener noreferrer" target="_blank">
                        <TypeIt
                            options={{
                                waitUntilVisible: true,
                                startDelay: 2000,
                                cursorChar: "▯",
                            }}
                            className="text-pink-400"
                        >
                            <span className="underline underline-offset-4 cursor-pointer">See my resume ↗</span><span>&nbsp;</span> 
                        </TypeIt>
                        </Link>
                    </div>
                </div>
                
                {/* Status Bar */}
                <div className="bg-[#1f1f23] w-full flex flex-row justify-between text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px]">
                    <div className="flex flex-row gap-[4px] sm:gap-[10px] overflow-hidden">
                        <div className="bg-blue-900 w-[2px] xs:w-[3px] sm:w-[6px] md:w-[8px] h-full" />
                        <div className="text-white flex flex-row items-center font-normal overflow-hidden">
                            <div>
                                <LtrGrid ltrs={["E", "6", "2", "B"]} color="#15803D" />
                            </div>
                            <div className={`font[${comfortaa}] text-blue-800 px-[1px] sm:px-[2px]`}>
                                θ
                            </div>
                            <div className="bg-blue-950 pl-[4px] xs:pl-[6px] sm:pl-[12px] md:pl-[16px]">
                                <LtrGrid ltrs={["F", "4", "8", "A"]} color="#94A3B8" />
                            </div>
                            <div className="bg-blue-950 px-[3px] xs:px-[4px] sm:px-[8px] md:px-[12px] font-bold text-slate-400 truncate">
                                readme.md
                            </div>
                            <div className={`font[${comfortaa}] text-blue-800 px-[1px] sm:px-[2px]`}>
                                ζ 
                            </div>
                            <div className="text-slate-400 font-bold pl-[2px] xs:pl-[3px] sm:pl-[6px] md:pl-[8px] truncate">
                                {fileSize}b
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-end gap-[2px] sm:gap-[6px]">
                        <div className="text-slate-400 text-[12px] sm:text-[14px] md:text-[16px]">top</div>
                        <div className="w-[8px] xs:w-[12px] sm:w-[24px] md:w-[32px] h-1/4 bg-blue-900 mb-[2px] sm:mb-[5px]" />
                    </div>
                </div>
                
                {/* Bottom bar */}
                <div className="w-full h-[10px] xs:h-[15px] sm:h-[20px] md:h-[40px] bg-black" />
            </div>
        </div>
    )
}

export default Nvim;
