import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { cert } from 'firebase-admin/app';
import { Adapter } from 'next-auth/adapters';
import { createOrUpdateYears } from '../../../utils/functions/collection/years';
import { currentYear, isNewYear } from '../../../utils/functions/currentYear';
import { createOrUpdateGoal } from '../../../utils/functions/collection/createOrUpdateGoal';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
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
    signIn: async ({ user, isNewUser: newUser }) => {
      const userId = user?.id;
      // eslint-disable-next-line no-unused-vars
      const isNewUser = newUser ? true : false;

      if (userId) {
        // Always try to create or update user-specific documents at sign-in
        await createOrUpdateYears(userId, currentYear(), isNewYear);
        if (isNewUser) {
          await createOrUpdateGoal(userId, 50, 30, 20);
        } else {
          await createOrUpdateGoal(userId);
        }

        if (isNewYear) {
          await createOrUpdateYears(userId, currentYear(), isNewYear);
        }
      }
    },
  },

  callbacks: {
    async session({ session, user }) {
      const userId = user.id;
      session.userId = userId;

      // Ensure document creation on session initialization (e.g., on reload or returning user)
      await createOrUpdateYears(userId, currentYear());

      if (isNewYear) {
        await createOrUpdateYears(userId, currentYear(), isNewYear);
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
