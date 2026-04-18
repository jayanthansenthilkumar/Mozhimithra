// We use the EXPO_PUBLIC_API_URL so we can easily swap between local dev and production
// Make sure this points to your computer's local IP address when developing on physical device
export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://192.168.1.24:8787/api';

// API key sent via X-API-Key header to authenticate with the Cloudflare Worker.
// Must match the API_KEY constant in backend/src/index.ts.
export const API_KEY = process.env.EXPO_PUBLIC_API_KEY ?? 'mozhimithra-dev-key';
