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
      routePath: "/company/dashboard",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/canoe.svg",
      name: " Manage Yachts",
      routePath: "/company/yachts",
    },
    {
      id: 3,
      icon: "/img/dashboard/sidebar/hotel.svg",
      name: " Manage Yacht Types",
      routePath: "/company/yacht-types",
    },
    {
      id: 4,
      icon: "/img/dashboard/sidebar/house.svg",
      name: " Manage Docks",
      routePath: "/company/docks",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/map.svg",
      name: "Manage Routes",
      routePath: "/company/routes",
    },
    {
      id: 6,
      icon: "/img/dashboard/sidebar/airplane.svg",
      name: "Manage Trips",
      routePath: "/company/trips",
    },
    {
      id: 7,
      icon: "/img/dashboard/sidebar/sneakers.svg",
      name: "Manage Service Packages",
      routePath: "/company/service-packages",
    },
    {
      id: 8,
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
