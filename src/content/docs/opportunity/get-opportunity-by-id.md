---
title: "Get Opportunity By Id"
description: "Obtén los detalles de una oportunidad por su ID dentro de un workspace. Incluye ejemplos de cURL y respuesta JSON."
---

# Get Opportunity By Id

Servicio para obtener los detalles de una oportunidad filtrada por su `id`.

## Endpoint

GET /api/opportunity/{id}

## Encabezados (Headers)

- `x-workspace-id: <x-workspace-id>` (string, requerido)
- `Accept: application/json`

## Path Parameters

- `id` (string, requerido) — Identificador de la oportunidad.

## Query Parameters

- `workspaceId` (string, requerido) — Identificador del workspace.

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/opportunity/OPPORTUNITY_ID?workspaceId=WORKSPACE_ID' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --header 'Accept: application/json'
```

> Sustituye `OPPORTUNITY_ID`, `WORKSPACE_ID` y `YOUR_WORKSPACE_ID` por los valores reales de tu entorno.

## Ejemplo: Respuesta (200 OK)

```json
[
  {
    "id": "opportunity-id-123",
    "opportCode": "OPP-2025-0002",
    "opportStatus": 1,
    "winLossStatus": 0,
    "winLossDate": null,
    "finalAmount": 2500.75,
    "creationDate": "2025-04-08T03:52:53.377Z",
    "creationTypeId": 1,
    "updatedDate": null,
    "deletionDate": null,
    "userDeletion": null,
    "statusId": 1,
    "files": [],
    "orderInCards": 1,
    "orderInCardsLastUpdated": "2025-05-01T10:15:00.000Z",
    "activities": [
      {
        "id": "activity-1",
        "categoryType": "Calls",
        "content": "Llamada con cliente, acordado demo",
        "date": "2025-04-09T09:30:00.000Z",
        "createdBy": "user-123"
      }
    ],
    "segmentationId": null,
    "workspaceId": "your_workspace_id",
    "name": "Nuevo nombre de oportunidad",
    "description": "Descripción detallada de la oportunidad",
    "amount": 2500.75,
    "userCreation": "user-creator-id",
    "contactId": "contact-456",
    "expirationDate": null,
    "assignedAgentId": "user-123",
    "stageId": "stage-1"
  }
]
```

## Notas

- Asegúrate de incluir el header `x-workspace-id` y el query param `workspaceId`.
- El endpoint no requiere body; toda la información se obtiene según el `id` proporcionado.
- Si la oportunidad no existe se puede devolver un `404 Not Found` con un body que explique el error.
- Verifica permisos y alcance del `x-workspace-id` para poder acceder a la información de la oportunidad.

## Códigos de respuesta comunes

- `200 OK` — Oportunidad encontrada y devuelta correctamente.
- `400 Bad Request` — Parámetros inválidos.
- `401 Unauthorized` — Falta o valor inválido en `x-workspace-id`.
- `404 Not Found` — Oportunidad o workspace no encontrado.
- `500 Internal Server Error` — Error interno del servidor.
