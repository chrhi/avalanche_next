import Cookies from 'js-cookie'
export const getCookie = (name:string) =>{

    const cookie  = Cookies.get(name)
    return cookie

}

export const getAuthCookie = () =>{
    const token:string | undefined = Cookies.get('jwt-token')

    return token
}