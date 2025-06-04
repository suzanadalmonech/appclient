import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export function useAtivos() {
  return useQuery({
    queryKey: ['ativos'],
    queryFn: async () => {
      const { data } = await api.get('/ativos');
      return data;
    },
  });
}