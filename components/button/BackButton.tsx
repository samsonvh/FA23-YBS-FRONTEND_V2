"use client";
import { useRouter } from "next/navigation";

const BackButton = ({ className, children }) => {
  const router = useRouter();
  return (
    <button className={className} onClick={() => router.back()}>
      {children}
    </button>
  );
};

export default BackButton;
