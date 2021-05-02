import { useSelector } from 'react-redux';

export const useAuth = () => {
  const token = useSelector((state) => state.auth.token);

  return token !== null;
};
