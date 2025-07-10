<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('workouts', function (Blueprint $table) {
        $table->string('name')->nullable();
        $table->string('type')->nullable();
        $table->integer('reps')->nullable();
        $table->integer('sets')->nullable();
        $table->float('weight')->nullable();
        $table->float('duration')->nullable();
        $table->text('notes')->nullable();
    });
}


    /**
     * Reverse the migrations.
     */
   public function down()
{
    Schema::table('workouts', function (Blueprint $table) {
        $table->dropColumn([
            'name', 'type', 'reps', 'sets', 'weight', 'duration', 'date', 'notes'
        ]);
    });
}

};
