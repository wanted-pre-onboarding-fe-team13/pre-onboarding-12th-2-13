interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string;
  readonly VITE_BASE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
