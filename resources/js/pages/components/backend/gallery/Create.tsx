import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { HiArrowLeft, HiCloudUpload, HiTrash } from 'react-icons/hi';
import { Input } from '@headlessui/react';

export default function GalleryCreate() {

    const { data, setData, post, processing, errors } = useForm({
        alt: '',
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
        post('/admin/galleries');
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Gallery', href: '/admin/galleries' }, { title: 'Create', href: '#' }]}>
            <Head title="Upload Photo" />

            <div className="w-5xl mx-auto py-10 px-4">
                <Link
                    // href={route('galleries.index')}
                    href={'/admin/galleries'}
                    className="flex items-center text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
                    <HiArrowLeft className="mr-1" /> Back to Gallery
                </Link>

                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-core p-8">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upload New Photo</h2>

                    <form onSubmit={submit} className="space-y-6">

                        {/* Title / Alt Text */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Image Title / Alt Text</label>
                            <Input
                                type="text"
                                value={data.alt}
                                onChange={e => setData('alt', e.target.value)}
                                className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                placeholder="e.g. Sports Day 2026"
                            />
                            {errors.alt && <p className="text-red-500 text-xs mt-1">{errors.alt}</p>}

                        </div>

                        {/* Image Uploader */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Photo</label>
                            <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${preview ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'}`}>

                                {preview ? (
                                    <div className="relative">
                                        <img src={preview} className="max-h-64 mx-auto rounded-lg shadow-sm" alt="Preview" />
                                        <button
                                            type="button"
                                            onClick={() => { setPreview(null); setData('src', null); }}
                                            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                                        >
                                            <HiTrash />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <HiCloudUpload className="text-4xl text-gray-400 mb-3" />
                                        <label htmlFor="file-upload" className="cursor-pointer">
                                            <span className="text-blue-600 dark:text-brand-core font-semibold hover:underline">Click Here to upload</span>

                                            <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleImage} />
                                        </label>
                                        <p className="text-xs text-gray-400 mt-2">PNG, JPG , Webp up to 1MB</p>
                                    </div>
                                )}
                            </div>
                            {errors.src && <p className="text-red-500 text-xs mt-1">{errors.src}</p>}
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-brand-core dark:hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all disabled:opacity-50"
                            >
                                {processing ? 'Uploading...' : 'Save Photo'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}