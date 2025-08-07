import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchUserByUsername = async (username: string) => {
  try {
    const res = await api.get(`/api/users/username/${username}`);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('User not found');
  }
};
