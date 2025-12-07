#!/usr/bin/env python3
import http.server
import socketserver
import os
from urllib.parse import unquote

PORT = 3000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Decode the path
        path = unquote(path)

        # Handle /assets route
        if path.startswith('/assets/'):
            # Remove /assets/ prefix and map to the actual directory
            asset_path = path[8:]  # Remove '/assets/'
            base_dir = '개인 페이지 & 공유된 페이지/태양 마을☀️'
            full_path = os.path.join(os.getcwd(), base_dir, asset_path)
            return full_path
        else:
            # Serve from public directory
            if path == '/':
                path = '/index.html'
            base_dir = 'public'
            # Remove leading slash
            if path.startswith('/'):
                path = path[1:]
            full_path = os.path.join(os.getcwd(), base_dir, path)
            return full_path

    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"🌟 태양 마을 웹사이트가 http://localhost:{PORT} 에서 실행 중입니다")
    httpd.serve_forever()
