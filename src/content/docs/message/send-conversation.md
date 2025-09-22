---
title: "Send Conversation"
description: "Envía conversaciones (plantillas) de WhatsApp de forma individual o masiva. Soporta variables, archivos adjuntos y tipos de envío."
---

# Send Conversation

Envía conversaciones (plantillas) de WhatsApp desde tu plataforma a clientes, de forma individual o masiva. Este endpoint se utiliza para enviar plantillas aprobadas por WhatsApp y soporta variables en el header y body, así como archivos adjuntos.

## Endpoint

POST /api/conversation

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Body (application/json)

Propiedades principales:

- `workspaceId` (string, required) — Identificador del workspace.
- `template` (string, required) — Nombre de la plantilla aprobada por WhatsApp.
- `destination` (string, required) — Número de destino (sin símbolos; incluir código de país), o en envíos masivos puede ser el identificador correspondiente.
- `variablesBody` (array of objects, optional) — Variables para el body de la plantilla. Cada objeto: `{ "variable": "name", "value": "value" }`.
- `variablesHeader` (array of objects, optional) — Variables para el header de la plantilla.
- `file` (object, optional) — Archivo adjunto: `{ "fileUrl": "<url>", "fileName": "<name>" }`.
- `sendType` (string|null, optional) — Tipo de envío: `1` = Campaign, `2` = Individual, `3` = API. Por defecto: `3` (API).
- `campaignName` (string|null, optional) — Nombre de campaña (útil cuando `sendType` = API para agrupar envíos).
- `other optional fields` — Puede haber otros campos de la API según versión (p. ej. metadata, externalReferenceId).

Ejemplo de body (JSON):

```json
{
  "workspaceId": "your_workspace_id",
  "template": "order_shipped",
  "destination": "51987654321",
  "variablesBody": [
    { "variable": "customerName", "value": "Juan" },
    { "variable": "orderId", "value": "12345" }
  ],
  "variablesHeader": [
    { "variable": "headerImage", "value": "https://storage.example.com/header.png" }
  ],
  "file": {
    "fileUrl": "https://storage.example.com/invoice_12345.pdf",
    "fileName": "Invoice_12345.pdf"
  },
  "sendType": "3",
  "campaignName": "Promocion_Abril"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.plazbot.com/api/conversation' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "workspaceId": "your_workspace_id",
    "template": "order_shipped",
    "destination": "51987654321",
    "variablesBody": [{ "variable": "customerName", "value": "Juan" }],
    "file": { "fileUrl": "https://storage.example.com/invoice_12345.pdf", "fileName": "Invoice_12345.pdf" },
    "sendType": "3",
    "campaignName": "Promocion_Abril"
  }'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "message": "Conversation sent successfully.",
  "code": 200,
  "data": {
    "contactId": "string",
    "conversationId": "string",
    "details": {
      "template": "order_shipped",
      "destination": "51987654321",
      "sendType": "3",
      "campaignName": "Promocion_Abril"
    }
  }
}
```

## Códigos de respuesta relevantes

- `200 OK` — Conversación enviada correctamente (o encolada). La respuesta contiene datos de seguimiento.
- `400 Bad Request` — Parámetros inválidos o plantilla/variables mal formadas.
- `401 Unauthorized` — Falta o valor inválido en `x-workspace-id`.
- `404 Not Found` — Plantilla no encontrada o recurso inexistente.
- `429 Too Many Requests` — Límite de envío excedido.
- `500 Internal Server Error` — Error interno del servidor.

## Notas y recomendaciones

- Asegúrate de que la plantilla (`template`) esté aprobada por WhatsApp antes de enviarla.
- `variablesBody` y `variablesHeader` deben coincidir con los placeholders definidos en la plantilla.
- `sendType`:
  - `1` = Campaign (envíos masivos enfocados en campañas).
  - `2` = Individual (envío a un solo destinatario).
  - `3` = API (envío vía integración; por defecto).
- Cuando uses `sendType` = `3`, puedes agrupar envíos con `campaignName`.
- Valida que `destination` y `workspaceId` sean correctos y que el archivo en `fileUrl` sea accesible públicamente si se requiere.
- Para grandes volúmenes utiliza mecanismos de batching o consulta con soporte para evitar bloqueos por límites de la plataforma.
