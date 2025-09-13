
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import { Link, useForm, usePage } from '@inertiajs/react';

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

 const  Create = ({ menus }: Props)=> {
 const { delete: destroy } = useForm();

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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Menu List</h1>
        <Link
          href={route('menus.create')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Menu
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded">
      
      </div>
    </div>
            </div>
        </AppLayout>
    );
}
export default Create;
