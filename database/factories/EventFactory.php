<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Event;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Event::class;

    public function definition(): array
    {
        $start = $this->faker->dateTimeBetween('+1 days', '+1 month');
        $end   = (clone $start)->modify('+'.rand(2, 8).' hours');

        return [
            'title'           => $this->faker->sentence(3),
            'subtitle'        => $this->faker->sentence(6),
            'description'     => $this->faker->paragraph(),
            'starts_at'       => $start,
            'ends_at'         => $end,
            'location'        => $this->faker->address(),
            'hero_image_path' => 'hero-images/default-hero.png', // or null / random
        ];
    }
}
