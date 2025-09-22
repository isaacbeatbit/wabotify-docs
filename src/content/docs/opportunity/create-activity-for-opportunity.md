---
title: "Create Activity for Opportunity"
description: "Registra una actividad (llamada, meeting, WhatsApp, email) asociada a una oportunidad."
---

# Create Activity for Opportunity

Servicio para agregar actividades a una oportunidad. Las actividades pueden ser llamadas, mensajes de WhatsApp, envío de email o agendamientos de reuniones. Estas actividades quedan registradas en el historial de la oportunidad.

## Endpoint

POST /api/opportunity/{opportunityId}/agent/activities

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Path Parameters

- `opportunityId` (string, requerido) — Identificador de la oportunidad.

## Body (application/json)

- `workspaceId` (string, required) — Identificador del workspace.
- `content` (string, required) — Detalle o comentario de la actividad.
- `date` (string, required) — Fecha y hora de la actividad en formato ISO 8601 (ej. `2025-03-20T14:30:00.000Z`).
- `categoryType` (string, required) — Tipo de actividad. Valores permitidos: `Calls`, `Meeting`, `Whatsapp`, `Email`.

Ejemplo de body:

```json
{
  "workspaceId": "string",
  "content": "Llamada realizada con el cliente para revisar requisitos.",
  "date": "2025-03-20T14:30:00.000Z",
  "categoryType": "Calls"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.plazbot.com/api/opportunity/OPPORTUNITY_ID/agent/activities' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "workspaceId": "string",
    "content": "Llamada realizada con el cliente para revisar requisitos.",
    "date": "2025-03-20T14:30:00.000Z",
    "categoryType": "Calls"
  }'
```

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
- `400 Bad Request` — Body inválido o falta algún campo requerido.
- `401 Unauthorized` — Header `x-workspace-id` faltante o inválido.
- `404 Not Found` — `opportunityId` no encontrado.
- `422 Unprocessable Entity` — Fecha inválida o categoría no permitida.
- `500 Internal Server Error` — Error interno del servidor.

## Notas

- `categoryType` acepta los valores exactos: `Calls`, `Meeting`, `Whatsapp`, `Email`.
- Usa formato ISO 8601 para `date`; incluye zona horaria si aplica (ej. `2025-03-20T14:30:00.000Z`).
- Asegúrate de que `workspaceId` corresponda al workspace del header `x-workspace-id` si tu flujo valida ambas cosas.
- Estas actividades se registran en el historial de la oportunidad y pueden ser usadas para seguimiento o reportes.
- Para modificaciones o eliminación de actividades, consulta los endpoints correspondientes (si existen) o el panel de administración.
