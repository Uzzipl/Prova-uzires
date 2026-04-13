import { SwaggerView } from "@/components/swagger-view";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4">
        <div className="rounded-2xl bg-slate-900 px-6 py-5 text-white shadow-lg">
          <h1 className="text-3xl font-semibold">API Locadora</h1>
          <p className="mt-2 text-sm text-slate-200">
            Documentacao interativa para testar os endpoints de filmes.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <SwaggerView />
        </div>
      </div>
    </main>
  );
}
