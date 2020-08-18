# FROM node:10.15.0-alpine
FROM node:latest

# EXPOSE 3000 9229

EXPOSE 3000 9229 5432

# WORKDIR /home/app

WORKDIR /

# COPY package.json /home/app/
# COPY package-lock.json /home/app/

COPY package*.json ./

RUN npm ci

# COPY . /home/app

COPY . .

# RUN npm run build

# RUN npx sequelize-cli db:migrate

CMD ./scripts/start.sh

# CMD ["npm", "start"]
