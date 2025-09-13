<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{

  protected $fillable = [
        'background_image',
        'profile_image',
        'title',
        'typed_texts',
        'description',
        'button_text',
        'button_link'
    ];

    protected $casts = [
        'typed_texts' => 'array',
    ];


}
