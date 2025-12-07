# Use lightweight nginx image
FROM nginx:alpine

# Copy all files from src folder into nginx html folder
COPY src/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx (default command in image)
