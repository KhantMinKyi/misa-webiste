import AppLayout from '@/layouts/app-layout';
import { Menu, Transition } from '@headlessui/react';
import { Head, Link, router } from '@inertiajs/react';
import { Fragment } from 'react';
import { HiDotsVertical, HiPencil, HiPlus, HiTrash } from 'react-icons/hi';

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
                <div className="mx-auto sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Gallery Management
                        </h2>
                        <Link
                            // href={route('galleries.create')}
                            href="/admin/galleries/create"
                            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-xs font-semibold tracking-widest text-white uppercase transition hover:bg-blue-700 active:bg-blue-900 dark:bg-brand-core"
                        >
                            <HiPlus className="mr-2 text-base" /> Add Photo
                        </Link>
                    </div>

                    {/* Table */}
                    <div className="overflow-visible border border-gray-200 bg-white shadow-sm sm:rounded-lg dark:border-brand-core dark:bg-neutral-900">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-brand-core">
                            <thead className="bg-gray-50 dark:bg-brand-core">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Preview
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Title / Alt
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white">
                                        Date
                                    </th>
                                    <th className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white dark:divide-brand-dark dark:bg-neutral-900">
                                {galleries.data.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="transition hover:bg-gray-50 dark:hover:bg-neutral-950"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="h-12 w-20 overflow-hidden rounded border border-gray-200">
                                                <img
                                                    className="h-full w-full object-cover"
                                                    src={item.src}
                                                    alt={item.alt}
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                {item.alt}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                            {new Date(
                                                item.created_at,
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                            <Menu
                                                as="div"
                                                className="relative inline-block text-left"
                                            >
                                                <Menu.Button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-white dark:hover:bg-brand-core">
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
                                                    <Menu.Items
                                                        className={`ring-opacity-5 absolute right-0 z-50 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none dark:bg-neutral-900 ${
                                                            index >=
                                                            galleries.data
                                                                .length -
                                                                2
                                                                ? 'bottom-full mb-2 origin-bottom-right' // Open Upwards for last items
                                                                : 'mt-2 origin-top-right' // Open Downwards for others
                                                        }`}
                                                    >
                                                        <div className="px-1 py-1">
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <Link
                                                                        href={`/admin/galleries/${item.id}/edit`}
                                                                        // href={route('galleries.edit', item.id)}
                                                                        className={`${active ? 'bg-blue-500 text-white dark:text-white' : 'text-gray-900 dark:text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                        <HiPencil className="mr-2" />{' '}
                                                                        Edit
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <button
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                item.id,
                                                                            )
                                                                        }
                                                                        className={`${active ? 'bg-red-500 text-white dark:text-white' : 'text-gray-900 dark:text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                    >
                                                                        <HiTrash className="mr-2" />{' '}
                                                                        Delete
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
                                {galleries.data.length < 1 && (
                                    <tr className="transition hover:bg-gray-50 dark:hover:bg-neutral-950">
                                        <td
                                            className="py-6 text-center"
                                            colSpan={4}
                                        >
                                            No Data...
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-end gap-2">
                        {galleries.links.map(
                            (link, i) =>
                                link.url && (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        className={`rounded border px-3 py-1 text-sm ${link.active ? 'bg-blue-600 text-white dark:bg-brand-core' : 'bg-white text-gray-700'}`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ),
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
