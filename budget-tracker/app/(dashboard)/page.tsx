import React, {ReactNode} from "react";

function page({children}:{children: ReactNode}){
    return(
        <div className="relative flex h-screen w-full flex-col">
            <div className="w-full">{children}</div>
        </div>
    )
}

export default page;