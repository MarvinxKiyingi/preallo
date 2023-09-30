import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { cert } from 'firebase-admin/app';
import { Adapter } from 'next-auth/adapters';
import { createOrUpdateYears } from '../../../utils/functions/collection/years';
import { currentYear } from '../../../utils/functions/currentYear';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
      clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL as string,
      privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
    }),
  }) as Adapter,

  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,

  events: {
    signIn: ({ user, isNewUser: newUser }) => {
      const userId = user?.id;
      const isNewUser = newUser ? true : false;

      if (userId && isNewUser) {
        return createOrUpdateYears(userId, currentYear(), isNewUser);
      } else {
        return createOrUpdateYears(userId, currentYear());
      }
    },
  },
  callbacks: {
    async session({ session, user }) {
      // Attach the user ID to the session object
      session.userId = user.id;
      return session;
    },
  },
});
