<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Event;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => 'password',
                'email_verified_at' => now(),
            ]
        );

        Event::create([
            'title'           => 'Zomermarkt Lelystad',
            'subtitle'        => 'Lokale producten, muziek en workshops',
            'description'     => 'Beleef de gezelligste markt van Flevoland met meer dan 50 kramen, live optredens en activiteiten voor kinderen.',
            'starts_at'       => date('Y-m-d H:i:s', strtotime('2026-04-12 10:00:00')),
            'ends_at'         => date('Y-m-d H:i:s', strtotime('2026-04-12 18:00:00')),
            'location'        => 'Stadhuisplein, 8232 DZ Lelystad',
            'hero_image_path' => 'hero-images/lelystad.jpg',
        ]);

        Event::factory()->count(10)->create();
    }
}
