---
title: "Create Opportunity"
description: "Crea una oportunidad en Plazbot asociada a un workspace y (opcionalmente) a un contacto."
---

# Create Opportunity

Servicio para crear una oportunidad (opportunity) dentro de un workspace. Puedes asociar la oportunidad a un contacto y/o asignarla a un comercial.

## Endpoint

POST /api/opportunity

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Body (application/json)

- `workspaceId` (string, required) — Identificador del workspace.
- `name` (string, required) — Nombre de la oportunidad.
- `description` (string, required) — Descripción de la oportunidad.
- `amount` (number, required) — Monto asociado a la oportunidad.
- `assignedComercialId` (string, optional) — Id del comercial asignado (puede obtenerse desde el endpoint de users).
- `contactId` (string, optional) — Id del contacto asociado (puede obtenerse desde el endpoint de contacts).
- Otros campos pueden existir según la versión de la API (p. ej. `stageId`, `expirationDate`, `tags`).

Ejemplo de body (JSON):

```json
{
  "workspaceId": "your_workspace_id",
  "name": "Oportunidad Q2 - Empresa X",
  "description": "Venta de paquete anual premium",
  "assignedComercialId": "user-123",
  "amount": 1200.5,
  "contactId": "contact-456"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.plazbot.com/api/opportunity' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "workspaceId": "your_workspace_id",
    "name": "Oportunidad Q2 - Empresa X",
    "description": "Venta de paquete anual premium",
    "assignedComercialId": "user-123",
    "amount": 1200.5,
    "contactId": "contact-456"
  }'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "errorCode": null,
  "message": "Opportunity successfully created.",
  "data": {
    "id": "opportunity-id-789",
    "opportunity": {
      "id": "opportunity-id-789",
      "opportCode": "OPP-2025-0001",
      "opportStatus": 1,
      "winLossStatus": 0,
      "winLossDate": null,
      "finalAmount": 1200.5,
      "creationDate": "2025-04-08T03:52:53.377Z",
      "updatedDate": null,
      "statusId": 1,
      "files": [],
      "orderInCards": 1,
      "activities": [],
      "segmentationId": null,
      "workspaceId": "your_workspace_id",
      "name": "Oportunidad Q2 - Empresa X",
      "description": "Venta de paquete anual premium",
      "amount": 1200.5,
      "userCreation": "user-creator-id",
      "contactId": "contact-456",
      "expirationDate": null,
      "assignedAgentId": "user-123",
      "stageId": null
    }
  }
}
```

## Códigos de respuesta comunes

- `200 OK` — Oportunidad creada correctamente. Se devuelve el objeto `data.opportunity`.
- `400 Bad Request` — Body inválido o faltan campos requeridos.
- `401 Unauthorized` — Header `x-workspace-id` faltante o inválido.
- `404 Not Found` — Workspace, contacto o comercial no encontrado (si se pasó un id inexistente).
- `500 Internal Server Error` — Error interno del servidor.

## Notas

- `assignedComercialId` y `contactId` son opcionales; si no se proporcionan, la oportunidad se creará sin asignación ni vínculo a contacto.
- Confirma que `workspaceId` coincida con el valor del header `x-workspace-id` si tu flujo de validación lo requiere.
- Para actualizar una oportunidad existente usa el endpoint de actualización (PUT /api/opportunity).
- Valida el formato y los límites del campo `amount` según las reglas de tu negocio (decimales, moneda, etc.).
- Si necesitas crear oportunidades en masa, revisa límites de la API o contacta soporte para opciones de batching.
