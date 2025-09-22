---
title: "Delete contact"
description: Servicio que elimina los contactos uno por uno o por batch.
---

# Delete Contact

Servicio que elimina contactos de un workspace. Soporta eliminación en lote mediante el endpoint `POST /api/contact/delete-batch`.

## Endpoint

POST /api/contact/delete-batch

## Encabezados (Headers)

- `Content-Type: application/json`
- `x-workspace-id: <x-workspace-id>` (string, requerido)

## Body (application/json)

- `workspaceId` (string, requerido) — Identificador del workspace.
- `contactIds` (object[], requerido) — Arreglo con los ids de contacto a eliminar. Cada elemento del arreglo incluye la propiedad `ids` (string).

Ejemplo de body (JSON):

```json
{
  "workspaceId": "string",
  "contactIds": [
    {
      "ids": "contact-id-1"
    },
    {
      "ids": "contact-id-2"
    }
  ]
}
```

## Ejemplo: cURL

```sh
curl --request POST \
  --url 'https://api.plazbot.com/api/contact/delete-batch' \
  --header 'Content-Type: application/json' \
  --header 'x-workspace-id: YOUR_WORKSPACE_ID' \
  --data '{
    "workspaceId": "your_workspace_id",
    "contactIds": [
      { "ids": "contact-id-1" },
      { "ids": "contact-id-2" }
    ]
  }'
```

## Respuesta

La documentación original no muestra un cuerpo de respuesta explícito para este endpoint. El servicio retorna código HTTP `200` en caso de éxito.

Si tu implementación devuelve un wrapper JSON (consistente con otros endpoints de la API), un ejemplo genérico de respuesta podría ser:

```json
{
  "success": true,
  "code": 200,
  "errorCode": null,
  "message": "Contacts deleted successfully.",
  "data": null
}
```

> Nota: el ejemplo anterior es ilustrativo; verifica la respuesta real en tu entorno o en la especificación oficial de la API.

## Códigos de respuesta (comunes)

- `200 OK` — Eliminación realizada (según la implementación, puede venir con o sin cuerpo).
- `400 Bad Request` — Body inválido o IDs malformados.
- `401 Unauthorized` — Falta o valor inválido en `x-workspace-id`.
- `404 Not Found` — Workspace o contactos no encontrados.
- `500 Internal Server Error` — Error interno del servidor.

## Notas

- Asegúrate de enviar `contactIds` con los identificadores correctos y de tener permisos para eliminar contactos en ese workspace.
- La eliminación puede ser irreversible según la política del sistema; confirma el comportamiento en tu entorno.
- Para borrados masivos muy grandes, consulta límites de la API o procesos por lotes (bulk) que la plataforma pueda ofrecer.
