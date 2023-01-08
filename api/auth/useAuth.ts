import type {User} from "../../model/index"

const BASE_URL : string ="http://localhost:4000/" as const 

export const registerUser = async  (user :User) =>{

    const response = await fetch(`${BASE_URL}users` , {
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(user)
    })
    const data = await response.json()

    return data
}

export const login = async (password:string , email :string) =>{

    const userParam ={
        email ,
        password 
        
    }

    const response = await fetch(`${BASE_URL}auth` , {
        method:"POST",
        credentials: 'include', // Don't forget to specify this if you need cookies
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(userParam)
    })
    const data = await response.json()

    console.log("here from the login function ")
    console.log(data)
    return data


}