#Imagen para backend en express

FROM node:12.18.3-alpine3.12
WORKDIR /nodejs
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run start
EXPOSE 3000
#inicia el servidor
CMD ["node", "index.js"]
