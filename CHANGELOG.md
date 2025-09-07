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
