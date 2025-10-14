FROM ghcr.io/getzola/zola:v0.21.0 as zola

COPY . /project
WORKDIR /project
RUN ["zola", "build"]
