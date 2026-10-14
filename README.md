## Crear Monorepo vacio

npx create-nx-workspace@latest mf-nx --preset=none --packageManager=pnpm
// Eliminar el none de dependencies y pnpm-workspace

## Plugin de Angular

pnpm add -D @nx/angular

## Instalar el Shell

pnpm exec nx g @nx/angular:host --name=shell --directory=apps/shell --dynamic

## Instalar un Remote

pnpm exec nx g @nx/angular:remote --name=mfeUsers --directory=apps/mfeUsers --host=shell
