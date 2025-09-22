---
title: "Send Message"
description: "Envía un mensaje directo (no plantilla) por WhatsApp a un destinatario. Incluye ejemplos de cURL y JSON."
---

# Send Message

Envía un mensaje directo (no plantilla) al WhatsApp de un cliente. Este endpoint se utiliza para mensajes fuera de las plantillas aprobadas por WhatsApp; en algunos casos (por ejemplo, si ha pasado la ventana de mensajería de 24 horas), el mensaje podría no entregarse y deberás usar plantillas a través del endpoint de Conversation.

## Endpoint

POST /api/message

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Body (application/json)

- `content` (string, requerido) — Texto del mensaje a enviar.
- `recipientPhone` (string, requerido) — Número de WhatsApp del destinatario (sin símbolos, con código de país, ej.: `51987654321`).
- `workspaceId` (string, requerido) — Identificador del workspace.

Ejemplo de request (JSON):

```json
{
  "content": "Hola, tu pedido ha sido enviado. Gracias por tu compra.",
  "recipientPhone": "51987654321",
  "workspaceId": "your_workspace_id"
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.plazbot.com/api/message' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "content": "Hola, tu pedido ha sido enviado. Gracias por tu compra.",
    "recipientPhone": "51987654321",
    "workspaceId": "your_workspace_id"
  }'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "success": true,
  "message": "Message sent successfully.",
  "code": 200,
  "data": {
    "contactId": "string",
    "message": {
      "id": "string",
      "messageWhatsappId": "string",
      "contactId": "string",
      "content": "Hola, tu pedido ha sido enviado. Gracias por tu compra.",
      "workspaceId": "your_workspace_id",
      "recipientPhone": "51987654321",
      "externalReferenceId": "string",
      "platformId": "string",
      "answerAgentId": "string",
      "answerType": "string"
    }
  }
}
```

## Códigos de respuesta relevantes

- `200 OK` — Mensaje enviado (o encolado) correctamente.
- `400 Bad Request` — Falta algún campo requerido o el formato es inválido.
- `401 Unauthorized` — Header `x-workspace-id` faltante o inválido.
- `404 Not Found` — Workspace o recurso relacionado no encontrado.
- `429 Too Many Requests` — Límite de envío excedido.
- `500 Internal Server Error` — Error del servidor.

## Notas

- Usa este endpoint para mensajes sin plantilla; para envíos masivos o mensajes basados en plantillas, usa el endpoint de Conversation (`POST /api/conversation`).
- Asegúrate de enviar `recipientPhone` con el código de país y sin caracteres especiales.
- Verifica las políticas y ventanas de mensajería de WhatsApp para asegurar la entrega del mensaje.
- Si necesitas rastrear entrega o lectura, consulta los campos adicionales que tu implementación de la API pueda retornar (p. ej. `messageWhatsappId`) y los hooks/webhooks disponibles en tu workspace.
