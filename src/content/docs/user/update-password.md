---
title: "Update Password"
description: "Restablece la contraseña de un usuario usando el verificationId enviado por correo tras solicitar el reset."
---

# Update Password

Servicio para restablecer la contraseña de un usuario mediante el token/verificationId recibido por correo tras ejecutar el flujo de reset.

## Endpoint

POST /api/user/resetPassword

## Encabezados (Headers)

- `Content-Type: application/json`

## Body (application/json)

- `email` (string, required) — Correo del usuario que va a cambiar su contraseña.
- `newPassword` (string, required) — La nueva contraseña que se desea establecer.
- `verificationId` (string, required) — Token o identificador de verificación enviado al usuario por correo en el flujo de restablecimiento.

Ejemplo de request (JSON):

```json
{
  "email": "juan.perez@example.com",
  "newPassword": "NewSecurePassword123!",
  "verificationId": "verification-token-abc-123"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.wabotify.com/api/user/resetPassword' \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "juan.perez@example.com",
    "newPassword": "NewSecurePassword123!",
    "verificationId": "verification-token-abc-123"
  }'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "message": "Password updated successfully",
  "data": null
}
```

## Errores comunes

- `400 Bad Request` — Falta alguno de los campos requeridos (`email`, `newPassword`, `verificationId`) o el formato es inválido.
- `401 Unauthorized` — `verificationId` inválido o ya usado.
- `422 Unprocessable Entity` — La nueva contraseña no cumple las políticas de seguridad (longitud, complejidad).
- `404 Not Found` — No existe un usuario asociado al `email` proporcionado.
- `500 Internal Server Error` — Error interno del servidor.

## Notas y recomendaciones

- El `verificationId` se obtiene del correo enviado por el endpoint de reseteo (`POST /api/user/sendEmailToResetPassword`). Normalmente caduca pasadas unas horas: maneja correctamente expiraciones.
- Aplica validaciones de seguridad para `newPassword` en el cliente y el servidor (longitud mínima, caracteres especiales, etc.).
- Nunca incluyas tokens ni contraseñas sensibles en URLs o logs. Transporta la nueva contraseña únicamente en el cuerpo de la petición con TLS.
- Proporciona retroalimentación clara al usuario en caso de error (token expirado, contraseña débil, etc.) y un flujo para solicitar un nuevo token si es necesario.
