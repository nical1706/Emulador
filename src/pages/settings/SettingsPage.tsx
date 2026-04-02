import { FolderOpen, Gamepad2, MonitorSmartphone, RotateCcw, Save, SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";

type FieldRowProps = {
  id: string;
  title: string;
  description: string;
  control: ReactNode;
};

function FieldRow({ id, title, description, control }: FieldRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-800 px-3 py-2">
      <label htmlFor={id} className="min-w-0 space-y-0.5">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-slate-400">{description}</p>
      </label>

      <div className="shrink-0">{control}</div>
    </div>
  );
}

export function SettingsPage() {
  return (
    <div className="flex w-full flex-col gap-4">
      <section className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
              Ajustes
            </p>
            <h1 className="text-2xl font-bold text-white">
              Configura la interfaz y el comportamiento del emulador
            </h1>
            <p className="max-w-2xl text-slate-400">
              Mantén el acceso rápido a las opciones más usadas sin perder la
              lectura limpia de la pantalla.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-3 py-1.5 text-sm font-semibold text-sky-100">
            <SlidersHorizontal size={16} />
            Perfil local
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
          <div className="flex items-center gap-2">
            <MonitorSmartphone className="text-slate-400" size={18} />
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Interfaz
              </p>
              <h2 className="text-lg font-semibold text-white">Apariencia</h2>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <FieldRow
              id="compact-mode"
              title="Modo compacto"
              description="Reduce márgenes y prioriza la navegación con mando."
              control={
                <input
                  id="compact-mode"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-amber-400"
                />
              }
            />
            <FieldRow
              id="ui-scale"
              title="Escala de UI"
              description="Ajusta el tamaño general de los paneles."
              control={
                <select
                  id="ui-scale"
                  defaultValue="normal"
                  className="rounded-full border border-slate-700 bg-slate-700 px-3 py-1.5 text-sm font-semibold text-sky-100 outline-none focus:border-amber-400"
                >
                  <option value="compact">Compacta</option>
                  <option value="normal">Normal</option>
                  <option value="wide">Amplia</option>
                </select>
              }
            />
            <FieldRow
              id="soft-animations"
              title="Animaciones suaves"
              description="Conserva transiciones discretas en foco y navegación."
              control={
                <input
                  id="soft-animations"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-amber-400"
                />
              }
            />
          </div>
        </article>

        <article className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-slate-400" size={18} />
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Mandos
              </p>
              <h2 className="text-lg font-semibold text-white">Entrada</h2>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <FieldRow
              id="rumble"
              title="Vibración"
              description="Activa la respuesta háptica en juegos compatibles."
              control={
                <input
                  id="rumble"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-amber-400"
                />
              }
            />
            <FieldRow
              id="controller-nav"
              title="Navegación por mando"
              description="Permite moverse por la interfaz sin tocar teclado."
              control={
                <input
                  id="controller-nav"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-amber-400"
                />
              }
            />
            <FieldRow
              id="dead-zone"
              title="Zona muerta"
              description="Suaviza pequeñas variaciones de los sticks analógicos."
              control={
                <select
                  id="dead-zone"
                  defaultValue="12"
                  className="rounded-full border border-slate-700 bg-slate-700 px-3 py-1.5 text-sm font-semibold text-sky-100 outline-none focus:border-amber-400"
                >
                  <option value="8">8%</option>
                  <option value="12">12%</option>
                  <option value="16">16%</option>
                </select>
              }
            />
          </div>
        </article>

        <article className="rounded-2xl border-2 border-slate-800 bg-slate-900 p-4">
          <div className="flex items-center gap-2">
            <FolderOpen className="text-slate-400" size={18} />
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Biblioteca
              </p>
              <h2 className="text-lg font-semibold text-white">Archivos</h2>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <FieldRow
              id="rom-path"
              title="Ruta de ROMs"
              description="Carpeta base donde el sistema busca contenido."
              control={
                <input
                  id="rom-path"
                  type="text"
                  defaultValue="/home/user/roms"
                  className="w-40 rounded-full border border-slate-700 bg-slate-700 px-3 py-1.5 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-amber-400"
                />
              }
            />
            <FieldRow
              id="auto-scan"
              title="Escaneo automático"
              description="Actualiza el catálogo al abrir la aplicación."
              control={
                <input
                  id="auto-scan"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-amber-400"
                />
              }
            />
            <FieldRow
              id="cloud-sync"
              title="Sincronización"
              description="Mantén guardados y ajustes sincronizados."
              control={
                <input
                  id="cloud-sync"
                  type="checkbox"
                  className="h-4 w-4 accent-amber-400"
                />
              }
            />
          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200 outline-offset-4 focus:outline-2 focus:outline-amber-400"
            >
              <RotateCcw size={16} />
              Restablecer
            </button>
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-slate-600 bg-slate-700 px-3 py-2 text-sm font-semibold text-sky-100 outline-offset-4 focus:outline-2 focus:outline-amber-400"
            >
              <Save size={16} />
              Guardar
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}
