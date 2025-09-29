---
title: "Update Contact"
description: "Actualiza campos de un contacto en Wabotify. Reemplaza 'paramToUpdate' por el nombre del campo a actualizar y proporciona su valor en el cuerpo JSON."
---

# Update Contact

El endpoint `PUT /api/contact` permite actualizar campos específicos de un contacto existente. Debes indicar en el body el nombre del campo a actualizar (`paramToUpdate`) y el nuevo valor correspondiente. Los campos que se pueden actualizar son:

- `name`
- `lastname`
- `email`
- `stageId`
- `segmentationId`

Esta página muestra el endpoint, encabezados, parámetros de consulta, ejemplos de request (cURL / JSON) y un ejemplo de respuesta.

## Endpoint

`PUT /api/contact`

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Parámetros de consulta (Query Parameters)

- `id` (string, requerido) — Identificador del contacto a actualizar.
- `workspaceId` (string, requerido) — Identificador del workspace.

Ejemplo de URL con query parameters:
`https://api.wabotify.com/api/contact?id=<contact-id>&workspaceId=<workspace-id>`

## Body (application/json)

- `paramToUpdate` (string, requerido) — Nombre del campo a actualizar.
- Además del campo `paramToUpdate`, incluye en el mismo objeto JSON el campo objetivo con su nuevo valor.

Ejemplos:

Para actualizar el `name`:

```json
{
  "paramToUpdate": "name",
  "name": "Nuevo Nombre"
}
```

Para actualizar el `email`:

```json
{
  "paramToUpdate": "email",
  "email": "usuario@ejemplo.com"
}
```

## Ejemplo: cURL (shell)

```sh
curl --request PUT \
  --url 'https://api.wabotify.com/api/contact?id=CONTACT_ID&workspaceId=WORKSPACE_ID' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "paramToUpdate": "name",
    "name": "Juan Pérez"
  }'
```

> Nota: Reemplaza `CONTACT_ID`, `WORKSPACE_ID` y `YOUR_WORKSPACE_ID` por los valores reales.

## Ejemplo: Request JSON

```json
{
  "paramToUpdate": "email",
  "email": "juan.perez@ejemplo.com"
}
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "code": 200,
  "errorCode": null,
  "message": "Contact updated successfully.",
  "data": {
    "id": "string",
    "contact": {
      "id": "string",
      "creationDate": "2025-04-07T21:56:19.3254439Z",
      "assignedAgentId": null,
      "assignedAgentName": null,
      "segmentationId": null,
      "lastMessage": null,
      "lastMessageDate": "2025-04-07T21:56:19.3254057Z",
      "platformSenderId": null,
      "platformSenderName": "",
      "platformSenderPhone": null,
      "isRead": false,
      "isBotEnabled": true,
      "isManuallyAdded": true,
      "avatarColor": null,
      "orderInCards": 0,
      "orderInCardsLastUpdated": "2025-04-07T22:02:11.8188339Z",
      "tags": [],
      "files": [],
      "variables": [],
      "isSolved": false,
      "solvedByAgentId": null,
      "solvedDate": null,
      "workspaceId": "string",
      "internalWhatsappNumber": "string",
      "name": "string",
      "lastname": "string",
      "email": "string",
      "platformId": 0,
      "stageId": "string"
    }
  }
}
```

## Códigos de respuesta

- `200 OK` — Contacto actualizado correctamente. Se devuelve el objeto `data.contact` con el estado actualizado.
- Otros códigos y `errorCode` pueden ser devueltos si hay problemas de validación, autorización o recursos inexistentes.

## Notas

- Asegúrate de pasar `x-workspace-id` y los query parameters `id` y `workspaceId`.
- `paramToUpdate` debe corresponder exactamente a uno de los campos permitidos. Además del campo `paramToUpdate`, incluye en el body el campo con el valor nuevo.
- Para actualizaciones parciales, envía únicamente los campos necesarios junto a `paramToUpdate`.
