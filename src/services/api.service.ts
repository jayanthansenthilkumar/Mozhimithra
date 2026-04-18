import { API_BASE_URL, API_KEY } from '@/constants/Config';

// ---------------------------------------------------------------------------
// Shared authenticated fetch helper
// ---------------------------------------------------------------------------

const baseHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
};

async function fetchWithAuth(path: string, init?: RequestInit): Promise<Response> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...init,
        headers: {
            ...baseHeaders,
            ...(init?.headers ?? {}),
        },
    });

    // Guard: Cloudflare Access may return a 200 HTML sign-in page.
    const contentType = response.headers.get('content-type') ?? '';
    if (!response.ok || contentType.includes('text/html')) {
        const preview = (await response.text()).substring(0, 200);
        console.error('[API] Unexpected response (HTML / non-OK):', preview);
        throw new Error(`API request failed [${response.status}] — check X-API-Key or Cloudflare Access policy.`);
    }

    return response;
}

// ---------------------------------------------------------------------------
// API functions
// ---------------------------------------------------------------------------

export const fetchUser = async () => {
    try {
        const response = await fetchWithAuth('/user');
        return await response.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

export const fetchCourses = async () => {
    try {
        const response = await fetchWithAuth('/courses');
        return await response.json();
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [];
    }
};

export const fetchCourseById = async (id: string) => {
    try {
        const response = await fetchWithAuth(`/courses/${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching course ${id}:`, error);
        return null;
    }
};

export const fetchLeaderboard = async () => {
    try {
        const response = await fetchWithAuth('/leaderboard');
        return await response.json();
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }
};

export const fetchVocabulary = async () => {
    try {
        const response = await fetchWithAuth('/vocabulary');
        return await response.json();
    } catch (error) {
        console.error('Error fetching vocabulary:', error);
        return null;
    }
};

export const fetchLessonById = async (id: string) => {
    try {
        const response = await fetchWithAuth(`/lessons/${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching lesson ${id}:`, error);
        return null;
    }
};
