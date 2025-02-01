import React from "react";

declare module "components/fluid-menu" {
  interface MenuProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: "left" | "right";
    showChevron?: boolean;
  }

  interface MenuItemProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    isActive?: boolean;
  }

  export const Menu: React.FC<MenuProps>;
  export const MenuItem: React.FC<MenuItemProps>;
  export const MenuContainer: React.FC<{ children: React.ReactNode }>;
}
