# Alvita — landing page

Nova landing page da clínica Alvita (Castanhal, PA), em Next.js (App Router) + Tailwind CSS v4.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, endereço, redes, horários, especialidades, serviços, equipe, galeria | `src/lib/site.ts` |
| Mensagens pré-preenchidas do WhatsApp | `src/lib/whatsapp.ts` |
| Cores da marca (tokens) | `src/app/globals.css` |
| Seções da página | `src/components/*.tsx` |
| Fotos e logo (copiados de alvita.com.br) | `public/img/` |

Cores da marca, extraídas do logotipo: azul `#2354A1`, azul-claro `#5EA6DE`, verde-água `#70B39F`, verde-limão `#A6C136`.

## Como funciona a conversão

Todo botão de agendamento abre `wa.me` com a mensagem já escrita (especialidade ou serviço escolhido). O formulário de contato também envia pelo WhatsApp: não há backend.

## Publicação (GitHub Pages)

Cada push na `main` roda `.github/workflows/pages.yml`, que gera o site estático (`PAGES=true`, pasta `out/`) e publica em https://maiasb.github.io/alvita/.

Para testar o build do Pages localmente: `PAGES=true npm run build`. Em dev e em hospedagem comum (Vercel, VPS) o `basePath` fica vazio.
