---
title: Create Contact
description: Servicio para crear un nuevo contacto en la plataforma mediante la API.
---

# Create Contact

Servicio para poder crear los contactos en el Workspace. Este servicio cuenta con una condicional en el campo de platformId.

En caso se decida colocar el platformId con el codigo de Whatsapp, se debe de enviar el internalWhatsappNumber del contacto.

Codigos de los Canales (platformId).

Webchat = 1

Whatsapp = 2

Messenger = 3

Instagram = 4

Telegram = 5

Portal = 6

code = 7

## Endpoint

`POST /api/contact`

## Ejemplo cURL

```sh
curl --request POST \
  --url https://api.plazbot.com/api/contact \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: <x-workspace-id>' \
  --data '{
  "workspaceId": "string",
  "name": "string",
  "email": "string",
  "phone": "string"
}'
```
