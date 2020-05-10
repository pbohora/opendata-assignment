#Dockerfile
# PROD CONFIG
FROM node as prod

RUN npm install webpack -g

WORKDIR /app

COPY package*.json ./

RUN npm install

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

RUN webpack

ENV NODE_ENV=production

CMD [ "npm", "start" ]

# DEV CONFIG
FROM prod as dev

EXPOSE 3006 3000

ENV NODE_ENV=development

RUN npm install -g nodemon

RUN npm install --only=dev

CMD [ "npm", "run", "dev" ]