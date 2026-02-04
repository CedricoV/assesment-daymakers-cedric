<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

        protected $fillable = [
        'title',
        'subtitle',
        'description',
        'starts_at',
        'ends_at',
        'location',
        'hero_image_path',
    ];

    protected $casts = [
        'starts_at' => 'datetime',
        'ends_at'   => 'datetime',
    ];

    public function signups()
    {
        return $this->hasMany(EventSignup::class);
    }
}
