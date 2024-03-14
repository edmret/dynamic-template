FROM node:18.16-alpine3.18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
WORKDIR /app

COPY . .

WORKDIR /app/packages/notification-test-front

RUN npm i
RUN npm run build

CMD ["npm", "start"]