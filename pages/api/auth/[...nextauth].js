import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    // ...add more provideers here
    ],
    callbacks:{
        async session({session,token}){
            session.user.tag = session.user.name.split(" ").join("").toLocaleUpperCase();
            session.user.uid = token.sub;
            return session;
        }
    }

})
