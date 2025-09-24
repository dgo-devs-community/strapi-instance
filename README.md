# Dgo TechHub Strapi

[![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)

Implementación de Strapi para manejar los eventos de la comunidad de Dgo TechHub.


## 🚀 Features

- Event management
- User authentication and permissions
- SEO optimization
- Email notifications via Mailgun
- Self-hosted solution

## 🛠️ Tech Stack

- **Backend**: Strapi v5.23.5
- **Database**:
  - Development: SQLite (included)
  - Production: PostgreSQL
- **Email**: Mailgun
- **Plugins**:
  - @strapi/plugin-seo
  - @strapi/provider-email-mailgun

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 6.0.0
- PostgreSQL (for production) or SQLite (for development)

### Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Update the .env file with your configuration. For development with SQLite, use:
   ```
   # Database (SQLite for development)
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db

   # App
   NODE_ENV=development
   HOST=0.0.0.0
   PORT=1337

   # Security (generate your own secrets)
   ADMIN_JWT_SECRET=your_admin_jwt_secret
   API_TOKEN_SALT=your_api_token_salt
   APP_KEYS=your_app_keys
   JWT_SECRET=your_jwt_secret
   TRANSFER_TOKEN_SALT=your_transfer_token_salt
   ENCRYPTION_KEY=your_encryption_key

   # Mailgun Configuration
   MAILGUN_API_KEY=your_mailgun_private_api_key
   MAILGUN_DOMAIN=your_mailgun_domain.com
   MAILGUN_DEFAULT_FROM=no-reply@yourdomain.com
   MAILGUN_DEFAULT_REPLY_TO=contact@yourdomain.com
   ```

## Installation
1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run develop
```
3. Access the admin panel at: http://localhost:1337/admin


## 🔌 Plugin Configuration
### Mailgun Setup
Update your `config/plugins.ts` with:

```typescript
export default ({ env }) => ({
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN'),
        url: 'https://api.mailgun.net/',
      },
      settings: {
        defaultFrom: env('MAILGUN_DEFAULT_FROM'),
        defaultReplyTo: env('MAILGUN_DEFAULT_REPLY_TO'),
      },
    },
  },
});
```

## 🐳 Docker (Optional)
For production deployment with PostgreSQL:

If you use a deployment service like Vercel or Dokploy. Give access to the repository, build the docker image using Dockerfile it shuold autodetech the multi step and build the production image.
In your service, include the needed environment variables. You will also need a Postgers db running, copy over the details to the env variables so Strapi can connect automatically.

### Workflow
Any changes made that imply any changes to the database like but not limited to: collections changes, components, plugins, should be mande locally. This is to test if it works and also to implement the api calls in the community website.
The main reason is that if those changes are made in Strapi's production instance, when the container gets recreated or if the docker service restarts those changes will be lost. So, making the changes locally and pushing those changes to the main branch, will trigger a rebuild of the production image in docker / dokploy / vercel. That way the changes to the db schema will reflect in the production instance.

Changes to the content, like editing an event to have images or remove a form can be done in production normally.


Built with ❤️ by the Dgo TechHub team