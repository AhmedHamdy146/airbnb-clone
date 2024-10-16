import { NavLink } from "react-router-dom";
import UserIcon from "../ui/UserIcon";
import ListIcon from "../ui/ListIcon";
import BuildingIcon from "../ui/BuildingIcon";
import { style } from "../utils/helper";

const NavLinks = () => {
  return (
    <nav className="w-full flex justify-center gap-2 mt-8 mb-8">
      <NavLink
        className={({ isActive }) => style(isActive)}
        to={"/account"}
        end
      >
        <UserIcon className={"size-5"} />
        My profile
      </NavLink>
      <NavLink
        className={({ isActive }) => style(isActive)}
        to={"/account/bookings"}
      >
        <ListIcon className={"size-5"} />
        My bookings
      </NavLink>
      <NavLink
        className={({ isActive }) => style(isActive)}
        to={"/account/places"}
      >
        <BuildingIcon className="size-5" />
        My accommodations
      </NavLink>
    </nav>
  );
};

export default NavLinks;
