FROM node:18.18.1-alpine as builder
 
 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
 
 
#im install the node package
RUN npm ci --legacy-peer-deps
#just copying the rest of the code base
COPY . .
RUN npm run build
 
 
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
 