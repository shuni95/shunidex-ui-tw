FROM node:12-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
ENV PORT=3000
ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "start"]
