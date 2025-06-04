'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '/lib/api';
import { useQueryClient } from '@tanstack/react-query';

const schema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
});

type ClienteInput = z.infer<typeof schema>;

export default function ClienteForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<ClienteInput>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ClienteInput) {
    await api.post('/clientes', data);
    reset();
    queryClient.invalidateQueries({ queryKey: ['clientes'] });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <input {...register('nome')} placeholder="Nome" className="border p-1" />
      <input {...register('email')} placeholder="Email" className="border p-1" />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1">Salvar</button>
    </form>
  );
}