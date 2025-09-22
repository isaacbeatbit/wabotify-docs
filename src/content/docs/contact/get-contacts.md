---
title: "Get Contacts"
description: "Obtén la lista de contactos de un workspace en Plazbot. Soporta paginación mediante continuationToken."
---

# Get Contacts

Servicio para obtener los contactos de un workspace en Plazbot.

## Endpoint

GET /api/contact

## Encabezados (Headers)

- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Query Parameters

- `workspaceId` (string, requerido) — Identificador del workspace.
- `continuationToken` (string, opcional) — Token para paginación. Devuelve los siguientes 20 registros; si vienen menos de 20, el campo llega null.

Ejemplo de URL con query parameters:
`https://api.plazbot.com/api/contact?workspaceId=<workspace-id>`

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/contact?workspaceId=WORKSPACE_ID' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "errorCode": null,
  "message": "List obtained successfully.",
  "data": {
    "workspaceId": "string",
    "continuationToken": null,
    "data": [
      {
        "id": "string",
        "creationDate": "2025-03-31T08:04:22.6573965Z",
        "assignedAgentId": "string",
        "assignedAgentName": "string",
        "segmentationId": "string",
        "lastMessage": "string",
        "lastMessageDate": "2025-04-06T20:16:46.808Z",
        "platformSenderId": "string",
        "platformSenderName": "string",
        "platformSenderPhone": "string",
        "isRead": true,
        "isBotEnabled": true,
        "isManuallyAdded": true,
        "avatarColor": null,
        "orderInCards": 42,
        "orderInCardsLastUpdated": "2025-04-06T14:44:38.0807297Z",
        "tags": [
          {
            "id": "",
            "name": "",
            "color": null,
            "assignmentDate": "2025-04-04T17:47:18.1255151Z"
          }
        ],
        "files": [],
        "isSolved": false,
        "workspaceId": "string",
        "name": "string",
        "lastname": "string",
        "email": null,
        "platformId": 2,
        "stageId": "string"
      }
    ]
  }
}
```

## Notas

- Asegúrate de incluir el header `x-workspace-id` y el query param `workspaceId`.
- Usa `continuationToken` para paginar resultados (aprox. 20 por página).
- En respuestas con menos de 20 registros, `continuationToken` vendrá como `null`.
