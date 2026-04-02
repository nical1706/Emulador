import { NavLink } from "react-router";
import { navigationItems } from "../app/navigation";

function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex w-full flex-1 basis-0 min-w-0 flex-col items-center justify-center p-2 rounded-2xl border-2 border-slate-800",
      "focus:outline-2 focus:outline-amber-400 focus:-outline-offset-2 focus:bg-slate-800", 
      isActive ? "bg-radial-[at_00%_00%] from-slate-700 to-slate-800" : "",
    ].join(" ");

  return (
    <div className="flex h-full aspect-1/3 min-w-0 flex-col gap-4 rounded-2xl border-2 border-slate-800 bg-slate-900 p-2">
      {navigationItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          aria-label={item.title}
          className={linkClass}
        >
          <div className="flex flex-1 items-center justify-center text-sky-100 drop-shadow-lg">
            {item.icon}
          </div>
          <p className="text-md text-center font-semibold tracking-wide text-sky-100">
            {item.label}
          </p>
        </NavLink>
      ))}
    </div>
  );
}

export { Sidebar };