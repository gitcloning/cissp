#
# Copyright (C) 2019  Josh Habdas <jhabdas@protonmail.com>
#
# This file is part of After Dark.
#
# After Dark is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# After Dark is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#

# DOCKER-VERSION 19.03.5, build 633a0ea

# Specify build image
ARG GO_VERSION=1.13.4
ARG BUILD_TARGET=alpine3.10

# Pull builder base image
FROM golang:${GO_VERSION}-${BUILD_TARGET} AS hugobuilder

# Set environment variables
ENV HUGO_VERSION=0.61.0 \
    CGO_ENABLED=1 \
    GOOS=linux \
    GO111MODULE=on \
    BUILD_TAGS="extended"

# Build from source using specified version
RUN \
  apk add --update --no-cache git gcc g++ && \
  git clone https://github.com/gohugoio/hugo.git $GOPATH/src/github.com/gohugoio/hugo && \
  cd ${GOPATH:-$HOME/go}/src/github.com/gohugoio/hugo && \
  git checkout v$HUGO_VERSION && \
  go install -ldflags '-s -w -extldflags "-static"' -tags ${BUILD_TAGS}

# Move compiled binary into own container
FROM scratch
COPY --from=hugobuilder /go/bin/hugo /hugo
ENTRYPOINT ["/hugo"]
CMD ["--help"]
