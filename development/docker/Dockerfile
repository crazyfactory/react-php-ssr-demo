FROM php:7.2.5-fpm-alpine3.7

MAINTAINER Crazy Factory Trading Co. Ltd. <dev@crazy-factory.com>

ENV TERM=linux
ENV DEBIAN_FRONTEND=noninteractive

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PS1='\[\033[01;34m\][$(pwd)/]$ \[\033[00m\]'

# packages
RUN \
  apk add --update --no-cache \
    nodejs

# ---------------------- DEBUG START ----------------------
# special packages
RUN \
  apk add --update --no-cache \
    # for developer convienience
    mc \
    # for php core debugging
    gdb \
    valgrind

# extensions/composer
RUN \
  # install build dependencies
  apk add --update --no-cache --virtual .build-deps \
    autoconf \
    cmake \
    file \
    g++ \
    gcc \
    libc-dev \
    pcre-dev \
    make \
    git \
    pkgconf \
    re2c \
  # pecl extensions
  && pecl install \
    xdebug \
  && docker-php-ext-enable \
    xdebug \
  && apk del .build-deps

# debug settings
RUN \
  mkdir -m 777 -p /var/www/project/.debug \
  # reroute error log
  && ln -sf /dev/stderr /var/www/project/.debug/php-fpm-error.log

# ---------------------- DEBUG END ----------------------
