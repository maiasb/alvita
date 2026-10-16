/** Prefixa o basePath (GitHub Pages serve o site em /alvita). Vazio em dev e em produção na raiz. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
