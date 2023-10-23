"use client";

import React from "react";
import navigationBarClasses from "./NavigationBar.module.css";
import DesktopNavigationBar from "@/components/NavigationBar/variants/DesktopNavigationBar";
import MobileNavigationBar from "@/components/NavigationBar/variants/MobileNavigationBar";

export default function NavigationBar() {
  return (
    <header className={navigationBarClasses.container}>
      <DesktopNavigationBar className="hidden md:flex" />
      <MobileNavigationBar className="flex md:hidden" />
    </header>
  );
}
