#!/usr/bin/env python3
"""
इतिहास Anime — Security-Hardened Web Server
Implements OWASP Security Headers, Directory Traversal Protection, and Local Hosting
"""

import http.server
import socketserver
import os
import sys
import webbrowser
import urllib.parse
from pathlib import Path

PORT = 8080
DIRECTORY = Path(__file__).resolve().parent

class SecureHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def end_headers(self):
        # 1. Content Security Policy (CSP) - Prevents XSS, Malicious Script Injection
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline'; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data:; "
            "connect-src 'self'; "
            "frame-ancestors 'none'; "
            "base-uri 'self'; "
            "form-action 'self';"
        )
        # 2. Prevent Clickjacking
        self.send_header("X-Frame-Options", "DENY")
        # 3. Prevent MIME Sniffing attacks
        self.send_header("X-Content-Type-Options", "nosniff")
        # 4. Referrer Policy
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        # 5. XSS Protection for legacy browsers
        self.send_header("X-XSS-Protection", "1; mode=block")
        # 6. Restrict Sensitive Device APIs
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()")
        # 7. Cross-Origin Protections
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        # 8. Cache-Control for assets
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        
        super().end_headers()

    def translate_path(self, path):
        """
        Cybersecurity Hardening: Prevent Directory Traversal Attacks (../)
        """
        clean_path = urllib.parse.unquote(path.split('?', 1)[0].split('#', 1)[0])
        resolved_path = (DIRECTORY / clean_path.lstrip('/')).resolve()

        # Ensure the requested path is strictly within the allowed project directory
        try:
            resolved_path.relative_to(DIRECTORY)
        except ValueError:
            # Traversal attempt detected
            return str(DIRECTORY / "403_forbidden")

        if resolved_path.is_dir():
            return str(resolved_path / "index.html")
        return str(resolved_path)

    def log_message(self, format, *args):
        # Clean logging without leaking internal server signatures
        sys.stderr.write(f"[SecureServer] {self.address_string()} - {format % args}\n")

def run():
    os.chdir(DIRECTORY)
    # Enable address reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("127.0.0.1", PORT), SecureHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}/"
        print("=" * 60)
        print("🛡️  इतिहास Anime — Security-Hardened Web Server Running")
        print(f"🔗  URL: {url}")
        print("🔒  Cybersecurity Protections Active:")
        print("    • Content-Security-Policy (CSP) Enabled")
        print("    • Anti-Clickjacking (X-Frame-Options: DENY)")
        print("    • Anti-MIME Sniffing (X-Content-Type-Options: nosniff)")
        print("    • Anti-Directory Traversal Path Sanitization")
        print("    • Permissions-Policy Device Lockdown")
        print("=" * 60)
        print("Press Ctrl+C to stop the server.")
        
        # Auto-open browser
        try:
            webbrowser.open(url)
        except Exception:
            pass
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    run()
