---
title: Agente de IA
description: Guía completa sobre la configuración del agente de IA en Plazbot
---

Guía completa sobre la configuración del agente de IA en Plazbot

## Estructura del Archivo `agent.config.json`

Este documento describe la estructura y configuración del archivo agent.config.json, utilizado para definir completamente un Agente de IA en Plazbot. Un agente puede estar vinculado a un portal web, widget o canal de mensajería como WhatsApp o cualquier software que tenga.

## Inicialización

```js
import { Agent } from "plazbot";

const bot = new Agent({
  workspaceId: "[YOUR_WORKSPACE_ID]",
  apiKey: "[YOUR_API_KEY]",
  zone: "LA", // Use "EU" for Europe
});
```

## Creación del Agente

El agente es la parte más importante del SDK. Aquí podrás crear agentes de IA con características específicas e implementarlos en diferentes canales, como el Portal de IA, un widget o WhatsApp. También puedes usar nuestro agente en cualquiera de tus herramientas empresariales internas, si lo deseas.

```js
const agent = await bot.addAgent(config);
const agentId = agent.agentId;
```

```js
const agentUpdated = await bot.updateAgent(`agentId`, config);
```

Para trabajar con los agentes, existe un archivo JSON que funciona como el configurador inicial del agente y tiene la siguiente estructura. No es necesario completar todo el archivo, pero puedes configurar tu agente como prefieras.

Puedes entrenar al agente como necesites, ya sea a través de nuestro configurador o si quieres configurarlo todo en una sola línea de comandos; no es necesario usar todos los campos del archivo de configuración.

## Estructura del Archivo agent.config.json

```json
{
  "name": "Sales Clinic",
  "description": "Virtual Agent IA assistant of the Dental Clinic Smiles",
  "prompt": "You are Máximo, a professional virtual assistant for Smiles Dental Clinic. Help patients with appointments, general information, and guide them through our services. Always maintain a professional yet friendly tone.",
  "zone": "LA",
  "buffer": 15,
  "color": "blue",
  "question": "How can I help you today?",
  "timezone": "America/Lima",
  "enable": true,
  "tags": ["health", "dentistry", "ia", "plazbot"],
  "showInChat": false,
  "enableWidget": true,
  "darkWidget": true,
  "nameWidget": "Dental Assistant",
  "initialShowWidget": true,
  "examples": [
    { "value": "How to schedule an appointment?", "color": "green" },
    { "value": "What are your office hours?", "color": "blue" },
    { "value": "Do you accept insurance?", "color": "orange" },
    { "value": "Emergency contact information", "color": "gray" },
    { "value": "Location and directions", "color": "white" }
  ],
  "instructions": {
    "tone": "professional",
    "style": "short answers",
    "personality": "friendly",
    "objective": "help with clarity",
    "language": "es-419",
    "emojis": false,
    "preferredFormat": "plain text",
    "maxWords": 80,
    "avoidTopics": [
      "laboratory costs",
      "external claims",
      "specific medical diagnoses"
    ],
    "respondOnlyIfKnows": true,
    "maintainToneBetweenMessages": true,
    "greeting": "Hello, I am Máximo, your virtual assistant from Smiles Dental Clinic. How can I help you today?"
  },
  "person": {
    "name": "Máximo",
    "role": "Virtual customer service assistant",
    "speaksInFirstPerson": true,
    "isHuman": false
  },
  "fallbacks": {
    "noAnswer": "Sorry, I don't have information on that topic. Let me connect you with one of our specialists.",
    "serviceError": "There was a problem processing your request. Please try again later or contact us directly.",
    "doNotUnderstand": "Could you please repeat it in another way? I want to make sure I help you correctly."
  },
  "rules": {
    "doNotMentionPrices": false,
    "doNotDiagnose": true,
    "doNotRespondOutsideHours": "Our office hours are Monday to Saturday, from 8am to 6pm. For emergencies, please call our emergency line."
  },
  "channels": [
    {
      "channel": "whatsapp",
      "key": "+51987654321",
      "multianswer": false
    },
    {
      "channel": "telegram",
      "key": "smiles_clinic_bot",
      "multianswer": true
    }
  ],
  "services": [
    {
      "intent": "schedule_appointment",
      "reference": "Service for scheduling patient appointments at the dental clinic",
      "enabled": true,
      "method": "POST",
      "tags": ["appointment", "scheduling"],
      "endpoint": "https://api.smilesclinic.com/v1/appointments/schedule",
      "requiredFields": [
        {
          "name": "patient_name",
          "description": "Full name of the patient who wants to schedule the appointment",
          "promptHint": "Could you please provide your full name?",
          "type": "string"
        },
        {
          "name": "email",
          "description": "Patient's email address for appointment confirmation",
          "promptHint": "What's your email address for the appointment confirmation?",
          "type": "email"
        },
        {
          "name": "phone",
          "description": "Patient's phone number for contact",
          "promptHint": "Could you provide your phone number?",
          "type": "phone"
        },
        {
          "name": "preferred_date",
          "description": "Preferred date and time for the appointment",
          "promptHint": "What date and time would work best for your appointment?",
          "type": "datetime"
        },
        {
          "name": "service_type",
          "description": "Type of dental service needed",
          "promptHint": "What type of dental service do you need? (cleaning, consultation, etc.)",
          "type": "string"
        }
      ],
      "headers": {
        "Authorization": "Bearer {{clinic_api_key}}",
        "Content-Type": "application/json",
        "X-Clinic-ID": "smiles_001"
      },
      "bodyTemplate": {
        "patient": {
          "name": "{{patient_name}}",
          "email": "{{email}}",
          "phone": "{{phone}}"
        },
        "appointment": {
          "datetime": "{{preferred_date|format('yyyy-MM-dd HH:mm')}}",
          "service": "{{service_type}}",
          "timezone": "America/Lima"
        }
      },
      "bodySchema": {
        "patient_name": "string",
        "email": "string",
        "preferred_date": "date",
        "service_type": "string"
      },
      "responseMapping": {
        "confirmation_id": "$.data.appointment.id",
        "scheduled_date": "$.data.appointment.datetime",
        "status": "$.status",
        "doctor_name": "$.data.appointment.doctor.name",
        "conflict_reason": "$.error.reason"
      },
      "responseMessage": "Your appointment has been successfully scheduled for {{scheduled_date}} with Dr. {{doctor_name}}",
      "responseConditions": [
        {
          "condition": "$.status == 'confirmed'",
          "message": "¡Perfect! Your appointment has been confirmed for {{scheduled_date}} with Dr. {{doctor_name}}. We'll send you a reminder 24 hours before. Confirmation ID: {{confirmation_id}}",
          "nextService": "send_appointment_reminder"
        },
        {
          "condition": "$.status == 'conflict'",
          "message": "Sorry, that time slot is not available. {{conflict_reason}}. Would you like me to suggest other available times?",
          "nextService": "suggest_alternative_times"
        },
        {
          "condition": "$.status == 'error' && $.error.code == 'invalid_email'",
          "message": "The email address provided seems invalid. Could you please verify your email address?",
          "nextService": "verify_contact_info"
        },
        {
          "condition": "$.status == 'error' && $.error.code == 'past_date'",
          "message": "I cannot schedule appointments for past dates. Could you please choose a future date?"
        },
        {
          "condition": "$.status == 'pending'",
          "message": "Your appointment request is being reviewed. We'll contact you within 24 hours to confirm availability and finalize the details."
        }
      ],
      "action": "conversar_humano"
    },
    {
      "intent": "check_insurance",
      "reference": "Service to verify patient insurance coverage and benefits",
      "enabled": true,
      "method": "GET",
      "tags": ["insurance", "verification"],
      "endpoint": "https://api.smilesclinic.com/v1/insurance/verify",
      "requiredFields": [
        {
          "name": "insurance_provider",
          "description": "Name of the insurance company",
          "promptHint": "What's your insurance provider name?",
          "type": "string"
        },
        {
          "name": "policy_number",
          "description": "Insurance policy or member ID number",
          "promptHint": "Could you provide your policy or member ID number?",
          "type": "string"
        }
      ],
      "headers": {
        "Authorization": "Bearer {{insurance_api_key}}",
        "Content-Type": "application/json"
      },
      "responseMapping": {
        "coverage_status": "$.data.coverage.status",
        "deductible": "$.data.coverage.deductible",
        "copay": "$.data.coverage.copay",
        "covered_services": "$.data.coverage.services"
      },
      "responseMessage": "Your insurance verification is complete. Coverage status: {{coverage_status}}",
      "responseConditions": [
        {
          "condition": "$.data.coverage.status == 'active'",
          "message": "Great news! Your insurance is active. Your copay is ${{copay}} and your remaining deductible is ${{deductible}}. Covered services include: {{covered_services}}."
        },
        {
          "condition": "$.data.coverage.status == 'inactive'",
          "message": "It appears your insurance policy is not currently active. Please contact your insurance provider or we can discuss our self-pay options."
        },
        {
          "condition": "$.data.coverage.status == 'not_found'",
          "message": "I couldn't find your policy in our system. Please verify your insurance information or contact us directly for assistance."
        }
      ]
    }
  ],
  "actions": [
    {
      "intent": "assign_urgent_tag",
      "reference": "Tags patients as urgent when they mention emergency dental situations",
      "tags": ["emergency", "urgent"],
      "enabled": true,
      "responseMessage": "I've marked your case as urgent and notified our emergency team.",
      "responseJson": false,
      "action": [
        {
          "type": "action.tag",
          "value": "urgent_case"
        },
        {
          "type": "action.asign",
          "value": "emergency@smilesclinic.com"
        }
      ]
    },
    {
      "intent": "schedule_follow_up",
      "reference": "Automatically schedules follow-up appointments and assigns appropriate case management",
      "tags": ["follow-up", "scheduling"],
      "enabled": true,
      "responseMessage": "Your follow-up has been scheduled and assigned to our treatment coordinator.",
      "responseJson": false,
      "action": [
        {
          "type": "action.stage",
          "value": "follow_up_scheduled"
        },
        {
          "type": "action.segmentation",
          "value": "post_treatment_care"
        }
      ]
    },
    {
      "intent": "end_consultation",
      "reference": "Ends the AI consultation when the patient no longer needs assistance",
      "tags": ["consultation", "end"],
      "enabled": true,
      "responseMessage": "Thank you for contacting Smiles Dental Clinic. Have a great day!",
      "responseJson": false,
      "action": [
        {
          "type": "action.agentShutDown",
          "value": "true"
        }
      ]
    }
  ]
}
```

### Canales (`channels`)

Los canales definen dónde y cómo tu agente puede comunicarse con los usuarios.

| Campo   | Tipo   | Requerido | Descripción                                                 |
| ------- | ------ | --------- | ----------------------------------------------------------- |
| channel | string | Sí        | Tipo de canal: `whatsapp`, `telegram`, `messenger`, etc.    |
| key     | string | Sí        | Identificador del canal (número de teléfono para WhatsApp). |

**Ejemplo:**

```json
"channels": [
  { "channel": "whatsapp", "key": "123456789" },
  { "channel": "telegram", "key": "@mi_bot" },
  { "channel": "messenger", "key": "page_id_123" }
]
```

### Campos principales del agente

| Campo       | Descripción                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| name        | Nombre del agente. Visible en el panel. **Requerido**                             |
| prompt      | Instrucciones base para el comportamiento del agente. **Requerido**               |
| buffer      | Cantidad de mensajes que se mantienen como contexto. Rango: 3 a 10. **Requerido** |
| color       | Color de presentación. Valores: `blue`, `orange`, `gray`, `green`, `white`.       |
| question    | Pregunta principal que se muestra en el portal.                                   |
| description | Descripción general del agente.                                                   |
| zone        | Zona donde opera el agente: `LA` (Latinoamérica) o `EU` (Europa). **Requerido**   |
| timezone    | Zona horaria. Ejemplo: `America/Lima`.                                            |
| tags        | Etiquetas internas para clasificar agentes.                                       |
| examples    | Preguntas sugeridas. Hasta 5.                                                     |
| showInChat  | Si el agente se muestra en el widget/chat. (boolean)                              |

### Instrucciones (`instructions`)

| Campo                       | Tipo    | Descripción                                            |
| --------------------------- | ------- | ------------------------------------------------------ |
| tone                        | string  | Tono de comunicación: `professional`, `friendly`, etc. |
| style                       | string  | Estilo de respuestas: `short answers`, `detailed`.     |
| personality                 | string  | Personalidad del agente.                               |
| objective                   | string  | Objetivo principal del agente.                         |
| language                    | string  | Idioma en que debe responder.                          |
| emojis                      | boolean | Si puede usar emojis.                                  |
| preferredFormat             | string  | `plain text` o `markdown`.                             |
| maxWords                    | number  | Máximo de palabras por respuesta.                      |
| avoidTopics                 | array   | Lista de temas prohibidos.                             |
| respondOnlyIfKnows          | boolean | Si debe evitar responder sin información confiable.    |
| maintainToneBetweenMessages | boolean | Mantiene el mismo tono entre mensajes.                 |
| greeting                    | string  | Mensaje de bienvenida.                                 |

**Opciones Objetive** “help with clarity” Enfocado en brindar respuestas claras “sell more” Promociona productos o servicios “support users” Ayuda a resolver problemas “guide actions” Brinda pasos concretos o instrucciones

**Opciones Personalidad** “friendly” Agradable y empático “serious” Reservado y directo “funny” Con toques de humor sutil “robotic” Más neutral, tipo IA técnica

**Opciones preferredFormat** “plain text” Texto simple “markdown” Permite negritas, listas, enlaces “html” Usado si se integrará en un entorno web

**Opciones Style** “short answers” Respuestas breves y directas “detailed” Respuestas explicativas, útiles para asistencia técnica “bullet points” Instrucciones u opciones en lista (ideal para pasos o listas) “conversational” Estilo fluido y natural, más humano

**Opciones Tono** “professional” Tono formal, educado, propio para empresas “friendly” Tono amigable, cercano, ideal para atención al cliente “casual” Informal, con lenguaje relajado y natural “neutral” Objetivo, sin inclinación emocional

### Persona del Agente (`person`)

| Campo               | Tipo    | Descripción                  |
| ------------------- | ------- | ---------------------------- |
| name                | string  | Nombre que usará el agente.  |
| role                | string  | Rol representado.            |
| speaksInFirstPerson | boolean | Habla en primera persona.    |
| isHuman             | boolean | Simula ser una persona real. |

### Fallbacks

| Campo           | Tipo   | Descripción                         |
| --------------- | ------ | ----------------------------------- |
| noAnswer        | string | Mensaje si no tiene respuesta.      |
| serviceError    | string | Mensaje de error de servicio.       |
| doNotUnderstand | string | Mensaje si no entiende la consulta. |

### Reglas

| Campo                    | Tipo    | Descripción                                                                |
| ------------------------ | ------- | -------------------------------------------------------------------------- |
| doNotMentionPrices       | boolean | No hablar de precios.                                                      |
| doNotDiagnose            | boolean | No hacer diagnósticos médicos.                                             |
| doNotRespondOutsideHours | string  | Mensaje fuera del horario definido. Trabaja junto con el campo de Timezone |

### Códigos de Idioma

| Valor  | Descripción                     |
| ------ | ------------------------------- |
| es     | Español general                 |
| es-419 | Español latinoamericano neutral |
| es-ES  | Español de España               |
| en     | Inglés general                  |
| en-US  | Inglés estadounidense           |
| en-GB  | Inglés británico                |
| fr     | Francés general                 |
| fr-FR  | Francés de Francia              |
| pt-BR  | Portugués brasileño             |
| de     | Alemán                          |

## Enviar mensaje al Agente de IA

```js
const response = await bot.onMessage({
  agentId: "agentId",
  question: "Can you give me a summary of the new Meta WhatsApp prices?",
  sessionId: "2aff0c11-434f-4d7c-a325-697128bb8a20",
  file: "https://.../archivo.pdf", //
  multipleAnswers: true, // Optional
});

console.log("💬 IA Response:", respuesta);
```

| Campo           | Tipo    | Requerido | Descripción                                                                                                                                       |
| --------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| agentId         | string  | ✅ Sí     | Identificador único del agente. Se utiliza para recuperar su configuración y conocimiento.                                                        |
| question        | string  | ✅ Sí     | Pregunta o mensaje del usuario que la IA debe responder.                                                                                          |
| sessionId       | string  | ✅ Sí     | Identificador de sesión único para mantener el contexto y el historial (buffer) de la conversación.                                               |
| file            | string  | ❌ No     | URL pública opcional de una imagen o archivo PDF. El contenido será extraído y usado si es relevante para la respuesta.                           |
| multipleAnswers | boolean | ❌ No     | Si se establece en true, la respuesta será devuelta en múltiples bloques (array) en lugar de un único texto. Ideal para respuestas estructuradas. |

## Tipos de Archivos Soportados en onMessage (OCR)

| Tipo de Archivo               | Soportado | Notas                                                              |
| ----------------------------- | --------- | ------------------------------------------------------------------ |
| .jpg, .png, .bmp, .gif, .tiff | ✅ Sí     | Formatos estándar de imagen                                        |
| .pdf                          | ✅ Sí     | Solo si el PDF contiene texto incrustado o es una imagen escaneada |
| .docx, .xlsx                  | ❌ No     | No se admite para procesamiento OCR                                |
| .txt, .json, etc.             | ❌ No     | No relevantes para extracción OCR                                  |

Respuesta esperada:

```json
{
  "success": true,
  "answers": [
    "Beneficio 1: Acceso exclusivo...",
    "Beneficio 2: Soporte personalizado...",
    "Beneficio 3: Capacitación mensual..."
  ],
  "fileName": ["Contrato_socio_plazbot.pdf"]
}
```

> 📌 Nota: Si multipleAnswers = false, la respuesta se devolverá en un único string en la propiedad answer.

## Get Agents

Devuelve todos los agentes dentro del espacio de trabajo.

```js
const agents = await bot.getAgents();
console.log("🧠 Agents:", agents);
```
