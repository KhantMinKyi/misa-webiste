import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
interface GalleryFormData {
    _method: string;
    alt: string;
    src: File | null;
}
export default function GalleryEdit({ gallery }: { gallery: any }) {

    // Fix: Use _method: 'put' to allow file upload on update
    const { data, setData, post, processing, errors } = useForm<GalleryFormData>({
        _method: 'put',
        alt: gallery.alt || '',
        src: null,
    });

    const [preview, setPreview] = useState(gallery.src);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Fix: Use post() instead of put(), targeting the update route
        // post(route('galleries.update', gallery.id));
        post('/admin/galleries/' + gallery.id);
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Gallery', href: '/admin/galleries' }, { title: 'Edit', href: '#' }]}>
            <Head title="Edit Photo" />

            <div className="py-12 w-7xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-bold mb-4">Edit Photo</h2>

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Title / Alt</label>
                            <input
                                type="text"
                                value={data.alt}
                                onChange={e => setData('alt', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                            {errors.alt && <p className="text-red-500 text-xs">{errors.alt}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Replace Image (Optional)</label>
                            <input
                                type="file"
                                onChange={e => {
                                    if (e.target.files?.[0]) {
                                        setData('src', e.target.files[0]);
                                        setPreview(URL.createObjectURL(e.target.files[0]));
                                    }
                                }}
                                className="mt-1 block w-full text-sm text-gray-500"
                            />
                            {/* Preview */}
                            <div className="mt-2">
                                <img src={preview} className="h-32 w-auto rounded border" alt="Preview" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Link
                                //  href={route('galleries.index')}
                                href={'/admin/galleries/'}
                                className="px-4 py-2 bg-gray-200 rounded text-gray-700">Cancel</Link>
                            <button type="submit" disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded">
                                {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}