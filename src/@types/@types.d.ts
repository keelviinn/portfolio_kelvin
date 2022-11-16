declare type NavItem = {
  id: string;
  label: string;
  href: string;
  title: string;
}

declare type Experience = {
  id?: number;
  company: {
    name: string;
    url: string;
  };
  role: string;
  period: string;
  responsibilities: string[];
}
