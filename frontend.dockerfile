FROM node:18.19-alpine3.18
RUN apk add g++ make py3-pip

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
WORKDIR /app

COPY . .

WORKDIR /app/packages/frontend

RUN npm ci
RUN npm run build

CMD ["npm", "run", "dev"]