FROM node:21
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
CMD [ "npm", "start" ]

