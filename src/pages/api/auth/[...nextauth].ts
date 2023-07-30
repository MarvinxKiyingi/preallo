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
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],

  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL!,
      privateKey: process.env.PRIVATE_KEY!.replace(/\\n/g, '\n'),
    }),
  }) as Adapter,

  secret: process.env.NEXTAUTH_SECRET,

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
