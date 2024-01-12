import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Character = lazy(() => import("../pages/Character"));
const CharacterPersone = lazy(
  () => import("../pages/Character/CharacterPersone")
);
const Locations = lazy(() => import("../pages/Locations"));
const LocationsItem = lazy(() => import("../pages/Locations/LocationsItem"));

const coreRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
    header: true,
  },
  {
    path: "/characters",
    title: "Character",
    component: Character,
    header: true,
  },
  {
    path: "/characters/:id",
    title: "CharacterPersone",
    component: CharacterPersone,
    header: false,
  },
  {
    path: "/locations",
    title: "Locations",
    component: Locations,
    header: true,
  },
  {
    path: "/locations/:id",
    title: "LocationsItem",
    component: LocationsItem,
    header: false,
  },
];

const routes = [...coreRoutes];
export default routes;
