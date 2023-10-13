import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./home/page";

export const metadata = {
  title: "YBS - Yacht Booking System",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
