import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
      httpOptions: {
        timeout: 4000,
      },
    }),
    // ...add more providers here
  ],
  debug: false,
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
