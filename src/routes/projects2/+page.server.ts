import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
  const token = cookies.get('token');

  if (token) {
    console.log('Token found, redirecting...');
    throw redirect(302, '/');
  }

  console.log('Token not found, continuing...');
  return {};
};
