---
title: "Get Opportunity"
description: "Obtén la lista de oportunidades de un workspace. Soporta paginación mediante continuationToken."
---

# Get Opportunity

Servicio para extraer la información de las oportunidades en un workspace.

## Endpoint

GET /api/opportunity

## Encabezados (Headers)

- `x-workspace-id: <x-workspace-id>` (string, requerido)
- `Accept: application/json`

## Query Parameters

- `workspaceId` (string, requerido) — Identificador del workspace.
- `continuationToken` (string, opcional) — Token de paginación (20 registros por página aproximadamente).

Ejemplo de URL con query parameters:
`https://api.wabotify.com/api/opportunity?workspaceId=<workspace-id>`

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.wabotify.com/api/opportunity?workspaceId=WORKSPACE_ID' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --header 'Accept: application/json'
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
        "opportCode": "string",
        "opportStatus": 1,
        "winLossStatus": 0,
        "winLossDate": null,
        "finalAmount": 0,
        "creationDate": "2025-04-01T17:05:45.9087344Z",
        "creationTypeId": 1,
        "updatedDate": null,
        "deletionDate": null,
        "userDeletion": null,
        "statusId": 1,
        "files": [],
        "orderInCards": 1,
        "orderInCardsLastUpdated": "2025-04-01T17:05:45.9335789Z",
        "activities": [],
        "segmentationId": null,
        "workspaceId": "string",
        "name": "string",
        "description": "string",
        "amount": 0,
        "userCreation": "string",
        "contactId": "",
        "expirationDate": "2025-04-30T00:00:00",
        "assignedAgentId": null,
        "stageId": "string"
      }
    ]
  }
}
```

## Notas

- Incluye siempre el header `x-workspace-id` y el query param `workspaceId`.
- Usa `continuationToken` para paginar resultados (20 por página aproximadamente).
- En respuestas con menos de 20 registros, `continuationToken` vendrá como `null`.
- Revisa permisos y alcance del `x-workspace-id` para asegurarte de que puedes acceder a las oportunidades del workspace solicitado.

## Códigos de respuesta comunes

- `200 OK` — Oportunidades obtenidas correctamente.
- `400 Bad Request` — Parámetros inválidos.
- `401 Unauthorized` — Falta o valor inválido en `x-workspace-id`.
- `404 Not Found` — Workspace no encontrado.
- `500 Internal Server Error` — Error interno del servidor.
