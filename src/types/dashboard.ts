export interface DashboardSummary{

totalFiles:number;

totalTransactions:number;

matchedTransactions:number;

exceptionTransactions:number;

matchingRate:number;

}

export interface BankSummary{

bankName:string;

transactions:number;

matched:number;

exceptions:number;

}

export interface ReconciliationRun{

id:string;

status:string;

matched:number;

exceptions:number;

startedAt:string;

completedAt:string;

}

export interface ExceptionChart{

date:string;

count:number;

}
