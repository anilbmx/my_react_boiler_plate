FROM node:18-alpine as builder

WORKDIR /web-app

RUN npm --version

COPY . .

RUN npm i --legacy-peer-deps

RUN npm run build

FROM nginx:1.19-alpine AS server

COPY --from=builder ./web-app/build /usr/share/nginx/html
COPY nginx.conf /etc/niginx/conf.d/default.conf

EXPOSE 9000