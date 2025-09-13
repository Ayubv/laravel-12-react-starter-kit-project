import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import HeroFormModal from '../../components/hero-form-modal'; // Your modal component
import { Edit, Trash2 } from 'lucide-react';
interface Hero {
  id: number;
  background_image?: string;
  profile_image?: string;
  title?: string;
  typed_texts?: string[];  // JSON string or string[]
  description?: string;
  button_text?: string;
  button_link?: string;
}


interface Props {
  heroes: Hero[];
}

const breadcrumbs = [
  { title: 'Hero Sections', href: '/heroes' }
];

const Index = ({ heroes }: Props) => {
  const { delete: destroy } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [editingHero, setEditingHero] = useState<Hero | undefined>(undefined);

  const openModal = (hero?: Hero) => {
    setEditingHero(hero);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingHero(undefined);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this hero section?')) {
      destroy(route('heroes.destroy', id));
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Hero Sections" />

      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Hero Sections</h1>
          <button
            onClick={() => openModal()}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            + Add Hero
          </button>
        </div>

        <div className="overflow-auto rounded border border-gray-200 shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-700">#</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Title</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Description</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Profile Image</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Background Image</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Button Text</th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">Button Link</th>
                <th className="px-6 py-3 text-right font-medium text-gray-700">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">
              {(heroes ?? []).map((hero, index) => (
                <tr key={hero.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3">{index + 1}</td>
                  <td className="px-6 py-3">{hero.title || '-'}</td>
                  <td className="px-6 py-3">{hero.description || '-'}</td>
                  <td className="px-6 py-3">
                    {hero.profile_image ? (
                      <img
                        src={hero.profile_image ? `/storage/${hero.profile_image}` : undefined}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-6 py-3">
                    {hero.background_image ? (
                      <img
                        src={hero.background_image ? `/storage/${hero.background_image}` : undefined}
                        alt="Background"
                        className="w-16 h-12 object-cover rounded"
                      />
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-6 py-3">{hero.button_text || '-'}</td>
                  <td className="px-6 py-3">{hero.button_link || '-'}</td>
                  <td className="px-6 py-3 text-right">
                    <button
                      onClick={() => openModal(hero)}
                      className="text-indigo-600 hover:underline mr-4"
                      aria-label="Edit hero"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(hero.id)}
                      className="text-red-600 hover:underline"
                      aria-label="Delete hero"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {(!heroes || heroes.length === 0) && (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                    No hero sections found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal component */}
      <HeroFormModal
        isOpen={showModal}
        onClose={closeModal}
        hero={editingHero}
      />
    </AppLayout>
  );
};

export default Index;
