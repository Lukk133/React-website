import React from "react";
import { ReactTyped } from "react-typed";

function Hero(){

    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex text-center flex-col justify-center">
        <p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
        <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible financing for</p>
            <ReactTyped className="pl-2 md:text-5xl md:pl-4 sm:text-4xl text-xl font-bold" strings={["BTB", "BTC", "SAAS"]} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className="pt-3 md:text-2xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB. BTC, & SAAS</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-lg">Get started</button>
            </div>

        </div>

    );
}

export default Hero