// middleware.ts
//import jwt from "jsonwebtoken"
import { NextResponse  } from 'next/server'
import type { NextRequest } from 'next/server'
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';





// export async function sign(payload: JWTPayload, secret: string): Promise<string> {
//   const iat = Math.floor(Date.now() / 1000);
//   const exp = iat + 60* 60; // one hour

//   return new SignJWT({...payload})
//       .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
//       .setExpirationTime(exp)
//       .setIssuedAt(iat)
//       .setNotBefore(iat)
//       .sign(new TextEncoder().encode(secret));
// }

async function verify(token: string, secret: string): Promise<JWTPayload> {
  const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
  // run some checks on the returned payload, perhaps you expect some specific values

  // if its all good, return it, or perhaps just return a boolean
  return payload;
}

export default async function middleware(req: NextRequest) {
  const  jwt = req.cookies.get('jwt-token')?.value
 
  const url = req.url;
  const {pathname} = req.nextUrl;

  if (pathname.startsWith("/signup")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, process.env.JWT_SECRET_KEY!);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return NextResponse.next();
}