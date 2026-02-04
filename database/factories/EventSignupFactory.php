<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EventSignup>
 */
class EventSignupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = EventSignup::class;

    public function definition(): array
    {
        return [
            'event_id' => Event::factory(),
            'name'     => $this->faker->name(),
            'email'    => $this->faker->unique()->safeEmail(),
        ];
    }
}
