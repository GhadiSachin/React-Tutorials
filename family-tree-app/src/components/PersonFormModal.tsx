import { useState } from "react";
import type { Person } from "../types/Person";

export default function PersonFormModal({
  onSave,
  isFirst,
}: {
  onSave: (p: Person) => void;
  isFirst: boolean;
}) {
  const [form, setForm] = useState<Person>({
    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
    gender: "Male",
    isAlive: true,
    isMaster: isFirst,
    parents: [],
    spouses: [],
    children: [],
  });

  const update = (k: keyof Person, v: any) =>
    setForm({ ...form, [k]: v });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96 space-y-2">
        <input
          placeholder="First name"
          className="border p-2 w-full"
          onChange={e => update("firstName", e.target.value)}
        />

        <input
          placeholder="Last name"
          className="border p-2 w-full"
          onChange={e => update("lastName", e.target.value)}
        />

        {/* Alive / Dead */}
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              checked={form.isAlive}
              onChange={() => update("isAlive", true)}
            /> Alive
          </label>

          <label>
            <input
              type="radio"
              checked={!form.isAlive}
              onChange={() => update("isAlive", false)}
            /> Deceased
          </label>
        </div>

        {/* Photo upload */}
        <input
          type="file"
          accept="image/*"
          onChange={e => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => update("photo", reader.result);
            reader.readAsDataURL(file);
          }}
        />

        <button
          className="bg-blue-600 text-white px-3 py-1 rounded w-full"
          onClick={() => onSave(form)}
        >
          Save Person
        </button>
      </div>
    </div>
  );
}
