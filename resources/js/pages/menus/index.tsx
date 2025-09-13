
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import MenuFormModal from './menuFormModal';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';

interface Menu {
  id: number;
  title: string;
  url: string;
}

interface Props {
  menus: Menu[];
}


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menu',
        href: '/menus',
    },
];

export default function Index({ menus }: Props) {
  const { delete: destroy } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [editingMenu, setEditingMenu] = useState<Menu | undefined>(undefined);

  const openModal = (menu?: Menu) => {
    setEditingMenu(menu);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this menu item?')) {
      destroy(route('menus.destroy', id));
    }
  };

    return (
      <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Menu" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
  <h1 className="text-2xl font-semibold text-gray-800">Menu List</h1>
  <button
    onClick={() => openModal()}
    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 shadow"
  >
    + Add Menu
  </button>
</div>

          <div className="overflow-auto rounded-lg shadow border border-gray-200">
  <table className="min-w-full divide-y divide-gray-200 text-sm">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left font-medium text-gray-700">#</th>
        <th className="px-6 py-3 text-left font-medium text-gray-700">Title</th>
        <th className="px-6 py-3 text-left font-medium text-gray-700">URL</th>
        <th className="px-6 py-3 text-right font-medium text-gray-700">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 bg-white">
      {menus.map((menu, index) => (
        <tr key={menu.id} className="hover:bg-gray-50 transition">
          <td className="px-6 py-3 whitespace-nowrap">{index + 1}</td>
          <td className="px-6 py-3">{menu.title}</td>
          <td className="px-6 py-3">{menu.url}</td>
          <td className="px-6 py-3 text-right whitespace-nowrap">
            <button
              onClick={() => openModal(menu)}
              className="text-indigo-600 hover:underline mr-4"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(menu.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
      {menus.length === 0 && (
        <tr>
          <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
            No menu items found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

        </div>
      </div>

      {/* Reusable Modal Form */}
      <MenuFormModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingMenu(undefined);
        }}
        menu={editingMenu}
      />
    </AppLayout>
    );
}
