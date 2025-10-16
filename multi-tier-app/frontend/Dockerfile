FROM nginx:1.25-alpine
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
