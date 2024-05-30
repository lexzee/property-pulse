import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks : {
    // Invoked on sucessful login
    async signIn({ profile }) {
      // 1. Connect to database
      // 2. Check if user exists
      // 3. If not then add to database
      // 4. Return true to allow signing
    },

    // Modify session
    async session({ session }){
      // 1. Get user from database
      // 2. Assign userID to sessios
      // 3. Return session
    }
  }
}