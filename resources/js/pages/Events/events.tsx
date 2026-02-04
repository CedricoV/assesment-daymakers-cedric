import { dashboard, login, register } from '@/routes';
import { type SharedData, Event } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import FrontLayout from '@/layouts/front-layout';

export default function Events({
    events
}: {
    events : Event[]
}) {

    return (
        <>
            <Head title="Events" />
            <FrontLayout>

                <h1 className="text-2xl font-bold mb-4">Events</h1>

                <ul>
                    {events.map(event => (
                        <Link href={`/events/${event.id}`} className='not-first:p-4'>
                            <li key={event.id} className="bg-white shadow rounded p-4">
                                <h2 className="font-semibold text-lg">{event.title}</h2>

                                {event.subtitle && (
                                    <p className="text-gray-600 text-sm md:text-m">{event.subtitle}</p>
                                )}


                                <img
                                        src={event.hero_image_path ? `/storage/${event.hero_image_path}` : '/storage/hero-images/default-hero.png'}
                                        alt={event.title}
                                        className="mt-2 w-full max-h-48 object-cover rounded"
                                />
                                <p className="text-sm text-gray-500 mt-1 font-semibold"> 
                                    {new Date(event.starts_at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' })} {new Date(event.starts_at).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
                                     {event.ends_at ? ' - ' + new Date(event?.ends_at).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }) : ''}

                                    {event.location && <> at {event.location} </>}
                                </p>
                                
                            </li>
                        </Link>
                    ))}
                </ul>
            </FrontLayout >
        </>
    );
}
