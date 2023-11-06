"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };
  const sidebarContent = [
    {
      id: 1,
      icon: "/img/dashboard/sidebar/compass.svg",
      name: "Dashboard",
      routePath: "/admin/dashboard",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/account.png",
      name: " Manage Accounts",
      routePath: "/admin/accounts",
    },
    {
      id: 3,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: "Manage Companies",
      routePath: "/admin/companies",
    },
    {
      id: 4,
      icon: "/img/dashboard/sidebar/users.png",
      name: "Manage Members",
      routePath: "/admin/members",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/sneakers.svg",
      name: "Manage Membership Packages",
      routePath: "/admin/membership-packages",
    },
    {
      id: 6,
      icon: "/img/dashboard/sidebar/log-out.svg",
      name: " Logout",
      routePath: "/login",
      onClick: handleLogout,
    },
  ];
  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${
              isActiveLink(item.routePath, pathname) ? "-is-active" : ""
            } sidebar__button `}
          >
            <Link
              href={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
              onClick={item.onClick}
            >
              <Image
                width={20}
                height={20}
                src={item.icon}
                alt="image"
                className="mr-15"
              />
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
