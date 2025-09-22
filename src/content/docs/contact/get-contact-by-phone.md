---
title: "Get Contact By Phone"
description: "Busca un contacto por número de teléfono (cellphone) en Plazbot. Incluye headers, parámetros y ejemplos de cURL/JSON."
---

# Get Contact By Phone

Servicio para obtener uno o varios contactos filtrados por número de teléfono (cellphone / WhatsApp).

## Endpoint

GET /api/contact/searchByCellphone

## Encabezados (Headers)

- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Query Parameters

- `cellphone` (string, requerido) — Número de teléfono a buscar. Enviar sin símbolos (`+`, `-`, espacios). Incluye código de país si aplica (ej.: `51987654321`).
- `workspaceId` (string, requerido) — Identificador del workspace.

Ejemplo de URL:
`https://api.plazbot.com/api/contact/searchByCellphone?cellphone=51987654321&workspaceId=WORKSPACE_ID`

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/contact/searchByCellphone?cellphone=51987654321&workspaceId=WORKSPACE_ID' \
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
        "platformSenderPhone": "51987654321",
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
        "name": "Nombre Ejemplo",
        "lastname": "Apellido Ejemplo",
        "email": null,
        "platformId": 2,
        "stageId": "string"
      }
    ]
  }
}
```

## Códigos de respuesta (relevantes)

- `200 OK` — Se devolvió el/los contacto(s) encontrados en el campo `data`.
- `400 Bad Request` — Parámetro `cellphone` o `workspaceId` inválido/malformado.
- `401 Unauthorized` — Falta o es inválido el header `x-workspace-id`.
- `404 Not Found` — No se encontró un contacto con ese número.
- Otros códigos pueden aparecer con un campo `errorCode` y un `message` descriptivo.

## Notas

- Envía `cellphone` sin caracteres especiales y con código de país cuando aplique.
- Incluye siempre el header `x-workspace-id` y el query param `workspaceId`.
- Esta ruta no requiere body en la petición.
- Si hay múltiples coincidencias, el array `data` contendrá todas las entradas encontradas.
