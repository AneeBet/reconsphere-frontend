import "./DataTable.css";

import {ReactNode} from "react";

export default function DataTable({

children

}:{

children:ReactNode

}){

return(

<div className="tableWrapper">

{children}

</div>

);

}
