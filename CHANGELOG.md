## milestone-v1 — 2025-09-07
### ✅ What’s New
- First end-to-end flow between frontend and backend
- React app (`web/`) can create new users and fetch profiles
- Backend (`createUser`, `getUserProfile`) Lambdas fully integrated with DynamoDB
- CORS configured for API Gateway and Lambda responses

### 🔗 Tested Endpoints
- POST /users → working via React Create User form
- GET /users/{userId} → working via React Profile Test component

### 📂 Infrastructure Changes
- Added CORS support (`cors: true`) in `serverless.yml`
- Updated `getUserProfile.js` to include CORS headers
- Confirmed IAM role permissions allow DynamoDB access

### 🧪 Test Data
- User created in browser:
  - userId: 24680
  - name: Example user
  - email: example@example.com

### ⚠️ Known Issues / Next Steps
- API still unauthenticated (public)
- No update/delete user endpoints yet
- Frontend is functional but minimal (basic forms only)
