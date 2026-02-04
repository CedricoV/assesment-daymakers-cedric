import { login } from '@/routes';
import { email } from '@/routes/password';
import { Form, Head, Link } from '@inertiajs/react';

import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />

            {status && (
                <div className="mb-4 rounded-md bg-green-50 p-3 text-center text-sm font-medium text-green-800 dark:bg-green-900/20 dark:text-green-200">
                    {status}
                </div>
            )}

            <div className="space-y-6">
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    autoFocus
                                    placeholder="email@example.com"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />

                                <InputError message={errors.email} />
                            </div>

                            <div className="my-6 flex items-center justify-start">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing
                                        ? 'Sending...'
                                        : 'Email password reset link'}
                                </button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="space-x-1 text-center text-sm text-gray-600 dark:text-gray-400">
                    <span>Or, return to</span>
                    <Link
                        href={login()}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                    >
                        log in
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
