// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Wabotify Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Documentación",
          items: [
            {
              label: "Primeros pasos",
              items: [
                {
                  label: "Creación de Cuenta",
                  slug: "primeros-pasos/creacion-de-cuenta",
                },
                {
                  label: "Crear Agente de IA",
                  slug: "primeros-pasos/crear-agente-de-ia",
                },
                {
                  label: "Conectar WhatsApp API",
                  slug: "primeros-pasos/conectar-whatsapp-api",
                },
                {
                  label: "Conectar  Whatsapp Business",
                  slug: "primeros-pasos/conectar-whatsapp-business",
                },
                {
                  label: "Conectar ChatGPT",
                  slug: "primeros-pasos/conectar-chatgpt",
                },
                {
                  label: "Crear Automatización",
                  slug: "primeros-pasos/crear-automatizacion",
                },
              ],
            },
            {
              label: "Agente de IA",
              items: [
                {
                  label: "Concepto",
                  slug: "agente-de-ia/concepto",
                },
                {
                  label: "Campos",
                  slug: "agente-de-ia/campos",
                },
                {
                  label: "Propmt",
                  slug: "agente-de-ia/prompt",
                },
                {
                  label: "Servicios",
                  slug: "agente-de-ia/servicios",
                },
                {
                  label: "Variables",
                  slug: "agente-de-ia/variables",
                },
                {
                  label: "Archivos",
                  slug: "agente-de-ia/archivos",
                },
                {
                  label: "Acciones",
                  slug: "agente-de-ia/acciones",
                },
                {
                  label: "Canales",
                  slug: "agente-de-ia/canales",
                },
                {
                  label: "Widget",
                  slug: "agente-de-ia/widget",
                },
              ],
            },
            {
              label: "Contactos",
              items: [
                {
                  label: "Introducción",
                  slug: "contactos/introduccion",
                },
                {
                  label: "Chat de Contactos",
                  slug: "contactos/chat-de-contactos",
                },
                {
                  label: "Vistas de Contactos",
                  slug: "contactos/vistas-de-contactos",
                },
                {
                  label: "Seguridad de Usuarios",
                  slug: "contactos/seguridad-de-los-usuarios",
                },
                {
                  label: "Tareas",
                  slug: "contactos/tareas",
                },
                {
                  label: "Oportunidades",
                  slug: "contactos/oportunidades",
                },
                {
                  label: "Notificaciones",
                  slug: "contactos/notificaciones",
                },
              ],
            },
            {
              label: "Legal",
              items: [
                {
                  label: "Términos y Condiciones",
                  slug: "legal/terminos",
                },
                {
                  label: "Politica de Privacidad",
                  slug: "legal/politica-de-privacidad",
                },
                {
                  label: "GPDR Compliance",
                  slug: "legal/gdpr-compliance",
                },
              ],
            },
          ],
        },
        {
          label: "Developer HUB",
          items: [
            {
              label: "Developer Hub",
              items: [
                {
                  label: "Introducción",
                  slug: "developer-hub/introduccion",
                },
                {
                  label: "API Key",
                  slug: "developer-hub/api-key",
                },
                {
                  label: "Workspace",
                  slug: "developer-hub/workspace",
                },
              ],
            },
            {
              label: "Agent",
              items: [
                {
                  label: "Agent",
                  slug: "agent/agent",
                },
              ],
            },
            {
              label: "Automation",
              items: [
                {
                  label: "Update Agent IA Prompt",
                  slug: "automation/update-agent-ia-prompt",
                },
              ],
            },
            {
              label: "Contact",
              items: [
                {
                  label: "Create Contacts",
                  slug: "contact/create-contact",
                },
                {
                  label: "Update Contact",
                  slug: "contact/update-contact",
                },
                {
                  label: "Get Contacts",
                  slug: "contact/get-contacts",
                },
                {
                  label: "Get Contact By ID",
                  slug: "contact/get-contact-by-id",
                },
                {
                  label: "Get Contact By Email",
                  slug: "contact/get-contact-by-email",
                },
                {
                  label: "Get Contact By Phone",
                  slug: "contact/get-contact-by-phone",
                },
                {
                  label: "Update Activities to Contact",
                  slug: "contact/update-activities-to-contact",
                },
                {
                  label: "Delete Contact",
                  slug: "contact/delete-contact",
                },
              ],
            },
            {
              label: "Message",
              items: [
                {
                  label: "Get Message",
                  slug: "message/get-message",
                },
                {
                  label: "Send Message",
                  slug: "message/send-message",
                },
                {
                  label: "Send Conversation",
                  slug: "message/send-conversation",
                },
              ],
            },
            {
              label: "Opportunity",
              items: [
                {
                  label: "Create Opportunity",
                  slug: "opportunity/create-opportunity",
                },
                {
                  label: "Update Opportunity",
                  slug: "opportunity/update-opportunity",
                },
                {
                  label: "Create Activity For Opportunity",
                  slug: "opportunity/create-activity-for-opportunity",
                },
                {
                  label: "Get Opportunity By Id",
                  slug: "opportunity/get-opportunity-by-id",
                },
                {
                  label: "Get Opportunity",
                  slug: "opportunity/get-opportunity",
                },
              ],
            },
            {
              label: "User",
              items: [
                {
                  label: "Create User",
                  slug: "user/create-user",
                },
                {
                  label: "Get User By Email",
                  slug: "user/get-user-by-email",
                },
                {
                  label: "Login Access",
                  slug: "user/login-access",
                },
                {
                  label: "Reset Password",
                  slug: "user/reset-password",
                },
                {
                  label: "Update Password",
                  slug: "user/update-password",
                },
              ],
            },
            {
              label: "Workspace",
              items: [
                {
                  label: "Get Workspace",
                  slug: "workspace/get-workspace",
                },
              ],
            },
          ],
        },
        {
          label: "SDK",
          items: [
            {
              label: "Bienveido al SDK",
              slug: "sdk/bienvenido",
            },
            {
              label: "Instalación de NPM",
              slug: "sdk/instalacion",
            },
            {
              label: "Modulos",
              items: [
                {
                  label: "Agente de IA",
                  slug: "sdk/modulos/agente-de-ia",
                },
                {
                  label: "Services API",
                  slug: "sdk/modulos/services",
                },
                {
                  label: "Formatos",
                  slug: "sdk/modulos/formatos",
                },
                {
                  label: "Archivos",
                  slug: "sdk/modulos/archivos",
                },
                {
                  label: "Widgets",
                  slug: "sdk/modulos/widget",
                },
                {
                  label: "Portal",
                  slug: "sdk/modulos/portal",
                },
                {
                  label: "WhatsApp",
                  slug: "sdk/modulos/whatsapp",
                },
                {
                  label: "Acciones",
                  slug: "sdk/modulos/acciones",
                },
              ],
            },
          ],
        },
      ],
      plugins: [starlightThemeRapide()],
    }),
  ],
});
