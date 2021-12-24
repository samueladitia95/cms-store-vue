export interface Navigation {
  category: string;
  link?: string;
  secondaryLink?: string;
  logo: string;
  children?: NavChild[];
}

interface NavChild {
  label: string;
  link: string;
  secondaryLink?: string;
}
