type Ativo = { id: string; nome: string; valorAtual: number };

export default function AtivoList({ ativos }: { ativos: Ativo[] }) {
  return (
    <ul className="space-y-1">
      {ativos.map((a) => (
        <li key={a.id} className="border p-2">
          <strong>{a.nome}</strong>: R$ {a.valorAtual.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}