import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Welcome to your dashboard. This is a barebones assessment
                    app.
                </p>
            </div>
        </AppLayout>
    );
}
