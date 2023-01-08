// middleware.ts
import jwt from "jsonwebtoken"
import { NextResponse  } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware( req:NextRequest) {
   const  jwtToken = req.cookies.get('jwt-token')?.value

   if (req.nextUrl.pathname.startsWith('/signup')) {
    if(jwtToken){
   const verified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY!);
        if(verified){
            return NextResponse.next()
        }
        return NextResponse.redirect("/")
    }


}
return NextResponse.next()

   
  
}

// See "Matching Paths" below to learn more
// export const config = {
//   //matcher: '/about/:path*',
//     matcher: '/',
// }