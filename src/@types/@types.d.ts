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

declare type Repo = {
  id: number;
  name: string;
  avatar: string;
  owner_url: string;
  owner_login: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
  page: string;
  created_at: string;
}
