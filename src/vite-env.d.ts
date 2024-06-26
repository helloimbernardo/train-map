/// <reference types="vite/client" />

// Declare env variables for typescript
interface ImportMetaEnv {
    readonly VITE_MAPTILER_API_KEY: string,
    readonly VITE_BASE_URL: string,
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }