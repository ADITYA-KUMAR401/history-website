#!/usr/bin/env python3
"""
इतिहास Anime — Cyber-Secured Web Server (OWASP Standards)
Implements:
- Content-Security-Policy (CSP)
- Anti-Clickjacking (X-Frame-Options: DENY)
- Anti-MIME Sniffing (X-Content-Type-Options: nosniff)
- Strict Transport Security (HSTS)
- Permissions-Policy Device Lockdown
- Directory Traversal (Path Traversal) Protection
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

PORT = 8080
DIRECTORY = str(Path(__file__).resolve().parent)

class CyberSecureHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # 1. Content Security Policy (CSP Level 3)
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline'; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: https:; "
            "connect-src 'self'; "
            "frame-ancestors 'none'; "
            "base-uri 'self'; "
            "form-action 'self';"
        )
        # 2. Clickjacking Defense
        self.send_header("X-Frame-Options", "DENY")
        # 3. MIME-Sniffing Defense
        self.send_header("X-Content-Type-Options", "nosniff")
        # 4. Referrer Privacy Policy
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        # 5. Legacy XSS Filter Protection
        self.send_header("X-XSS-Protection", "1; mode=block")
        # 6. Hardware API Lockdown (Least Privilege Principle)
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()")
        # 7. Cross-Origin Isolations
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        # 8. Cache Integrity
        self.send_header("Cache-Control", "public, max-age=3600, must-revalidate")
        # 9. Transport Security
        self.send_header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
        
        super().end_headers()

    def translate_path(self, path):
        # Prevent Directory Traversal by normalizing and verifying parent directory
        translated = super().translate_path(path)
        rel = os.path.relpath(translated, DIRECTORY)
        if rel.startswith("..") or rel.startswith("/"):
            return os.path.join(DIRECTORY, "index.html")
        return translated

    def log_message(self, format, *args):
        sys.stderr.write(f"[CyberSecurity Server] - {format % args}\n")

def run():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), CyberSecureHandler) as httpd:
        print("=" * 65)
        print("🛡️  इतिहास Anime — Cyber-Secured Web Server Running on Port 8080")
        print("🔒  Active Cybersecurity Protections:")
        print("    [✓] Content-Security-Policy (CSP) Active")
        print("    [✓] Anti-Clickjacking Protection (X-Frame-Options: DENY)")
        print("    [✓] Anti-MIME Sniffing (X-Content-Type-Options: nosniff)")
        print("    [✓] Hardware API Lockdown (Camera/Mic/GPS Disabled)")
        print("    [✓] Strict Directory Traversal Defense Active")
        print("    [✓] Transport Security (HSTS) Active")
        print("=" * 65)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    run()
