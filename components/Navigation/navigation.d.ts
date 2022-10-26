interface NavigationProps {
  navItems: Array<{ href: string; id: number; label: string; }>;
}

interface MobileNavProps {
  isOpen: boolean;
  navItems: Array<{ href: string; id: number; label: string; }>;
  handleHamburgerClick: () => void;
}

interface DesktopNavProps {
  navItems: Array<{ href: string; id: number; label: string; }>;
}