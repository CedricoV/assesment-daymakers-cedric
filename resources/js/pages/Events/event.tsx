import { dashboard, login, register } from '@/routes';
import { type SharedData, Event } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import FrontLayout from '@/layouts/front-layout';

export default function Events({
    event
}: {
    event: Event
}) {

    return (
        <>
            <Head title="Events" />
            <FrontLayout>

                <h1 className="text-2xl font-bold mb-4">Upcoming event</h1>

                <div>
                    <section className="relative bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${event.hero_image_path ? `/storage/${event.hero_image_path}` : '/storage/hero-images/default-hero.png'})` }}>

                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative flex flex-col items-center justify-center h-full text-white px-6">
                            <h1 className="text-3xl md:text-7xl font-bold text-center mb-3 md:mb-6 drop-shadow-lg">
                                {event.title}
                            </h1>
                            <p className="text-sm md:text-2xl text-center mb-4 opacity-90 drop-shadow-md max-w-2xl">
                                {event.subtitle}
                            </p>
                            <Link href={`/events/${event.id}/signup`}
                                className="px-6 md:px-8 py-2 md:py-4 bg-blue-400 hover:bg-blue-700 text-sm md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-xl">
                                Book your ticket
                            </Link>
                        </div>
                    </section>
                    <section className='mt-4 p-1 bg-white shadow rounded p-4'>
                        <div>
                            <div>
                                <h1 className='text-3xl font-bold text-grey-200'>
                                    {event.title}
                                </h1>
                                <p className='text-sm mt-1 text-gray-700'>{event.location}</p>
                                <p className='text-sm text-gray-700'>{new Date(event.starts_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' })}, {new Date(event.starts_at).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })} {event.ends_at ? 'tot ' + new Date(event?.ends_at).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }) : ''}</p>

                            </div>
                            <div className='mt-6'>
                                <h2 className='text-xl font-bold'>Description</h2>
                                <p className='mt-1'>
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </FrontLayout >
        </>
    );
}
