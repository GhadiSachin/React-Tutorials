import type { Person } from "../types/Person";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div
      className={`w-48 rounded-xl p-3 shadow bg-white border ${
        !person.isAlive ? "opacity-60 grayscale" : ""
      }`}
    >
      {person.photo && (
        <img
          src={person.photo}
          className="w-16 h-16 rounded-full mx-auto object-cover"
        />
      )}

      <div className="text-center mt-2 font-semibold">
        {person.firstName} {person.lastName}
      </div>

      {!person.isAlive && (
        <div className="text-xs text-red-600 text-center">† Deceased</div>
      )}

      {person.isMaster && (
        <div className="text-xs text-blue-600 text-center">Root</div>
      )}
    </div>
  );
}
