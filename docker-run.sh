#!/bin/bash

# Docker setup for Ice Website

echo "🚀 Ice Website Docker Setup"
echo "=========================="

case "$1" in
  "prod"|"production")
    echo "Starting production build..."
    docker-compose up --build -d
    echo "✅ Production server running on http://localhost"
    ;;
  "dev"|"development")
    echo "Starting development server..."
    docker-compose --profile dev up --build -d
    echo "✅ Development server running on http://localhost:3001"
    ;;
  "stop")
    echo "Stopping all containers..."
    docker-compose down
    echo "✅ All containers stopped"
    ;;
  "logs")
    echo "Showing logs..."
    docker-compose logs -f
    ;;
  "clean")
    echo "Cleaning up Docker resources..."
    docker-compose down -v --rmi all
    docker system prune -f
    echo "✅ Cleanup complete"
    ;;
  *)
    echo "Usage: $0 {prod|dev|stop|logs|clean}"
    echo ""
    echo "Commands:"
    echo "  prod, production  - Start production build"
    echo "  dev, development  - Start development server"
    echo "  stop              - Stop all containers"
    echo "  logs              - Show container logs"
    echo "  clean             - Clean up Docker resources"
    echo ""
    echo "Examples:"
    echo "  $0 prod           # Start production"
    echo "  $0 dev            # Start development"
    echo "  $0 stop           # Stop containers"
    ;;
esac 