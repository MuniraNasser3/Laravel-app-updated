<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        // Check if column exists before modifying
        if (Schema::hasColumn('workouts', 'user_id')) {
            Schema::table('workouts', function (Blueprint $table) {
                $table->unsignedBigInteger('user_id')->nullable()->change();
            });
        }
    }

    public function down(): void {
        if (Schema::hasColumn('workouts', 'user_id')) {
            Schema::table('workouts', function (Blueprint $table) {
                $table->unsignedBigInteger('user_id')->nullable(false)->change();
            });
        }
    }
};

