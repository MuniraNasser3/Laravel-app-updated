FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    zip unzip curl libpq-dev git libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo pdo_pgsql zip

# Set working directory
WORKDIR /var/www/html

# Copy existing application
COPY . .

# Install Composer dependencies
RUN curl -sS https://getcomposer.org/installer | php && \
    php composer.phar install

# Expose port and run Laravel server
EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
