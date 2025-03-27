# Use the official Nginx image
FROM nginx:latest

# Copy HTML files to Nginx's default directory
COPY html /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]