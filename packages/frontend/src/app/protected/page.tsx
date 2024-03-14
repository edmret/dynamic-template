"use client";
import withAuth from "@/lib/withAuth";
import { useSession } from "next-auth/react";

const ProtectedPage: React.FC = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      Protected content
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default withAuth(ProtectedPage);
