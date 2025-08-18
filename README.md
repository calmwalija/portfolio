# Local setup

1) Install deps

```bash
npm install --legacy-peer-deps
```

2) Configure Keycloak (optional)

Create a `.env.local` with:

```bash
NEXT_PUBLIC_KEYCLOAK_URL=https://your-keycloak.example.com
NEXT_PUBLIC_KEYCLOAK_REALM=your-realm
NEXT_PUBLIC_KEYCLOAK_CLIENT_ID=your-public-client-id
```

3) Run dev

```bash
npm run dev
```

Sign in/out controls appear in the top bar when Keycloak is configured. Without env, the app runs unauthenticated.


