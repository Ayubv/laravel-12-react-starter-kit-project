<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('heroes', function (Blueprint $table) {
             $table->id();
            $table->string('background_image')->nullable(); // Background image path
            $table->string('profile_image')->nullable();    // Profile image path
            $table->string('title')->nullable();            // Example: "Hello, I'm Ayub Ali."
            $table->text('typed_texts')->nullable();         // JSON array of typed.js strings
            $table->text('description')->nullable();         // Hero paragraph
            $table->string('button_text')->nullable();       // CTA button text
            $table->string('button_link')->nullable();       // CTA button link
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('heroes');
    }
};
