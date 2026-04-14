import { API_BASE_URL } from '@/constants/Config';

export const fetchUser = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/user`);
        if (!response.ok || response.headers.get('content-type')?.includes('text/html')) {
            const text = await response.text();
            console.error('API Error / Cloudflare Access Issue:', text.substring(0, 100));
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

export const fetchCourses = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/courses`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [];
    }
};

export const fetchCourseById = async (id: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/courses/${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching course ${id}:`, error);
        return null;
    }
};

export const fetchLeaderboard = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/leaderboard`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }
};

export const fetchVocabulary = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/vocabulary`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching vocabulary:', error);
        return null;
    }
};

export const fetchLessonById = async (id: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/lessons/${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching lesson ${id}:`, error);
        return null;
    }
};
