<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

use App\Models\Event;
use App\Models\EventSignup;

Route::get('/', function () {
    return Inertia::render('Events/events', [
        'events' => Event::all(),
    ]);
})->name('home');

Route::get('/events', function () {
    return Inertia::render('Events/events', [
        'events' => Event::all(),
    ]);
})->name('events');


Route::get('/events/{id}', function ($id) {
    return Inertia::render('Events/event', [
        'event' => Event::find($id),
    ]);
});


Route::get('/events/{id}/signup', function ($id) {
    return Inertia::render('Events/signup', [
        'event' => Event::find($id),
    ]);
});

Route::post('/events/{id}/storeSignup', function($id) {

        request()->validate([
            'name'  => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                function ($attribute, $value, $fail) use ($id) {
                    if (EventSignup::where('event_id', $id)->where('email', $value)->exists()) {
                        $fail('You are already signed up for this event.');
                    }
                },
            ],
        ]);

        EventSignup::create([
            'event_id' => $id,
            'name'     => request('name'),
            'email'    => request('email'),
        ]);

        return redirect("/events");
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});