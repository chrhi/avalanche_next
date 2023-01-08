// middleware.ts
//import jwt from "jsonwebtoken"
import { NextResponse  } from 'next/server'
import type { NextRequest } from 'next/server'


//process.env.AUTH_URL!

// This function can be marked `async` if using `await` inside
export async function middleware( req:NextRequest) {
   const  jwtToken = req.cookies.get('jwt-token')?.value
    if(jwtToken){
   const response = await fetch("./pages/api/JWT" , {
    method: 'GET',
    headers:{
        "Authorization":jwtToken
    }
   } )
   const data = await response.json()

   if(data?.Authorization){
    return NextResponse.next()
   }

  }
  return NextResponse.next()
   
  
}


// export const config = {
//   matcher: '/private/:path*',
 
// }