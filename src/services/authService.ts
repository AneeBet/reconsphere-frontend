import api from "../api/client";

import {

LoginRequest,

LoginResponse,

CurrentUser

} from "../types/auth";

export async function login(

request:LoginRequest

){

const response=

await api.post<LoginResponse>(

"/auth/login",

request

);

return response.data;

}

export async function me(){

const response=

await api.get<CurrentUser>(

"/auth/me"

);

return response.data;

}
