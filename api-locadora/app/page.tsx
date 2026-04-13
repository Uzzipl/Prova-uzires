export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#e2e8f0_0%,#f8fafc_30%,#ffffff_100%)] px-6 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Projeto local
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight">
            API Locadora com CRUD de filmes e documentacao pronta para teste.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Use os links abaixo para abrir a documentacao, ver o JSON OpenAPI
            e testar a rota principal da API.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <a
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            href="/docs"
          >
            <h2 className="text-xl font-semibold text-slate-900">Swagger UI</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Abre a documentacao interativa da API em
              {" "}
              <span className="font-medium text-slate-900">/docs</span>.
            </p>
          </a>

          <a
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            href="/api/openapi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              OpenAPI JSON
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Mostra o contrato bruto da API em
              {" "}
              <span className="font-medium text-slate-900">/api/openapi</span>.
            </p>
          </a>

          <a
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
            href="/api/filmes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Endpoint Filmes
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Consulta direta da rota
              {" "}
              <span className="font-medium text-slate-900">/api/filmes</span>.
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}
