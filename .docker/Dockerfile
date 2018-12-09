FROM mhart/alpine-node:10.4

RUN npm install -g nodemon npm@latest

RUN mkdir -p /mercari-markdown

WORKDIR /mercari-markdown

COPY . /mercari-markdown

RUN npm ci

CMD ["npm", "run", "dev"]