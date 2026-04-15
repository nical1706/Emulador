import { LogOut, User } from "lucide-react";

export function ProfilePage() {
  return (
    <div className="flex w-full flex-col gap-4">
      <section className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
        <div className="space-y-2">
          <p className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
            Perfil
          </p>
          <h1 className="text-2xl font-bold text-white">Gestión de usuario</h1>
          <p className="max-w-2xl text-slate-400">
            Esta sección mostrará y gestionará los datos de la cuenta cuando se
            implemente el sistema de inicio y cierre de sesión.
          </p>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <article className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold text-white">Perfil</h2>

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-4 rounded-xl bg-slate-800 p-3">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-700 text-sky-100">
                <User size={28} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  Nombre del usuario
                </p>
                <p className="text-base font-semibold text-white">Jugador invitado</p>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
          <h2 className="text-lg font-semibold text-white">Sesión</h2>
          <p className="mt-1 text-sm text-slate-400">
            Próximamente integraremos el flujo real de autenticación.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-100 outline-offset-4 focus:outline-2 focus:outline-amber-400"
          >
            <LogOut size={16} />
            Cerrar sesión
          </button>
        </article>
      </section>
    </div>
  );
}