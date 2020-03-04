FROM node:12.16-alpine as build

WORKDIR /user-service

COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.17.8

COPY --from=build /user-service/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
