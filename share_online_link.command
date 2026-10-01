#!/bin/bash
cd "$(dirname "$0")"

echo "========================================================"
echo "🛡️  इतिहास Anime — Public Internet Link Generator"
echo "========================================================"
echo "Starting local secure server & establishing HTTPS tunnel..."

# Kill any existing server on 8080
pkill -f "http.server 8080" 2>/dev/null || true

# Start local server
python3 -m http.server 8080 &
SERVER_PID=$!

sleep 2

echo "🌐 Creating public shareable HTTPS link..."
echo "--------------------------------------------------------"
echo "Send the HTTPS link below to ANYONE on mobile/laptop!"
echo "--------------------------------------------------------"

# Start SSH tunnel and show link
ssh -p 443 -R0:localhost:8080 -o StrictHostKeyChecking=no a.pinggy.io

kill $SERVER_PID 2>/dev/null || true
