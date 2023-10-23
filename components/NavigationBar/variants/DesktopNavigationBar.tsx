import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import React, { ComponentPropsWithoutRef } from "react";
import navigationBarClasses from "../NavigationBar.module.css";

type DesktopNavigationBarProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
>;

export default function DesktopNavigationBar(props: DesktopNavigationBarProps) {
  return (
    <NavigationMenu {...props} data-testId="desktopNavigationBar">
      <h1>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink>MetaProps</NavigationMenuLink>
        </Link>
      </h1>
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <div className={navigationBarClasses.profile}>
              <Avatar className={navigationBarClasses.avatarFallback}>
                <AvatarImage src="https://unsplash.com/photos/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <p>Mike</p>
            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
