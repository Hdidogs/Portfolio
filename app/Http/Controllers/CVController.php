<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CVController extends Controller
{
    public function download()
    {
        $filePath = resource_path('pdf/cv.pdf');

        if (file_exists($filePath)) {
            $file = file_get_contents($filePath);
            return response($file, 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="cv.pdf"'
            ]);
        } else {
            return response()->json(['error' => 'File not found.'], 404);
        }
    }
}
