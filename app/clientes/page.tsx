'use client';

import { useClientes } from '@/hooks/useClientes';
import ClienteForm from '@/components/ClienteForm';
import ClienteList from '@/components/ClienteList';

export default function ClientesPage() {
  const { data, isLoading } = useClientes();

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Clientes</h1>
      <ClienteForm />
      <ClienteList clientes={data || []} />
    </div>
  );
}