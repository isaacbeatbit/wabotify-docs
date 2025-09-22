---
title: "Login Access"
description: "Autentica un usuario con email y contraseña y devuelve un token de acceso (Bearer)."
---

# Login Access

Servicio para validar el acceso a la plataforma mediante email y contraseña. Devuelve un token JWT (u otro token de sesión) que debe usarse en las llamadas autenticadas en el header `Authorization: Bearer <token>`.

- Endpoint: `POST /api/user/login`
- Content-Type: `application/json`

## Body (application/json)

Se envía el email y la contraseña del usuario en el cuerpo de la petición.

```json
{
  "email": "juan.perez@example.com",
  "password": "SecurePassword123!"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.plazbot.com/api/user/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "juan.perez@example.com",
    "password": "SecurePassword123!"
  }'
```

## Ejemplo: Respuesta (200 OK)

En caso de credenciales válidas, el servicio devuelve un objeto con el token y su tiempo de expiración.

```json
{
  "success": true,
  "code": 200,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}
```

## Errores comunes

- `400 Bad Request` — Faltan parámetros en el cuerpo o formato inválido.
- `401 Unauthorized` — Credenciales inválidas.
- `429 Too Many Requests` — Demasiados intentos de login (rate limiting).
- `500 Internal Server Error` — Error interno del servidor.

## Notas

- Guarda el token en el cliente y utilízalo en el header `Authorization: Bearer <token>` para las llamadas que requieran autenticación.
- Para seguridad, trata las contraseñas y tokens con prácticas seguras (almacenamiento seguro, expiración, revalidación).
- Si tu sistema requiere MFA (autenticación multifactor), la respuesta puede incluir pasos adicionales o flags que indiquen que se requiere verificación adicional.
- Para ambientes de desarrollo/staging, verifica que los dominios y credenciales sean los correctos antes de automatizar inicios de sesión.
