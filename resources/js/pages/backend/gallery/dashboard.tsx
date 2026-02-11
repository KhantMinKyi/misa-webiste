import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiDotsVertical, HiPencil, HiTrash, HiPlus } from 'react-icons/hi';

interface Gallery {
    id: number;
    alt: string;
    src: string;
    created_at: string;
}

interface Props {
    galleries: {
        data: Gallery[];
        links: any[];
    };
}

const breadcrumbs = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Gallery', href: '/admin/galleries' },
];

export default function GalleryIndex({ galleries }: Props) {

    // Fix: Use correct Delete route
    const handleDelete = (id: number) => {
        if (confirm('Are you sure? This cannot be undone.')) {
            // router.delete(route('galleries.destroy', id));
            router.delete('/admin/galleries/' + id);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gallery" />

            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Gallery Management
                        </h2>
                        <Link
                            // href={route('galleries.create')}
                            href='/admin/galleries/create'
                            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 transition"
                        >
                            <HiPlus className="mr-2 text-base" /> Add Photo
                        </Link>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg border border-gray-200 dark:border-gray-700">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-750">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title / Alt</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {galleries.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="h-12 w-20 rounded overflow-hidden border border-gray-200">
                                                <img className="h-full w-full object-cover" src={item.src} alt={item.alt} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">{item.alt}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Menu as="div" className="relative inline-block text-left">
                                                <Menu.Button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                                                    <HiDotsVertical className="text-xl" />
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg  ring-opacity-5 focus:outline-none z-50">
                                                        <div className="px-1 py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href={`/admin/galleries/${item.id}/edit`}
                                                                        // href={route('galleries.edit', item.id)}
                                                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                                    >
                                                                        <HiPencil className="mr-2" /> Edit
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={() => handleDelete(item.id)}
                                                                        className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                                    >
                                                                        <HiTrash className="mr-2" /> Delete
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-end gap-2">
                        {galleries.links.map((link, i) => (
                            link.url && (
                                <Link
                                    key={i}
                                    href={link.url}
                                    className={`px-3 py-1 border rounded text-sm ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}