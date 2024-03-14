"use client";
import { useSession, signIn } from "next-auth/react";
import { ComponentType, PropsWithChildren } from "react";

export default function withAuth<P>(Component: ComponentType<P>) {
  return function AuthenticatedComponent(props: PropsWithChildren<P>) {
    const { data: session, status } = useSession();

    const loading = status === "loading";

    if (!loading && !session) {
      signIn();
      return null;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}
