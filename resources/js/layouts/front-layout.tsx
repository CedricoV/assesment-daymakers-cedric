import { dashboard, logout } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <nav className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link
                                href="/events"
                                className="text-xl font-semibold text-gray-900 dark:text-white"
                            >
                                Events app
                            </Link>
                        </div>
                        {auth.user && (
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {auth.user.name}
                                </span>
                                <form method="POST" action={logout().url}>
                                    <button
                                        type="submit"
                                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div className="min-h-screen flex">
                <div className="w-full max-w-3xl mx-auto px-4 py-8">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
