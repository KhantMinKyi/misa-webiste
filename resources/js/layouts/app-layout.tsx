import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, type ReactNode } from 'react';
import { Toaster, toast } from 'react-hot-toast';
interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const { flash } = usePage().props as any;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                id: 'flash-success',
                duration: 4000
            });
        }

        if (flash?.error) {
            toast.error(flash.error, {
                id: 'flash-error',
                duration: 5000
            });
        }
    }, [flash]);
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            <Toaster position="top-right" />
            {children}
        </AppLayoutTemplate>
    );
};
