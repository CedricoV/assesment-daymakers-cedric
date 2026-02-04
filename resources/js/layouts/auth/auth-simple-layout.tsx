import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 dark:bg-gray-900">
            <div className="w-full max-w-md">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            Assessment App
                        </Link>
                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
