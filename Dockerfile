# Image to start React App
# FROM node:alpine3.17
# WORKDIR /home/social-feed
# COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install
# COPY . .
# CMD ["npm", "start"]

# Image to build app and serve with nginx
FROM node:alpine3.17 AS builder
WORKDIR /home/social-feed
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /home/social-feed/build .