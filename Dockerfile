FROM ghcr.io/getzola/zola:v0.22.0 AS zola

COPY . /project
WORKDIR /project
RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:2
ENV SERVER_CACHE_CONTROL_HEADERS=false
WORKDIR /
COPY --from=zola /project/public /public
