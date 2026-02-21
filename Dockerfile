FROM ghcr.io/getzola/zola:v0.22.0 AS zola

ARG LAST_FM_API_KEY
ENV LAST_FM_API_KEY=${LAST_FM_API_KEY}

COPY . /project
WORKDIR /project
RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:2
ENV SERVER_CACHE_CONTROL_HEADERS=false
WORKDIR /
COPY --from=zola /project/public /public
