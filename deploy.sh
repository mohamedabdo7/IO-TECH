#!/bin/bash

# Deployment script for Next.js application on VPS with cPanel/WHM
# Make sure to run: chmod +x deploy.sh before executing

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Configuration - Update these variables according to your setup
CONTAINER_NAME="nextjs_app"
IMAGE_NAME="daleel-next"
PORT="4000"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed and running
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

if ! docker info &> /dev/null; then
    print_error "Docker is not running. Please start Docker service."
    exit 1
fi

print_status "Docker is available and running"

# Stop and remove existing container if it exists
if docker ps -a --format 'table {{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    print_status "Stopping existing container: ${CONTAINER_NAME}"
    docker stop ${CONTAINER_NAME} || true
    docker rm ${CONTAINER_NAME} || true
fi

# Remove existing image if it exists
if docker images --format 'table {{.Repository}}' | grep -q "^${IMAGE_NAME}$"; then
    print_status "Removing existing image: ${IMAGE_NAME}"
    docker rmi ${IMAGE_NAME} || true
fi

# Build the new image
print_status "Building Docker image: ${IMAGE_NAME}"
docker build -t ${IMAGE_NAME} .

# Run the new container
print_status "Starting new container: ${CONTAINER_NAME}"
docker run -d \
    --name ${CONTAINER_NAME} \
    --restart unless-stopped \
    -p ${PORT}:4000 \
    -e NODE_ENV=production \
    -e NEXT_TELEMETRY_DISABLED=1 \
    -e PORT=4000 \
    ${IMAGE_NAME}

# Wait a moment for the container to start
sleep 5

# Check if container is running
if docker ps --format 'table {{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    print_status "✅ Deployment successful!"
    print_status "Application is running on port ${PORT}"
    print_status "Health check: http://localhost:${PORT}/api/health"
    
    # Show container logs
    print_status "Recent logs:"
    docker logs --tail 10 ${CONTAINER_NAME}
else
    print_error "❌ Deployment failed! Container is not running."
    print_error "Check logs with: docker logs ${CONTAINER_NAME}"
    exit 1
fi

print_status "🎉 Deployment completed successfully!"
echo ""
echo "Useful commands:"
echo "  View logs: docker logs -f ${CONTAINER_NAME}"
echo "  Stop app:  docker stop ${CONTAINER_NAME}"
echo "  Start app: docker start ${CONTAINER_NAME}"
echo "  Remove:    docker rm -f ${CONTAINER_NAME}"
