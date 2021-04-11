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

# DOCKER-VERSION 19.03.1-ce, build 74b1e89e8a

# Specify build image
ARG GO_VERSION=1.11.4
ARG BUILD_TARGET=alpine3.8

# Pull builder base image
FROM golang:${GO_VERSION}-${BUILD_TARGET} AS htmltestbuilder

# Set build variables
ARG HTMLTEST_VERSION=0.10.3
ENV CGO_ENABLED=0 \
    GOOS=linux \
    GO111MODULE=on

# Build from source using specified version
RUN \
  apk add --update --no-cache ca-certificates git musl-dev && \
  git clone https://github.com/wjdp/htmltest.git $GOPATH/src/github.com/wjdp/htmltest && \
  cd ${GOPATH:-$HOME/go}/src/github.com/wjdp/htmltest && \
  git checkout v$HTMLTEST_VERSION && \
  go mod download && \
  go install -installsuffix 'static' -ldflags "-X main.date=`date -u +%Y-%m-%dT%H:%M:%SZ` -X main.version=`git describe --tags`"

# Move compiled binary into own container
FROM scratch
COPY --from=htmltestbuilder /go/bin/htmltest /htmltest
ENTRYPOINT ["/htmltest"]
CMD ["-h"]
