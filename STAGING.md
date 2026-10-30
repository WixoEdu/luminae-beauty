# Flujo de staging

- `main` = sitio publicado (producción). No se hacen cambios directos.
- `staging` = copia de pruebas que ve el cliente (Preview en Vercel).
- Los cambios se hacen en ramas que salen de `staging` y se unen de vuelta a `staging`.
- Cuando el cliente aprueba, se abre un PR de `staging` a `main`.

Fuera de producción (`VERCEL_ENV` distinto de `production`) el sitio envía `noindex`
y el sitemap sale vacío. No se configuran variables de Supabase en Preview: las
reservas y el cuestionario no funcionan en staging.
