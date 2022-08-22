# Stage 1 - Build app
FROM node:18.7-alpine as build
RUN apk add g++ make py3-pip
RUN npm install -g parcel-bundler
WORKDIR /app
ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
RUN rm -rf ./app/dist
RUN parcel build public/index.html --no-minify

# Stage 2 - Configure nginx
FROM nginx:1.17.8-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
