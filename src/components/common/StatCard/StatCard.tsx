import "./StatCard.css";

import Card from "../Card/Card";

type Props={

title:string;

value:string|number;

};

export default function StatCard({

title,

value

}:Props){

return(

<Card>

<div className="statTitle">

{title}

</div>

<div className="statValue">

{value}

</div>

</Card>

);

}
