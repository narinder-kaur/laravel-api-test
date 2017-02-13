<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Filesystem\Filesystem;

class ModuleServiceProvider extends ServiceProvider {
protected $files ;
    public function boot() {
        $this->files =  new Filesystem();
        if (is_dir(app_path() . '/Modules/')) {
            $modules = array_map('class_basename', $this->files->directories(app_path() . '/Modules/'));
            foreach ($modules as $module) {

                $routes = app_path() . '/Modules/' . $module . '/routes.php';
                $views = app_path() . '/Modules/' . $module . '/Views';
                $trans = app_path() . '/Modules/' . $module . '/Translations';
                if ($this->files->exists($routes))
                    include $routes;
                if ($this->files->isDirectory($views))
                    $this->loadViewsFrom($views, $module);
                if ($this->files->isDirectory($trans))
                    $this->loadTranslationsFrom($trans, $module);
            }
        }
    }

    public function register() {
        //
    }

}
