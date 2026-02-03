import type { Person } from "../types/Person";

export default function ProfilePanel({
  person,
  members,
  onEdit,
  onDelete,
}: {
  person: Person | null;
  members: Person[];
  onEdit: (p: Person) => void;
  onDelete: (id: string) => void;
}) {
  if (!person) return null;

  const getName = (id: string) =>
    members.find(p => p.id === id)?.firstName ?? "Unknown";

  return (
    <aside className="w-80 border-l p-4 space-y-2">
      <h2 className="text-xl font-bold">
        {person.firstName} {person.lastName}
      </h2>

      <p>DOB: {person.dob}</p>
      <p>Gender: {person.gender}</p>

      <p>
        Parents: {person.parents.map(getName).join(", ") || "None"}
      </p>
      <p>
        Spouses: {person.spouses.map(getName).join(", ") || "None"}
      </p>
      <p>
        Children: {person.children.map(getName).join(", ") || "None"}
      </p>

      <div className="flex gap-2 pt-2">
        <button
          className="bg-blue-600 text-white px-3 py-1"
          onClick={() => onEdit(person)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1"
          onClick={() => onDelete(person.id)}
        >
          Delete
        </button>
      </div>
    </aside>
  );
}
