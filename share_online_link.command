#!/bin/bash
cd "$(dirname "$0")"

echo "========================================================"
echo "🛡️  इतिहास Anime — Cyber-Secured Public Web Server"
echo "========================================================"
echo "Starting OWASP-Compliant Security Server with:"
echo "  [+] Content-Security-Policy (CSP) Active"
echo "  [+] Anti-Clickjacking (X-Frame-Options: DENY)"
echo "  [+] Anti-MIME Sniffing (nosniff)"
echo "  [+] Anti-Path Traversal Path Jail Active"
echo "  [+] Hardware Device API Lockdown"
echo "  [+] HTTPS End-to-End Encryption"
echo "--------------------------------------------------------"

# Kill any existing server on 8080
pkill -f "server.py" 2>/dev/null || true
pkill -f "http.server 8080" 2>/dev/null || true

# Start our dedicated Cybersecurity server
python3 server.py &
SERVER_PID=$!

sleep 2

echo "🌐 Creating Secure Public HTTPS Link..."
echo "--------------------------------------------------------"
echo "👉 SHARE THIS SECURE HTTPS LINK WITH ANYONE:"
echo "--------------------------------------------------------"

# Start encrypted HTTPS tunnel
ssh -p 443 -R0:localhost:8080 -o StrictHostKeyChecking=no a.pinggy.io

kill $SERVER_PID 2>/dev/null || true
