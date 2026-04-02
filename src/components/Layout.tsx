import type { ReactNode } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex h-dvh w-dvw gap-4 bg-slate-950 p-4">
      <aside className="h-full shrink-0">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-y-auto h-full">
        {children ?? <Outlet />}
      </main>
    </div>
  );
}

export default Layout;