import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

const options = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async ({ username, password }: any): Promise<any> => {
        try {
          const response = await axios.post(
            `${
              process.env.PRIVATE_API_URL ?? "http://localhost:3001"
            }/auth/login`,
            {
              username: username,
              password: password,
            }
          );

          if (response.status === 201) {
            // If authentication is successful, return the user object
            return { accessToken: response.data.access_token, username };
          } else {
            // If authentication fails, return null
            return null;
          }
        } catch (error) {
          console.error("Failed to login", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }

      return token;
    },
    async session(session: any, token: any) {
      if (token) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => NextAuth(req, res, options as any);
