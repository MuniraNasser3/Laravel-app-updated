<?php
namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;

class WorkoutController extends Controller
{
    public function index()
    {
        return Workout::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'type' => 'required|string',
            'reps' => 'required|integer',
            'sets' => 'required|integer',
            'weight' => 'required|numeric',
            'duration' => 'required|numeric',
            'date' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        return Workout::create($data); 
    }

    public function show($id)
    {
        return Workout::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $workout = Workout::findOrFail($id);
        $workout->update($request->all());
        return $workout;
    }

    public function destroy($id)
    {
        $workout = Workout::findOrFail($id);
        $workout->delete();
        return response()->json(['message' => 'Workout deleted']);
    }


    
}

