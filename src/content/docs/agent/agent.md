---
title: Agent
description: Learn how to use the Agent in your application.
---

# Send Message to Agent

Envía mensajes al Agente de IA para que te pueda responder y puedas usar la respuesta en las aplicaciones que necesites.

## POST /api/agent/on-message

### cURL

```sh
curl --request POST \
  --url https://api.plazbot.com/api/agent/on-message \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: <x-workspace-id>' \
  --data '{
  "workspaceId": "string",
  "template": "string",
  "destination": "string",
  "sessionId": "string"
}'
```

### Ejemplo de respuesta (200)

```json
{
  "success": true,
  "answer": "Response <answer>"
}
```

---

### Headers

- `x-workspace-id` (string, requerido)

### Body

Content-Type: `application/json`

- `agentId` (string, requerido): Id del Agente
- `workspaceId` (string, requerido): Id del Workspace
- `question` (string, requerido): Pregunta o frase que se envía al agente
- `sessionId` (string, requerido): Session de usuario de la conversación, es importante mantener la sesión siempre cuando se trata de la misma persona en la conversación y así no pierda el contexto y la memoria de la misma.
- `file` (string | null): Archivo que se puede enviar al Agente para que lo procese.
- `multipleAnswers` (boolean | null): Funcionalidad para que el Agente te responda en una sola línea o en varias líneas. Si es true, entonces el Agente puede proporcionar múltiples respuestas en un formato array.

### Response

200 - application/json

- `success` (boolean, requerido)
- `answer` (string)
