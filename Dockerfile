FROM node:14.18.1 AS JJ

WORKDIR /src/app

COPY . .

RUN npm install npm@7.5.6
RUN npm install
RUN npm run build

FROM node:14.18.1
WORKDIR /src/app
COPY --from=JJ /src/app ./

EXPOSE 3000

CMD ["npm", "run", "start:dev"]