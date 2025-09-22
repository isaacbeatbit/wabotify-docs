---
title: "Get Workspace"
desc: "Obtén la información completa de un workspace por su ID (fases, segmentaciones, etiquetas, integraciones y configuración)."
---

# Get Workspace

Servicio para obtener la información completa de un workspace. Devuelve configuraciones y metadatos del workspace como fases (stages), segmentaciones, etiquetas (tags), integraciones y otros parámetros relevantes para la plataforma.

## Endpoint

GET /api/workspace/{id}

## Path Parameters

- `id` (string, required) — Identificador del workspace que se desea consultar.

## Encabezados (Headers)

- `Accept: application/json`
- Dependiendo de la configuración del entorno, puede requerirse autenticación (por ejemplo `Authorization: Bearer <token>`). Verifica el comportamiento en tu deployment.

## Ejemplo: cURL

```sh
curl --request GET \
  --url 'https://api.plazbot.com/api/workspace/WORKSPACE_ID' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer YOUR_TOKEN'
```

## Ejemplo: Respuesta (200 OK)

```json
{
  "id": "workspace-123",
  "name": "Mi Workspace",
  "timezone": "America/Lima",
  "locale": "es-PE",
  "phases": [
    { "id": "phase-1", "name": "Prospect", "order": 1 },
    { "id": "phase-2", "name": "Qualified", "order": 2 },
    { "id": "phase-3", "name": "Proposal", "order": 3 }
  ],
  "segmentations": [
    { "id": "seg-1", "name": "VIP" },
    { "id": "seg-2", "name": "Nuevos" }
  ],
  "tags": [
    { "id": "tag-1", "name": "Importante", "color": "#FF0000" },
    { "id": "tag-2", "name": "Soporte", "color": "#00AAFF" }
  ],
  "integrations": [
    {
      "id": "int-1",
      "name": "WhatsApp Cloud",
      "type": "whatsapp",
      "enabled": true,
      "config": {
        "phoneNumber": "51987654321",
        "provider": "Meta"
      }
    }
  ],
  "settings": {
    "defaultStageId": "phase-1",
    "messagesReadReceipt": true,
    "timezone": "America/Lima"
  },
  "createdAt": "2024-10-01T12:00:00.000Z",
  "updatedAt": "2025-04-01T09:30:00.000Z"
}
```

## Códigos de respuesta comunes

- `200 OK` — Información del workspace devuelta correctamente.
- `400 Bad Request` — ID inválido o formato de la petición incorrecto.
- `401 Unauthorized` — Falta o es inválido el token de autenticación (si aplica).
- `404 Not Found` — Workspace no encontrado para el `id` proporcionado.
- `500 Internal Server Error` — Error interno en el servidor.

## Notas

- El objeto de respuesta puede variar según la versión de la API y las integraciones habilitadas en cada workspace.
- Revisa permisos y scopes del token usado (si aplica) para asegurar que el consumidor puede acceder a los metadatos del workspace.
- Para entornos white-label o multi-tenant, el campo `company` u otros metadatos pueden aparecer en la respuesta según la configuración.
- Si necesitas información adicional (ej. lista completa de agentes, plantillas o webhooks asociados), revisa los endpoints específicos que devuelven esos recursos o consulta con el soporte de la API.
