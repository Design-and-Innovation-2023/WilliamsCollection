// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const res = NextResponse.next();
    let ip = request.ip ?? request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for')
    if (!ip && forwardedFor) {
        ip = forwardedFor.split(',').at(0) ?? 'Unknown'
    }

    console.log(ip)
    if (ip !== null) {
        var addr = ip.split(':')

        var urladdr = request.url.split('/')
        if (addr[addr.length - 1] === '127.0.0.1' && urladdr[urladdr.length - 1] !== '401') {
            return NextResponse.redirect(new URL('/401', request.url))
        }
    }
    return res;
}