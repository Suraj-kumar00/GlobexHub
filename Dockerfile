# The Base Image
FROM node:18-alpine AS base
WORKDIR /app
COPY /package*.json ./

# Dependencies and Build
FROM base AS builder
COPY . .
RUN npm ci && npm run build 

# Production Image
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Use non-root user for security
USER node

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
