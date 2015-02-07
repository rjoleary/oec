import sys
import http.server
from http.server import SimpleHTTPRequestHandler


HandlerClass = SimpleHTTPRequestHandler
ServerClass  = http.server.HTTPServer
Protocol     = "HTTP/1.0"

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8000
server_address = ('127.0.0.1', port)

HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)

sa = httpd.socket.getsockname()
print( "Serving HTTP on", sa[0], "port", sa[1], "...")


with open(r'C:\Users\samay.chawla\Desktop\oec\data\testing.txt',"rt") as in_file:
    text = in_file.read()

    print(text)
    def do_GET(self):
        self.wfile.write("Hello World !")
        return wfile
httpd.serve_forever()
