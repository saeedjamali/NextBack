import { NextResponse } from "next/server";


export function middleware(request) {

    if (request.nextUrl.pathname.startsWith("/users")) {
       return  NextResponse.next()
    } if (request.nextUrl.pathname.startsWith("/courses")) {
        console.log("Request:", request.url)
        return NextResponse.redirect(new URL("/login", request.url))
    }
}