---
title: "Update Opportunity"
description: "Actualiza campos de una oportunidad en Wabotify. Reemplaza `paramToUpdate` por el nombre del campo a actualizar y envía su nuevo valor en el cuerpo JSON."
---

# Update Opportunity

Servicio para actualizar ciertos campos de una oportunidad existente dentro de un workspace.

## Endpoint

PUT /api/opportunity

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Query Parameters

- `id` (string, requerido) — Identificador de la oportunidad a actualizar.
- `workspaceId` (string, requerido) — Identificador del workspace.

## Body (application/json)

- `paramToUpdate` (string, requerido) — Nombre del campo a actualizar.
- Además del campo `paramToUpdate`, incluye en el mismo objeto JSON el campo objetivo con su nuevo valor.

Campos que típicamente se actualizan (ejemplos):

- `name` (string)
- `description` (string)
- `amount` (number)
- `stageId` (string)
- `assignedAgentId` (string)
- `expirationDate` (string, fecha ISO)

Ejemplo para actualizar el `name`:

```json
{
  "paramToUpdate": "name",
  "name": "Nuevo nombre de oportunidad"
}
```

Ejemplo para actualizar el `amount`:

```json
{
  "paramToUpdate": "amount",
  "amount": 2500.75
}
```

## Ejemplo: cURL

```sh
curl --request PUT \
  --url 'https://api.plazbot.com/api/opportunity?id=OPPORTUNITY_ID&workspaceId=WORKSPACE_ID' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "paramToUpdate": "name",
    "name": "Nuevo nombre de oportunidad"
  }'
```

> Reemplaza `OPPORTUNITY_ID`, `WORKSPACE_ID` y `YOUR_WORKSPACE_ID` por los valores reales.

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "errorCode": null,
  "message": "Opportunity successfully updated.",
  "data": {
    "id": "opportunity-id-123",
    "oportunity": {
      "id": "opportunity-id-123",
      "opportCode": "OPP-2025-0002",
      "opportStatus": 1,
      "winLossStatus": 0,
      "winLossDate": null,
      "finalAmount": 2500.75,
      "creationDate": "2025-04-08T03:52:53.377Z",
      "updatedDate": "2025-05-01T10:15:00.000Z",
      "statusId": 1,
      "files": [],
      "orderInCards": 1,
      "orderInCardsLastUpdated": "2025-05-01T10:15:00.000Z",
      "activities": [],
      "segmentationId": null,
      "workspaceId": "your_workspace_id",
      "name": "Nuevo nombre de oportunidad",
      "description": "Descripción previa",
      "amount": 2500.75,
      "userCreation": "user-creator-id",
      "contactId": "contact-456",
      "expirationDate": null,
      "assignedAgentId": "user-123",
      "stageId": "stage-1"
    }
  }
}
```

## Códigos de respuesta comunes

- `200 OK` — Oportunidad actualizada correctamente. Se devuelve el objeto `data.oportunity` con los datos actualizados.
- `400 Bad Request` — Body inválido o `paramToUpdate` no corresponde a un campo actualizable.
- `401 Unauthorized` — Header `x-workspace-id` faltante o inválido.
- `404 Not Found` — Oportunidad o workspace no encontrado (ids inválidos).
- `422 Unprocessable Entity` — Valor de campo no válido (tipo incorrecto o validación de negocio).
- `500 Internal Server Error` — Error interno del servidor.

## Notas

- `paramToUpdate` debe corresponder exactamente al nombre del campo en la entidad. Además del campo `paramToUpdate`, incluye en el mismo JSON el campo objetivo con el nuevo valor.
- Asegúrate de incluir `id` y `workspaceId` en la query string.
- Valida el tipo de dato del campo a actualizar (p. ej. `amount` debe ser un número).
- Algunas actualizaciones pueden requerir permisos específicos o validaciones de negocio (p. ej. mover etapa a `stageId` determinada).
- Si necesitas actualizar múltiples campos en una sola operación, consulta si la API soporta enviar varios pares campo/valor (si no, realiza múltiples llamadas o usa un endpoint de actualización por cuerpo si existe).
- Siempre prueba en un entorno de staging antes de ejecutar cambios en producción.

---

Documentación clonada y adaptada desde: https://docs.plazbot.com/api-reference/opportunity/update
