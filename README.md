# Media Hub Serverless Scaffolding

This repository provides a starter structure for a cross-platform media application similar to Kodi, built on a serverless architecture.

## Directory Structure

- `functions/` – Node.js serverless functions (AWS Lambda example)
- `web/` – React web client
- `admin/` – React admin dashboard with Tailwind CSS
- `mobile/` – React Native client
- `infra/` – Infrastructure-as-code using the Serverless Framework

Each project contains its own `package.json` and minimal example code.

## Getting Started

Install dependencies within each subproject and adapt to your cloud provider and media sources.

```bash
cd functions && npm install
cd web && npm install
```

Back-end functions are deployed with the Serverless Framework:

```bash
cd functions
npx serverless deploy
```

## Authentication & Data

The scaffolding expects Cognito for authentication, DynamoDB for user profiles, and S3 for media storage. Update configuration as needed.

