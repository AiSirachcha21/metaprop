import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import navigationBarClasses from "../NavigationBar.module.css";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

type MobileNavigationBarProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
>;

export default function MobileNavigationBar(props: MobileNavigationBarProps) {
  return (
    <NavigationMenu {...props} data-testId="mobileNavigationBar">
      <h1>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink>MetaProps</NavigationMenuLink>
        </Link>
      </h1>
      <div className="group relative p-4">
        <span>Menu</span>
        <div
          className={cn(
            "hidden group-hover:block",
            navigationBarClasses.mobileMenu
          )}
        >
          <div className={navigationBarClasses.mobileMenuItem}>
            <Link href="/">Home</Link>
          </div>
          <div
            className={cn(
              navigationBarClasses.mobileMenuItem,
              navigationBarClasses.profile
            )}
          >
            <Avatar className={navigationBarClasses.avatarFallback}>
              <AvatarImage src="https://unsplash.com/photos/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <p>Mike</p>
          </div>
        </div>
      </div>
    </NavigationMenu>
  );
}
