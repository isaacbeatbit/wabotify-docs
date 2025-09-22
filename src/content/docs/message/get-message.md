---
title: "Get Messages"
description: "Obtén los mensajes de un contacto específico en Plazbot. Soporta paginación mediante continuationToken."
---

# Get Messages

Servicio para obtener la información de los mensajes relacionados a un contacto específico dentro de un workspace. Tú puedes paginar los resultados usando el parámetro `continuationToken`.

## Endpoint

GET /api/message

## Query Parameters

- `contactId` (string, requerido) — Identificador del contacto cuyos mensajes quieres obtener.
- `continuationToken` (string, opcional) — Token para paginación (devuelve la siguiente página de resultados).

> Nota: según tu implementación, también puede ser necesario enviar el header `x-workspace-id` para autorizar la consulta.

## Encabezados (Headers)

- `x-workspace-id: <x-workspace-id>` (string, opcional/según configuración)
- `Accept: application/json`

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/message?contactId=CONTACT_ID' \
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
    "contactId": "CONTACT_ID",
    "continuationToken": null,
    "data": [
      {
        "id": "message-id-1",
        "content": "Hola, ¿en qué puedo ayudarte?",
        "senderId": "agent-or-user-id",
        "direction": "inbound",
        "platform": "whatsapp",
        "createdAt": "2025-04-07T21:56:19.325Z",
        "attachments": [],
        "metadata": {}
      },
      {
        "id": "message-id-2",
        "content": "Necesito información sobre mi pedido.",
        "senderId": "user-id-123",
        "direction": "outbound",
        "platform": "whatsapp",
        "createdAt": "2025-04-07T21:58:00.000Z",
        "attachments": [],
        "metadata": {}
      }
    ]
  }
}
```

## Códigos de respuesta comunes

- `200 OK` — Mensajes obtenidos correctamente; el campo `data` contiene el listado y el `continuationToken` si hay más páginas.
- `400 Bad Request` — Parámetros inválidos (p. ej. `contactId` ausente o malformado).
- `401 Unauthorized` — Falta o es inválido el header `x-workspace-id` (si la API lo exige).
- `404 Not Found` — No se encontró el contacto o no hay mensajes para el `contactId` solicitado.
- `500 Internal Server Error` — Error del servidor.

## Notas

- Reemplaza `CONTACT_ID` y `YOUR_WORKSPACE_ID` por los valores reales de tu workspace.
- Si obtienes un `continuationToken` en la respuesta, úsalo en la siguiente petición como query param para continuar paginando.
- El formato exacto de cada mensaje puede variar según la plataforma (p. ej. WhatsApp, Messenger) y la implementación interna; adapta tus parsers en consecuencia.
- Para probar en local o entornos de staging, confirma los dominios y credenciales correspondientes.
