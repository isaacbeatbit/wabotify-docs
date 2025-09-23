---
title: "Reset Password"
description: "Envía un correo para que el usuario restablezca su contraseña. Incluye ejemplo de petición cURL y ejemplo de respuesta JSON."
---

# Reset Password

Servicio que envía un correo al usuario para iniciar el flujo de restablecimiento de contraseña.

## Endpoint

POST /api/user/sendEmailToResetPassword

## Encabezados (Headers)

- `Content-Type: application/json`

## Body (application/json)

- `email` (string, required) — Correo electrónico del usuario que solicita el restablecimiento.
- `company` (string, required) — Código de la compañía (white-label). Para Wabotify usar: `wabotify`.

Ejemplo de request (JSON):

```json
{
  "email": "juan.perez@example.com",
  "company": "wabotify"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.plazbot.com/api/user/sendEmailToResetPassword' \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "juan.perez@example.com",
    "company": "wabotify"
  }'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "message": "Reset email sent successfully",
  "data": null
}
```

## Errores comunes

- `400 Bad Request` — Falta `email` o `company` en el body, o el formato del email es inválido.
- `404 Not Found` — No existe un usuario con ese email en la compañía indicada.
- `429 Too Many Requests` — Se han superado los intentos permitidos de envío de reset (rate limiting).
- `500 Internal Server Error` — Error interno del servidor.

## Notas y recomendaciones

- Asegúrate de enviar `company` correcto (por ejemplo `wabotify`) para entornos white-label.
- El correo recibido por el usuario contendrá un enlace o token seguro para completar el flujo de restablecimiento de contraseña en el cliente/web.
- Nunca incluyas contraseñas en URLs; el token de restablecimiento debe transportarse por correo y la nueva contraseña debe enviarse únicamente mediante el formulario seguro del front-end.
- Para entornos de desarrollo, valida que las plantillas de correo estén configuradas y que el servicio de envío de emails esté activo.
- Implementa límites y medidas anti-abuso (rate limiting, CAPTCHA, verificación por email) para evitar abusos del endpoint.
