import "./Dashboard.css";

import {

PageContainer,

SectionHeader,

StatCard,

Card,

Loader,

EmptyState

} from "../../components/common";

import {useDashboard} from "../../hooks/useDashboard";

export default function Dashboard(){

const{

summary,

runs,

banks,

exceptions

}=useDashboard();

if(

summary.isLoading||

runs.isLoading||

banks.isLoading||

exceptions.isLoading

){

return<Loader/>;

}

if(

summary.isError

){

return(

<EmptyState

title="Dashboard unavailable"

message="Unable to load dashboard."

/>

);

}

return(

<PageContainer>

<SectionHeader

title="Dashboard"

subtitle="Real-time reconciliation overview."

/>

<div className="stats">

<StatCard

title="Files"

value={summary.data?.totalFiles??0}

/>

<StatCard

title="Transactions"

value={summary.data?.totalTransactions??0}

/>

<StatCard

title="Matched"

value={summary.data?.matchedTransactions??0}

/>

<StatCard

title="Exceptions"

value={summary.data?.exceptionTransactions??0}

/>

</div>

<div className="grid2">

<Card>

<h3>

Recent Reconciliation Runs

</h3>

<table className="dashboardTable">

<thead>

<tr>

<th>Status</th>

<th>Matched</th>

<th>Exceptions</th>

</tr>

</thead>

<tbody>

{

runs.data?.map(run=>(

<tr key={run.id}>

<td>{run.status}</td>

<td>{run.matched}</td>

<td>{run.exceptions}</td>

</tr>

))

}

</tbody>

</table>

</Card>

<Card>

<h3>

Banks

</h3>

<table className="dashboardTable">

<thead>

<tr>

<th>Bank</th>

<th>Transactions</th>

</tr>

</thead>

<tbody>

{

banks.data?.map(bank=>(

<tr key={bank.bankName}>

<td>{bank.bankName}</td>

<td>{bank.transactions}</td>

</tr>

))

}

</tbody>

</table>

</Card>

</div>

<Card>

<h3>

Exception Trend

</h3>

<p>

Chart integration (Recharts) will be added in the next script.

</p>

</Card>

</PageContainer>

);

}
