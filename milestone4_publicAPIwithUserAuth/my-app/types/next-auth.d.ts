// types/next-auth.d.ts
import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    username?: string; // Add username
    role?: string;     // Add role
  }

  interface Session {
    user: {
      id: string;       // User ID
      email: string;    // User Email
      username: string; // User Username
      role: string;     // User Role
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    username?: string;
    role?: string;
  }
}
