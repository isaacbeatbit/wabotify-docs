---
title: "Create User"
description: "Crea un nuevo usuario en el sistema. Requiere Authorization Bearer token."
---

# Create User

Servicio para crear un nuevo usuario en el sistema.

## Endpoint

POST /api/user

## Encabezados (Headers)

- `Authorization: Bearer <token>` (required) — Token de autenticación.
- `Content-Type: application/json`

## Body (application/json)

- `name` (string, required) — Nombre del usuario.
- `lastName` (string, required) — Apellido del usuario.
- `email` (string, required) — Correo electrónico del usuario.
- `password` (string, required) — Contraseña.
- `company` (string, required) — Código de la compañía (para white-label). Para Wabotify usar: `wabotify`.
- `defaultStartWeek` (integer, optional, default: 0) — Día de inicio de semana por defecto (0 = Domingo, 1 = Lunes).
- `isExternalCreation` (boolean, optional, default: true) — Indica si la creación proviene de un sistema externo.

Ejemplo de request (JSON):

```json
{
  "name": "Juan",
  "lastName": "Pérez",
  "email": "juan.perez@example.com",
  "password": "SecurePassword123!",
  "company": "wabotify",
  "defaultStartWeek": 1,
  "isExternalCreation": true
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url "https://api.plazbot.com/api/user" \
  --header "Authorization: Bearer YOUR_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Juan",
    "lastName": "Pérez",
    "email": "juan.perez@example.com",
    "password": "SecurePassword123!",
    "company": "plazbot",
    "defaultStartWeek": 1,
    "isExternalCreation": true
  }'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "message": "Usuario creado exitosamente",
  "data": {
    "userId": "12345-abcde-67890",
    "email": "juan.perez@example.com"
  }
}
```

## Códigos de respuesta comunes

- `200 OK` — Usuario creado correctamente.
- `400 Bad Request` — Body inválido o falta algún campo requerido.
- `401 Unauthorized` — Token faltante o inválido.
- `409 Conflict` — Email ya registrado.
- `500 Internal Server Error` — Error interno del servidor.

## Notas

- El endpoint requiere autenticación mediante el header `Authorization: Bearer <token>`.
- Asegúrate de aplicar buenas prácticas de seguridad para contraseñas (longitud mínima, complejidad) en el cliente.
- `company` debe coincidir con los códigos aceptados por la plataforma; para entornos Wabotify usar `plazbot`.
- `isExternalCreation` puede usarse para distinguir usuarios creados por integraciones externas.
- Después de crear el usuario, puede ser necesario activar o validar el email según la configuración del workspace.
