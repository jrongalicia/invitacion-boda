import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");

  // Usuario/clave simples (puedes cambiarlos)
  const user = process.env.ADMIN_USER || "admin";
  const pass = process.env.ADMIN_PASS || "1234";

  const valid = "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");

  if (auth === valid) {
    return NextResponse.next();
  }

  return new NextResponse("Acceso no autorizado", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Panel"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
