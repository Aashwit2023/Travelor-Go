const BASE_URL = "http://localhost:3000/api";

//-------------------------API CALLS------------------//

//-------------------------Signup API------------------//
export const signUpUser = async  ({ firstname, lastname, email, password, cnfmPassword }) => {
    const response = await fetch(`${BASE_URL}/auth/signUp`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({firstname, lastname, email, password, cnfmPassword}),
    });
    const data = await response.json();
    return { response, data };
}


//-------------------------Login API------------------//
export const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({email, password}),
    });
    const data = await response.json();
    return { response, data };
};

//-------------------------Request Callback API------------------//
export const requestCallback = async ({firstName, lastName, email, phone, whatsapp, city, experience, concerns, month, region, specialProgram, treks, call, slots}) => {
    const response = await fetch(`${BASE_URL}/auth/requestCallback`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, phone, whatsapp, city, experience, concerns, month, region, specialProgram, treks, call, slots }),
    });
    const data = await response.json();
    return { response, data };
};