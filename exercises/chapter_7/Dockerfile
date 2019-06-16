FROM node:11-slim
WORKDIR src/api-server/server
COPY package.json ./
RUN npm install
COPY . ./src/api-server/server
cmd ["npm", "start"]

