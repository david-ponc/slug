import LinkRoute from "@/styles/ui/linkRoute";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <>
      <div className="border-b-2 border-gray-900 mt-1">
        <div className="container  pl-4 pr-4 md:pl-0 md:pr-0 mx-auto pb-3 flex items-center justify-between">
          <h1 className="text-2xl">Dashboard</h1>
          <LinkRoute href="/dash/create">
            <BiPlus className="mr-2" />
            Create new link
          </LinkRoute>
        </div>
      </div>
      <div className="container mx-auto pl-4 pr-4 md:pl-0 md:pr-0">
        {props.children}
      </div>
    </>
  );
};

export default DashboardLayout;
