import React, { FormEvent, LegacyRef , useState } from 'react'
import Link from 'next/link'
import {useUser} from "../../global/useUser"

import {login} from "../../api/auth/useauth"

type input = string |undefined

function LogInComponent() {

    const [email , setEmail ] = useState<string>("")

 

    //@ts-ignore
   const setUser = useUser(state => state.setUser)

 

   const [password , setPassword ] = useState<string>("")

    const handleSubmit = (ev:FormEvent) =>{
        ev.preventDefault()
   

        if(!email || !password){
            console.log("Login failed")
            console.log("username or email may be wrong " )
            return
        }
        login(email, password).then(data =>{
            if(data){
            setUser(data)
            }else{
                console.log("Login failed")
            }
            
        })
      

    }




  return (
    
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
            onChange={(ev) => setEmail(ev.target.value)}
            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input  
             onChange={(ev) => setPassword(ev.target.value)}
            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">

                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-red-700 hover:underline dark:text-red-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={handleSubmit}
        >Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link href="/public/signup" className="text-red-700 hover:underline dark:text-red-500">Create account</Link>
        </div>
    </form>
</div>

  )
}

export default LogInComponent