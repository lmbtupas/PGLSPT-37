/* eslint-disable react/jsx-key */
'use client';

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"
import React, {useState} from "react";
import list from "../dropdown_list.json"

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col items-center w-[340px]">
            <button onClick={() => setIsOpen((prev) => !prev)} 
            className="bg-white text-blue font-header p-4 w-full flex items-center justify-between text-xl tracking-wide rounded-lg border-4 border-white active:border-blue duration-300">
                Be a Member Now 
                {!isOpen ? (
                    <AiOutlineCaretDown  className="h-8" />
                ) :
                (
                    <AiOutlineCaretUp  className="h-8" />   
                )}
                </button>

                {isOpen && (
                <div className="bg-white absolute translate-y-20 flex flex-col items-start rounded-lg p-2 w-[340px]">
                    {list.map((item, i) =>(
                        <div className="font-body text-blue text-lg flex w-full justify-between hover:bg-yellow/20 cursor-pointer rounded-lg p-2" key={i}>
                            <h3> {item.year} </h3>
                        </div>
                    ))}
                    
                </div>
                )}
        </div>
    )
}

export default DropDown