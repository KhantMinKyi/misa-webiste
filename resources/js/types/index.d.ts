import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
export type carouselDataType = {
    banner_image: string;
    top_sub_title: string;
    title: string;
    bottom_sub_title: string;
    routeLink?: string;
    lastTitle?: string;
};

export interface CategoryTag {
    id: number;
    title: string;
    type: string;
    created_user_id: number;
    updated_user_id?: number;
    status: number;
    created_user: User;
    updated_user?: User;
    related_posts_count?: number;
    created_at: string;
    updated_at: string;
}
export interface Post {
    type: PostSetting;
    post_type_id: number;
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    footer_description?: string;
    banner_img: string;
    images?: string;
    start_date?: date;
    end_date?: date;
    registration_fee?: string;
    award_description?: string;
    video_url?: string;
    location?: string;
    created_user: User;
    updated_user?: User;
    category_tags: PostCategoryTag[];
    status: number;
    category_tag_ids: string;
    created_at: string;
    updated_at: string;
}
