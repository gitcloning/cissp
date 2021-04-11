#!/bin/sh
set -e

# Generate hashes for javascripts
for file in ./bpg*.js; do
  [ -e "$file" ] || continue
  echo $(openssl dgst -sha384 -binary $file | openssl base64 -A) > $file.sha384
done
