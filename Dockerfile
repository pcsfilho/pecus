FROM node:20

RUN mkdir -p /pecus/:/app/node_modules
RUN chown -R node:node /pecus/:/app

WORKDIR /app

COPY package*.json ./

# RUN npm install

COPY . .

COPY --chown=node:node . .

USER root

EXPOSE 3000


CMD [ "sleep", "5000000" ]
