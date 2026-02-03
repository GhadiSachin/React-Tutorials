import { useState } from "react";
import FamilyTree from "./components/FamilyTree";
import PersonFormModal from "./components/PersonFormModal";
import type { Person } from "./types/Person";

export default function App() {
  const [members, setMembers] = useState<Person[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addPerson = (p: Person) => {
    setMembers(prev => [...prev, p]);
    setShowForm(false);
  };

  return (
    <div className="p-4 space-y-4">
      {members.length === 0 && (
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(true)}
        >
          ➕ Add Master Person
        </button>
      )}

      {members.length > 0 && <FamilyTree members={members} />}

      {showForm && (
        <PersonFormModal
          isFirst={members.length === 0}
          onSave={addPerson}
        />
      )}
    </div>
  );
}
