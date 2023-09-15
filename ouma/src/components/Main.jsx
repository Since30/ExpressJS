import React from "react";
import Image from "next/image";
import Baniere from "../../public/Baniere.png";


const Main = () => {
    return (
        <main className="max-w-[1600px]  items-center justify-center mx-auto px-32 py-32">
            <Image className="hover:scale-105 ease-in duration-300" src={Baniere} alt="photo" />
            <a href="#donate">
            <button className="w-full bg-[#37357d] text-white  px-4 py-2 rounded-lg mt-8 hover:scale-105 ease-in duration-300">Faire un don</button>
            </a>
        </main>
    );
    
    };

export default Main;