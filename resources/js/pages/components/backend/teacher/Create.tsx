import AppLayout from '@/layouts/app-layout';
import { Input } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { HiArrowLeft, HiCloudUpload, HiTrash } from 'react-icons/hi';

export default function TeacherCreate() {
    const { data, setData, post, processing, errors } = useForm({
        alt: '',
        teacher_category_id: 1,
        src: null as File | null,
    });

    const [preview, setPreview] = useState<string | null>(null);

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('src', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // post(route('galleries.store'));
        post('/admin/teachers');
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Teacher', href: '/admin/teachers' },
                { title: 'Create', href: '#' },
            ]}
        >
            <Head title="Upload Photo" />

            <div className="mx-auto w-5xl px-4 py-10">
                <Link
                    // href={route('galleries.index')}
                    href={'/admin/teachers'}
                    className="mb-6 flex items-center text-sm text-gray-500 transition-colors hover:text-gray-800"
                >
                    <HiArrowLeft className="mr-1" /> Back to Teacher
                </Link>

                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-brand-core dark:bg-neutral-800">
                    <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                        Upload New Teacher
                    </h2>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Title / Alt Text */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Image Title / Alt Text
                            </label>
                            <Input
                                type="text"
                                value={data.alt}
                                onChange={(e) => setData('alt', e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-brand-core dark:bg-neutral-900 dark:focus:border-brand-core dark:focus:ring-brand-core"
                                placeholder="e.g. Library"
                            />
                            {errors.alt && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.alt}
                                </p>
                            )}
                        </div>

                        {/* Image Uploader */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Teacher
                            </label>
                            <div
                                className={`rounded-xl border-2 border-dashed p-8 text-center transition-colors ${preview ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'}`}
                            >
                                {preview ? (
                                    <div className="relative">
                                        <img
                                            src={preview}
                                            className="mx-auto max-h-64 rounded-lg shadow-sm"
                                            alt="Preview"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setPreview(null);
                                                setData('src', null);
                                            }}
                                            className="absolute -top-3 -right-3 rounded-full bg-red-500 p-1 text-white shadow-md hover:bg-red-600"
                                        >
                                            <HiTrash />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <HiCloudUpload className="mb-3 text-4xl text-gray-400" />
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer"
                                        >
                                            <span className="font-semibold text-blue-600 hover:underline dark:text-brand-core">
                                                Click Here to upload
                                            </span>

                                            <input
                                                id="file-upload"
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImage}
                                            />
                                        </label>
                                        <p className="mt-2 text-xs text-gray-400">
                                            PNG, JPG , Webp up to 1MB
                                        </p>
                                    </div>
                                )}
                            </div>
                            {errors.src && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.src}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-blue-700 disabled:opacity-50 dark:bg-brand-core dark:hover:bg-brand-dark"
                            >
                                {processing ? 'Uploading...' : 'Save Teacher'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
