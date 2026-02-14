import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
interface TeacherFormData {
    _method: string;
    alt: string;
    teacher_category_id: number;
    src: File | null;
}
export default function TeacherEdit({ teacher }: { teacher: any }) {
    // Fix: Use _method: 'put' to allow file upload on update
    const { data, setData, post, processing, errors } =
        useForm<TeacherFormData>({
            _method: 'put',
            alt: teacher.alt || '',
            teacher_category_id: 1,
            src: null,
        });

    const [preview, setPreview] = useState(teacher.src);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Fix: Use post() instead of put(), targeting the update route
        // post(route('teachers.update', teacher.id));
        post('/admin/teachers/' + teacher.id);
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Teacher', href: '/admin/teachers' },
                { title: 'Edit', href: '#' },
            ]}
        >
            <Head title="Edit Photo" />

            <div className="mx-auto min-w-4xl py-12">
                <div className="rounded-lg bg-white p-6 shadow dark:bg-neutral-800">
                    <h2 className="mb-4 text-lg font-bold">Edit Teacher</h2>

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Title / Alt
                            </label>
                            <input
                                type="text"
                                value={data.alt}
                                onChange={(e) => setData('alt', e.target.value)}
                                className="my-2 w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-brand-core dark:bg-neutral-900 dark:focus:border-brand-core dark:focus:ring-brand-core"
                            />
                            {errors.alt && (
                                <p className="text-xs text-red-500">
                                    {errors.alt}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Replace Image (Optional)
                            </label>
                            <input
                                type="file"
                                onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                        setData('src', e.target.files[0]);
                                        setPreview(
                                            URL.createObjectURL(
                                                e.target.files[0],
                                            ),
                                        );
                                    }
                                }}
                                className="my-2 mt-1 block w-full rounded-lg bg-gray-100 px-2 py-2 text-sm text-gray-500 dark:bg-neutral-900 dark:text-brand"
                            />
                            {/* Preview */}
                            <div className="mt-2">
                                <img
                                    src={preview}
                                    className="h-32 w-auto rounded border"
                                    alt="Preview"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Link
                                //  href={route('teachers.index')}
                                href={'/admin/teachers/'}
                                className="rounded-lg bg-red-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-red-700 disabled:opacity-50 dark:bg-red-600 dark:hover:bg-red-600"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-blue-700 disabled:opacity-50 dark:bg-brand-core dark:hover:bg-brand-dark"
                            >
                                {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
