type Cliente = { id: string; nome: string; email: string; status: string };

export default function ClienteList({ clientes }: { clientes: Cliente[] }) {
  return (
    <ul className="space-y-1">
      {clientes.map((c) => (
        <li key={c.id} className="border p-2">
          <strong>{c.nome}</strong> – {c.email} – {c.status}
        </li>
      ))}
    </ul>
  );
}