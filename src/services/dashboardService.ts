import api from "../api/client";

export interface DashboardSummary{

totalFiles:number;

totalTransactions:number;

matchedTransactions:number;

exceptionTransactions:number;

matchingRate:number;

}

export interface ReconciliationRun{

id:string;

startedAt:string;

completedAt:string;

status:string;

matched:number;

exceptions:number;

}

export interface BankSummary{

bankName:string;

transactions:number;

matched:number;

exceptions:number;

}

export interface ExceptionChart{

date:string;

count:number;

}

export const DashboardService={

summary:async()=>(
await api.get<DashboardSummary>(
"/dashboard/summary"
)).data,

runs:async()=>(
await api.get<ReconciliationRun[]>(
"/dashboard/reconciliation-runs"
)).data,

banks:async()=>(
await api.get<BankSummary[]>(
"/dashboard/bank-summary"
)).data,

exceptions:async()=>(
await api.get<ExceptionChart[]>(
"/dashboard/exception-chart"
)).data

};
