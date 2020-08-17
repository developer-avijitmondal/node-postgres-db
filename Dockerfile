FROM node:10.15.0-alpine
EXPOSE 3000 9229

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm ci

COPY . /home/app

# RUN npm run build

# RUN npx sequelize-cli db:migrate

# CMD ./scripts/start.sh

CMD ["npm", "start"]
