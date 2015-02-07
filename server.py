import http.server
import socketserver
import sys

sys.stderr = open('Result.txt', 'w')

PORT = 80

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

print("serving at port", PORT)
httpd.serve_forever()
