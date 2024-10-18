<?php

use App\Http\Controllers\CVController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index']);
Route::get('/download-cv', [CVController::class, 'download'])->name('download-cv');
