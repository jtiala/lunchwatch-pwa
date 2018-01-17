FROM node:9.4-alpine

# Install apk packages
RUN apk update && \
    apk upgrade && \
    apk add bash yarn && \
    rm -rf /var/cache/apk/*

# Copy app and install yarn packages
WORKDIR /app
COPY . .
RUN yarn

# Entrypoint
COPY ./bin/entrypoint.sh /

# Node base template
WORKDIR /app

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]

CMD ["node"]
