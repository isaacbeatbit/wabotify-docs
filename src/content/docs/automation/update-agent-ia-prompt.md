---
title: Update Agent IA Prompt
description: Servicio para actualizar el prompt del Agente de IA en una automatización.
---

# Update Agent IA Prompt

Servicio para actualizar el prompt del Agente de IA. Para obtener el id del Agente de IA, se tiene que haber creado una automatización y un nodo tipo Agente de IA en la plataforma.

Luego en sus configuración existe la opción de copiar el id del Agente de IA que se reemplazará en la url.

(ej: **node-733030XXXX-26377XXXXX**)

## Endpoint

`POST /api/automation/node/{nodeId}/prompt`

## Ejemplo cURL

```sh
curl --request POST \
  --url https://api.wabotify.com/api/automation/node/{nodeId}/prompt \
  --header 'Content-Type: application/json' \
  --data '{
  "workspaceId": "<string>",
  "urlDocument": "<string>"
}'
```
