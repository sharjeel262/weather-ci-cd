# Use lightweight web server for static HTML
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
