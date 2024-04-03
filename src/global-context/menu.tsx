'use client';

import { createContext, useState, type PropsWithChildren } from 'react';

type MenuContextType = {
  openedMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const MenuContext = createContext({} as MenuContextType);

export const MenuProvider = ({ children }: PropsWithChildren) => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <MenuContext.Provider value={{ openedMenu: showMenu, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
