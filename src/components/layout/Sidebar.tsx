import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutGrid, Car, Users, Building2 } from "lucide-react";
import Logo from "./Logo";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  {
    section: "MAIN",
    items: [
      {
        title: "Dashboard",
        icon: LayoutGrid,
        href: "/",
      },
    ],
  },
  {
    section: "ONBOARDING",
    items: [
      {
        title: "Organization",
        icon: Building2,
        href: "/organization",
      },
      {
        title: "Drivers",
        icon: Users,
        href: "/drivers",
      },
      {
        title: "Vehicles",
        icon: Car,
        href: "/vehicles",
      },
    ],
  },
];

const Sidebar = ({ className = "" }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "h-screen w-[240px] bg-white border-r border-gray-100 flex-shrink-0 flex flex-col",
        className,
      )}
    >
      <div className="p-6">
        <Logo />
      </div>

      <nav className="flex-1 px-3 pt-2">
        {navigationItems.map((section) => (
          <div key={section.section} className="space-y-3 mb-6">
            <h3 className="px-3 text-xs font-medium text-gray-500">
              {section.section}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                    )
                  }
                >
                  <item.icon className="h-[18px] w-[18px] stroke-[1.5px]" />
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
