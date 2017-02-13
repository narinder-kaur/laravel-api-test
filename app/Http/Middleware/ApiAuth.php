<?php

namespace App\Http\Middleware;

use Closure;

class ApiAuth {

    public function handle($request, Closure $next, $guard = null) {
        return $next($request);
    }

}
