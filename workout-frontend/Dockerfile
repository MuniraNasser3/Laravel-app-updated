# Use an official Node.js image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite's custom port (3000 instead of default 5173)
EXPOSE 3000

# Start the Vite dev server on port 3000
CMD ["npm", "run", "dev", "--", "--host", "--port", "3000"]
