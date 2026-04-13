type Filme = {
  id: number;
  titulo: string;
  genero: string;
  ano: number;
  disponivel: boolean;
};

let filmes: Filme[] = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficcao Cientifica",
    ano: 2014,
    disponivel: true,
  },
  {
    id: 2,
    titulo: "Parasita",
    genero: "Drama",
    ano: 2019,
    disponivel: true,
  },
  {
    id: 3,
    titulo: "Cidade de Deus",
    genero: "Crime",
    ano: 2002,
    disponivel: false,
  },
];

export async function GET() {
  return Response.json(filmes);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Filme>;

  if (!body.titulo || !body.genero || typeof body.ano !== "number") {
    return Response.json(
      { erro: "Informe titulo, genero e ano." },
      { status: 400 }
    );
  }

  const novoFilme: Filme = {
    id: filmes.length > 0 ? Math.max(...filmes.map((filme) => filme.id)) + 1 : 1,
    titulo: body.titulo,
    genero: body.genero,
    ano: body.ano,
    disponivel: body.disponivel ?? true,
  };

  filmes.push(novoFilme);

  return Response.json(novoFilme, { status: 201 });
}

export async function PUT(request: Request) {
  const body = (await request.json()) as Partial<Filme>;

  if (typeof body.id !== "number") {
    return Response.json({ erro: "Informe o id do filme." }, { status: 400 });
  }

  const index = filmes.findIndex((filme) => filme.id === body.id);

  if (index === -1) {
    return Response.json({ erro: "Filme nao encontrado." }, { status: 404 });
  }

  filmes[index] = {
    ...filmes[index],
    ...body,
    id: filmes[index].id,
  };

  return Response.json(filmes[index]);
}

export async function DELETE(request: Request) {
  const body = (await request.json()) as Partial<Filme>;

  if (typeof body.id !== "number") {
    return Response.json({ erro: "Informe o id do filme." }, { status: 400 });
  }

  const filme = filmes.find((item) => item.id === body.id);

  if (!filme) {
    return Response.json({ erro: "Filme nao encontrado." }, { status: 404 });
  }

  filmes = filmes.filter((item) => item.id !== body.id);

  return Response.json({ mensagem: "Filme removido com sucesso." });
}
