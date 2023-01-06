FROM node:lts-alpine as builder

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# 设置 nginx 作为默认命令启动
CMD ["nginx", "-g", "daemon off;"]

# 设置端口
EXPOSE 80