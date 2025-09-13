// resources/js/Pages/Menu/MenuFormModal.tsx

import { useEffect } from 'react';
import Modal from '../../components/modal';
import { useForm } from '@inertiajs/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  menu?: {
    id: number;
    title: string;
    url: string;
  };
}

export default function MenuFormModal({ isOpen, onClose, menu }: Props) {
  const isEdit = !!menu;

  const { data, setData, post, put, processing, reset, errors } = useForm({
    title: menu?.title || '',
    url: menu?.url || '',
  });

  useEffect(() => {
    if (menu) {
      setData({
        title: menu.title,
        url: menu.url,
      });
    } else {
      reset();
    }
  }, [menu]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit) {
      put(route('menus.update', menu?.id), {
        onSuccess: () => onClose(),
      });
    } else {
      post(route('menus.store'), {
        onSuccess: () => onClose(),
      });
    }
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <h2 className="text-lg font-semibold">{isEdit ? 'Edit' : 'Add'} Menu</h2>

        <div>
          <label className="block text-sm">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 mt-1"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
          />
          {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
        </div>

        <div>
          <label className="block text-sm">URL</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 mt-1"
            value={data.url}
            onChange={(e) => setData('url', e.target.value)}
          />
          {errors.url && <div className="text-red-500 text-sm">{errors.url}</div>}
        </div>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={processing}
          >
            {isEdit ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </Modal>
  );
}
