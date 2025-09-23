---
title: "Get Contact By Email"
description: "Busca un contacto por su correo electrónico en Wabotify. Incluye headers, parámetros query y ejemplos de cURL / JSON."
---

# Get Contact By Email

Servicio para obtener un contacto filtrado por su dirección de correo electrónico.

## Endpoint

GET /api/contact/searchByEmail

## Encabezados (Headers)

- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Query Parameters

- `email` (string, requerido) — Correo electrónico a buscar. Debe estar URL-encoded si contiene caracteres especiales (por ejemplo, `@` → `%40`).
- `workspaceId` (string, requerido) — Identificador del workspace.

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/contact/searchByEmail?email=user%40example.com&workspaceId=WORKSPACE_ID' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID'
```

> Sustituye `user%40example.com`, `WORKSPACE_ID` y `YOUR_WORKSPACE_ID` por los valores reales de tu llamada.

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

## Códigos de respuesta

- `200 OK` — Se devolvió la información del contacto (campo `data`).
- `400 Bad Request` — Parámetros inválidos (p. ej. `email` malformado).
- `401 Unauthorized` — Falta o es incorrecto el header `x-workspace-id`.
- `404 Not Found` — No se encontró un contacto con ese email.
- Otros códigos pueden acompañar un `errorCode` y un `message` explicativo.

## Notas

- El parámetro `email` debe ir en la query string; asegúrate de URL-encodearlo correctamente.
- Incluye siempre el header `x-workspace-id` y el query param `workspaceId`.
- Esta ruta no requiere body en la petición.
- En caso de devolver múltiples coincidencias, el array `data` contendrá las entradas encontradas.
