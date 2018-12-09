FROM mhart/alpine-node:10.4

RUN npm install -g nodemon npm@latest

RUN mkdir -p /mercari-markdown

WORKDIR /mercari-markdown

COPY . /mercari-markdown

RUN npm ci

EXPOSE 8080

CMD ["npm", "run", "server"]