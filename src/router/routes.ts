import { lazy } from "react";

// Define route types
export interface RouteConfig {
  path: string;
  component:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.ComponentType<any>;
  exact?: boolean;
  routes?: RouteConfig[];
  label: string;
  showInNav: boolean;
  sectionId: string; // For smooth scrolling to sections
}

// Import pages
// Using React.lazy for code splitting - will be implemented as components are created
const Home = lazy(() => import("../App"));

// For now, all sections will render the Home component
// These will be updated as section components are created
const Education = Home;
const Projects = Home;
const Experience = Home;
const Skills = Home;
const Interests = Home;

// Define routes
const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    exact: true,
    label: "Home",
    showInNav: true,
    sectionId: "hero",
  },
  {
    path: "/education",
    component: Education,
    label: "Education",
    showInNav: true,
    sectionId: "education",
  },
  {
    path: "/projects",
    component: Projects,
    label: "Research Projects",
    showInNav: true,
    sectionId: "projects",
  },
  {
    path: "/experience",
    component: Experience,
    label: "Experience",
    showInNav: true,
    sectionId: "experience",
  },
  {
    path: "/skills",
    component: Skills,
    label: "Skills",
    showInNav: true,
    sectionId: "skills",
  },
  {
    path: "/interests",
    component: Interests,
    label: "Interests",
    showInNav: true,
    sectionId: "interests",
  },
];

export default routes;
