export const openApiSpec = {
  openapi: "3.0.3",
  info: {
    title: "API Locadora",
    version: "1.0.0",
    description: "Documentacao da API de filmes da locadora.",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local",
    },
  ],
  tags: [
    {
      name: "Filmes",
      description: "Operacoes de cadastro e consulta de filmes",
    },
  ],
  paths: {
    "/api/filmes": {
      get: {
        tags: ["Filmes"],
        summary: "Lista todos os filmes",
        responses: {
          "200": {
            description: "Lista retornada com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Filme",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Filmes"],
        summary: "Cadastra um novo filme",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NovoFilme",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Filme criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Filme",
                },
              },
            },
          },
          "400": {
            description: "Dados invalidos",
          },
        },
      },
      put: {
        tags: ["Filmes"],
        summary: "Atualiza um filme existente",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AtualizarFilme",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Filme atualizado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Filme",
                },
              },
            },
          },
          "404": {
            description: "Filme nao encontrado",
          },
        },
      },
      delete: {
        tags: ["Filmes"],
        summary: "Remove um filme pelo id",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["id"],
                properties: {
                  id: {
                    type: "integer",
                    example: 1,
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Filme removido com sucesso",
          },
          "404": {
            description: "Filme nao encontrado",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Filme: {
        type: "object",
        required: ["id", "titulo", "genero", "ano", "disponivel"],
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          titulo: {
            type: "string",
            example: "Interestelar",
          },
          genero: {
            type: "string",
            example: "Ficcao Cientifica",
          },
          ano: {
            type: "integer",
            example: 2014,
          },
          disponivel: {
            type: "boolean",
            example: true,
          },
        },
      },
      NovoFilme: {
        type: "object",
        required: ["titulo", "genero", "ano"],
        properties: {
          titulo: {
            type: "string",
            example: "Matrix",
          },
          genero: {
            type: "string",
            example: "Ficcao",
          },
          ano: {
            type: "integer",
            example: 1999,
          },
          disponivel: {
            type: "boolean",
            example: true,
          },
        },
      },
      AtualizarFilme: {
        type: "object",
        required: ["id"],
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          titulo: {
            type: "string",
            example: "Interestelar Atualizado",
          },
          genero: {
            type: "string",
            example: "Ficcao Cientifica",
          },
          ano: {
            type: "integer",
            example: 2014,
          },
          disponivel: {
            type: "boolean",
            example: true,
          },
        },
      },
    },
  },
} as const;
