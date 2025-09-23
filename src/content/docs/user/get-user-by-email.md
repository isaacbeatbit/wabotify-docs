---
title: "Get User By Email"
description: "Obtén la información de un usuario por su correo electrónico. Incluye ejemplo de cURL y respuesta JSON."
---

# Get User By Email

Servicio para obtener información de un usuario filtrado por su correo electrónico.

## Endpoint

GET /api/user/email

## Query Parameters

- `email` (string, required) — Correo electrónico del usuario a buscar. Debe ir URL-encoded si contiene caracteres especiales.

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/user/email?email=juan.perez%40example.com' \
  --header 'Accept: application/json'
```

> Sustituye `juan.perez%40example.com` por la dirección a consultar (asegúrate de URL-encodificar `@` → `%40`).

## Ejemplo: Respuesta (200 OK)

```json
{
  "id": "user-123",
  "name": "Juan",
  "lastName": "Pérez",
  "email": "juan.perez@example.com",
  "company": "wabotify",
  "roles": ["admin"],
  "workspaceId": "workspace-789",
  "createdAt": "2025-04-01T12:34:56.000Z",
  "isActive": true
}
```

## Notas

- Asegúrate de incluir el parámetro `email` en la query string y de URL-encodificar
  lo cuando sea necesario.
- Dependiendo de la configuración, este endpoint podría requerir autenticación (por ejemplo, header `Authorization: Bearer <token>`). Verifica el comportamiento según tu entorno.
- Si no se encuentra el usuario, la API puede devolver `404 Not Found` o un objeto de error con detalles; revisa la implementación de tu entorno para el formato de error esperado.
