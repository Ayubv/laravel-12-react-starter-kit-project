import React, { useState, ChangeEvent, FormEvent } from 'react';

export type UserProfile = {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
};

type ProfileProps = {
  user: UserProfile;
  onSave: (updatedUser: UserProfile) => void;
};

const Profile: React.FC<ProfileProps> = ({ user, onSave }) => {
  const [formData, setFormData] = useState<UserProfile>(user);
  const [editing, setEditing] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg mt-4 mb-4 max-h-[80vh] overflow-y-auto">
      {formData.avatarUrl && (
        <img
          src={formData.avatarUrl}
          alt={formData.name}
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-blue-500 shadow-md"
        />
      )}

      {!editing ? (
        <>
          <h2 className="text-3xl font-bold text-center mb-2">{formData.name}</h2>
          <p className="text-center text-gray-600">{formData.email}</p>
          {formData.phone && <p className="text-center text-gray-600">📞 {formData.phone}</p>}
          {formData.location && <p className="text-center text-gray-600">📍 {formData.location}</p>}
          {formData.bio && <p className="mt-6 text-gray-700 text-sm leading-relaxed">{formData.bio}</p>}


        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {[
            { id: 'name', label: 'Name', type: 'text', required: true },
            { id: 'email', label: 'Email', type: 'email', required: true },
            { id: 'phone', label: 'Phone', type: 'text' },
            { id: 'location', label: 'Location', type: 'text' },
          ].map(({ id, label, type, required }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                value={(formData as any)[id] || ''}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required={required}
              />
            </div>
          ))}

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              value={formData.bio || ''}
              onChange={handleChange}
              placeholder="Tell something about yourself"
              className="w-full rounded-md border border-gray-300 px-4 py-2 resize-none shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      )}

      <div className="mt-10 text-gray-800 text-sm leading-relaxed space-y-3">
        <p>
          👋 Hi, I’m <strong>Ayub Ali</strong>, a full stack developer from Bangladesh specializing in modern web technologies.
        </p>
        <p>
          💻 I have hands-on experience building robust applications using <strong>Laravel 12</strong>, <strong>React</strong>, and <strong>Inertia.js</strong>, integrated seamlessly with <strong>MySQL</strong> databases.
        </p>
        <p>
          🧠 I focus on writing clean, maintainable code and delivering intuitive, high-performance user interfaces.
        </p>
        <p>
          📬 If you’re looking for a developer who can bridge backend and frontend effortlessly, feel free to reach out at{' '}
          <a href="mailto:ayubdd99@gmail.com" className="text-blue-600 hover:underline">
            ayubdd99@gmail.com
          </a>{' '}
          or call me at{' '}
          <a href="tel:+8801727932008" className="text-blue-600 hover:underline">
            01727-932008
          </a>.
        </p>
        <p>✨ Thanks for visiting — let’s build something great together!</p>
      </div>
    </div>
  );
};

export default Profile;
