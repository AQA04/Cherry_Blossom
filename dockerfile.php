# 1. Utilizar una imagen base que ya tenga Apache y PHP
FROM php:7.4-apache

# 2. Copiar el código de tu aplicación al directorio de documentos de Apache
# Asumiendo que tu código está en la raíz del repositorio, lo copiamos a /var/www/html
# donde Apache espera encontrar los archivos.
COPY . /var/www/html

# 3. Configurar Apache para que use index.php como archivo por defecto
# Esto es necesario si no hay un index.html
RUN echo "DirectoryIndex index.php index.html" > /etc/apache2/conf-enabled/dir.conf

# 4. Habilitar el módulo rewrite de Apache (común para aplicaciones PHP)
RUN a2enmod rewrite

# 5. Instalar extensiones comunes de PHP si tu aplicación las necesita (e.g., MySQL/mysqli)
# Puedes omitir esta línea si tu app no usa base de datos o si usa otra tecnología.
RUN docker-php-ext-install mysqli pdo pdo_mysql

# 6. AWS Fargate/EC2/EKS asumirán la gestión de puertos.
# La imagen base de Apache/PHP ya expone por defecto el puerto 80, por lo que no es necesario
# usar la instrucción EXPOSE, aunque es una buena práctica.
EXPOSE 80

# 7. Comando de inicio: La imagen base ya tiene el comando CMD definido para iniciar Apache
# Si necesitas un comando personalizado (ej. correr migraciones), lo definirías aquí.
# CMD ["apache2-foreground"]