import { dashboard, login, register } from '@/routes';
import { type SharedData, Event } from '@/types';
import { Form } from '@inertiajs/react'
import { Head, Link, usePage } from '@inertiajs/react';
import FrontLayout from '@/layouts/front-layout';

export default function Events({
    event
}: {
    event: Event
}) {

    return (
        <>
            <Head title="Sign up" />
            <FrontLayout>
                <h1 className='text-2xl'>Sign up for event <span className="text-gray-400 font-bold">{event.title}</span></h1>
                <Form action={`/events/${event.id}/storeSignup`} method="post" className='max-w-md mt-7' >
                    {({
                        errors,
                    }) => (
                        <>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                        Full name
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="janesmith"
                                                className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                    {errors.name && <div className='text-red-600 text-sm mt-1 font-medium'>{errors.name}</div>}
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="email"
                                                name="email"
                                                type="text"
                                                placeholder="example@example.com"
                                                className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                    {errors.email && <div className='text-red-600 text-sm mt-1 font-medium'>{errors.email}</div>}
                                </div>
                            </div>

                            <div className="mt-8 items-center justify-end gap-x-6">
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign up
                                </button>
                            </div>
                        </>

                    )}
                </Form>
            </FrontLayout >
        </>
    );
}
