import React, { ReactNode } from "react";
import Navbar from "../../components/Navbar";

function layout(){
    return(
        <div className="relative flex h-screen w-full flex-col">
            <Navbar />
            <div className="w-full">layout</div>
        </div>
    )
}

export default layout;