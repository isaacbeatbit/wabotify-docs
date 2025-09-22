---
title: "Get Contact By Id"
description: "Obtén un contacto por su ID en Plazbot. Incluye headers, parámetros path y query, ejemplo de cURL y ejemplo de respuesta JSON."
---

# Get Contact By Id

Servicio que devuelve el detalle de un contacto filtrado por su `contactId`.

## Endpoint

GET /api/contact/{contactId}

## Encabezados (Headers)

- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Path Parameters

- `contactId` (string, requerido) — Identificador del contacto a recuperar.

## Query Parameters

- `workspaceId` (string, requerido) — Identificador del workspace.

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/contact/CONTACT_ID?workspaceId=WORKSPACE_ID' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "errorCode": null,
  "message": "Successfully obtained list.",
  "data": {
    "contactId": "string",
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

- `contactId` se pasa como path parameter en la URL.
- Asegúrate de incluir el header `x-workspace-id` y el query parameter `workspaceId`.
- El endpoint no requiere body; la respuesta retorna el contacto solicitado en el campo `data`.
- En caso de error (p.ej. contacto no encontrado o falta de autorización), el servicio puede devolver códigos distintos a 200 con `errorCode` y `message` descriptivos.
