# Changelog

All notable changes to this project will be documented here.

---

## backend-v1 — 2025-09-07
### ✅ What’s New
- First working backend milestone
- `getUserProfile` Lambda deployed and responding
- DynamoDB table CodexCBTVUsers created automatically
- IAM role permissions fixed for DynamoDB access
- Using AWS SDK v3 (no extra dependencies needed)

### 🔗 Tested Endpoints
- GET /users/{userId} → confirmed working
- Example: GET /users/12345 returns correct profile

### 📂 Infrastructure Changes
- Added IAM role statements for DynamoDB (GetItem, Scan, Query, etc.)
- Created DynamoDB table: CodexCBTVUsers

### 🧪 Test Data
- Inserted test user:
  - userId: 12345
  - name: Chris
  - email: chris@example.com
  - playlists: ["action-movies", "favorites"]
  - watchHistory: ["movie1", "movie2"]

### ⚠️ Known Issues / Next Steps
- No authentication yet (API is public)
- Only `getUserProfile` endpoint exists so far
- Next step: add create/update user endpoints and hook up web client

---

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

---

## milestone-v2 — 2025-09-07
### ✅ What’s New
- Completed full CRUD cycle in backend + frontend
- Added `updateUser` Lambda and React `UpdateUser` form
- Added `listUsers` Lambda and React `ListUsers` viewer
- Added `deleteUser` Lambda and React `DeleteUser` form
- Frontend now supports Create → Read → Update → Delete user flows

### 🔗 Tested Endpoints
- POST /users → working via React Create User form
- GET /users/{userId} → working via React Profile Test
- GET /users → working via React List Users
- PUT /users/{userId} → working via React Update User form
- DELETE /users/{userId} → working via React Delete User form

### 📂 Infrastructure Changes
- Added new Lambda handlers (`updateUser.js`, `listUsers.js`, `deleteUser.js`)
- Updated `serverless.yml` to expose new endpoints with CORS support

### 🧪 Test Data
- Created user: userId=99999 → updated playlists + deleted successfully
- Verified users list updates after Create and Delete operations

### ⚠️ Known Issues / Next Steps
- API is still unauthenticated (public endpoints)
- Frontend forms are functional but minimal (basic styling only)
- Next step: add authentication with AWS Cognito for secure access

---

## milestone-v3 — 2025-09-07
### ✅ What’s New
- Added admin dashboard UI polish for CRUD testing
- Implemented tabbed navigation for Create, Profile, List, Update, Delete
- Replaced raw JSON dumps with tables (ListUsers) and card views (ProfileTest)
- Added confirmation prompt for DeleteUser
- Added success/error messages for better clarity

### 🔗 Tested Features
- Create User → form works, confirmation shown
- Profile Lookup → user shown in card format
- List Users → renders as table with all users
- Update User → form works with success/error handling
- Delete User → requires confirmation, shows status message

### 📂 Infrastructure Changes
- No backend changes required (all UI polish)

### 🧪 Test Data
- Created → Updated → Listed → Deleted users successfully through UI
- Verified flows were easier to validate compared to raw JSON output

### ⚠️ Known Issues / Next Steps
- API still unauthenticated (public endpoints)
- UI uses plain CSS; could be improved with a component library
- Next step: integrate authentication (Cognito) for end-user flow

