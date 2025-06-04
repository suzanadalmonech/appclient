'use client';

import { useAtivos } from '../../hooks/useAtivos';
import AtivoList from '/components/AtivoList';

export default function AtivosPage() {
  const { data, isLoading } = useAtivos();

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Ativos</h1>
      <AtivoList ativos={data || []} />
    </div>
  );
}