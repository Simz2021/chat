Prep:
node js
php 8.1
composer

npm install -g vite
npm install vite --save-dev

Create database chatapp
php artisan migrate:fresh --seed

npm run dev
php artisan serve
