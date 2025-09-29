---
title: "Update Activities to Contact"
description: "Registra una actividad/comentario en el historial de un contacto. Envia workspaceId y content en el body JSON."
---

# Update Activities to Contact

Servicio para registrar una actividad (nota/comentario) asociada a un contacto. La actividad se mostrará en la descripción/historial del contacto dentro del workspace.

## Endpoint

POST /api/contact/{contactId}/activities

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Path Parameters

- `contactId` (string, requerido) — Identificador del contacto al que se añadirá la actividad.

## Body (application/json)

- `workspaceId` (string, requerido) — Identificador del workspace.
- `content` (string, requerido) — Descripción o comentario de la actividad que se registrará.

Ejemplo de body:

```json
{
  "workspaceId": "string",
  "content": "Se realizó la factura #12345"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.wabotify.com/api/contact/CONTACT_ID/activities' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "workspaceId": "YOUR_WORKSPACE_ID",
    "content": "Se realizó la factura #12345"
  }'
```

- Sustituye `CONTACT_ID` y `YOUR_WORKSPACE_ID` por los valores reales.
- El endpoint no requiere parámetros en la query string; toda la información necesaria se envía en el path, headers y body.

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "errorCode": null,
  "message": "The activity was recorded successfully.",
  "data": null
}
```

## Códigos de respuesta (comunes)

- `200 OK` — Actividad registrada correctamente.
- `400 Bad Request` — Body inválido o falta algún campo requerido (`workspaceId`, `content`).
- `401 Unauthorized` — Header `x-workspace-id` faltante o inválido.
- `404 Not Found` — `contactId` no encontrado.
- `500 Internal Server Error` — Error interno del servidor.

## Notas

- Asegúrate de enviar `content` con la descripción clara; este texto será visible en la interfaz del contacto.
- `workspaceId` en el body debe coincidir con el `x-workspace-id` si tu flujo lo requiere por validación.
- El servicio generalmente registra las actividades de forma inmutable; si necesitas editar una actividad posterior, consulta las APIs internas o el panel de administración.
