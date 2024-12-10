type TNavRouteType = {
  id: string;
  label: string;
  path: string;
};

export const navRoutes: TNavRouteType[] = [
  {
    id: "about",
    label: "About",
    path: "#about",
  },
  {
    id: "experience",
    label: "Experience",
    path: "#experience",
  },
  {
    id: "education",
    label: "Education",
    path: "#education",
  },
  {
    id: "project",
    label: "Project",
    path: "#project",
  },
  {
    id: "contact",
    label: "Contact",
    path: "#contact",
  },
];
