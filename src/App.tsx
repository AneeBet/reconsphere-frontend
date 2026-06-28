import{

BrowserRouter,

Routes,

Route

}from"react-router-dom";

import MainLayout from"./layouts/MainLayout";

import ProtectedRoute from"./routes/ProtectedRoute";

import Login from"./pages/auth/Login";

function Dashboard(){

return<h1>Dashboard</h1>;

}

export default function App(){

return(

<BrowserRouter>

<Routes>

<Route

path="/login"

element={<Login/>}

/>

<Route

path="/"

element={

<ProtectedRoute>

<MainLayout/>

</ProtectedRoute>

}

>

<Route

index

element={<Dashboard/>}

/>

</Route>

</Routes>

</BrowserRouter>

);

}
