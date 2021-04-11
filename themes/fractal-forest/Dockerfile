# DOCKER-VERSION 17.12.0-ce, build c97c6d6

# Pull alpine base image
FROM alpine:latest AS codecbuilder

# Configure build settings
ENV LIBBPG_VERSION=0.9.8 \
    CPU_CORES=1

# Fetch and extract bpg library
RUN cd /tmp && \
  wget https://bellard.org/bpg/libbpg-${LIBBPG_VERSION}.tar.gz && \
  mkdir -p /opt/libbpg && \
  tar --strip-components=1 -xzf libbpg-${LIBBPG_VERSION}.tar.gz -C /opt/libbpg && \
  rm -f libbpg-${LIBBPG_VERSION}.tar.gz

# Set current working directory
WORKDIR /opt/libbpg

# Set bpg build options
ENV USE_EMCC=y \
    USE_JCTVC=y \
    USE_X265=

# Install packages required to build codecs
RUN apk add --update --no-cache \
    build-base cmake libpng-dev libjpeg-turbo-dev \
    sdl-dev sdl_image-dev yasm && \
  echo http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories && \
  apk add --no-cache emscripten

# Compile codecs in intermediate container
RUN make -j ${CPU_CORES} && make install

# Generate js file integrity hashes
RUN apk add --update --no-cache openssl
COPY ./bin/generate-hashes.sh .
RUN chmod +x generate-hashes.sh && ./generate-hashes.sh

# Move codecs and hashes into busybox container
FROM busybox AS codecs
COPY --from=codecbuilder /usr/local/bin/bpg* /usr/local/bin/
COPY --from=codecbuilder /opt/libbpg/bpg*.js* /var/www/
WORKDIR /usr/local/bin
