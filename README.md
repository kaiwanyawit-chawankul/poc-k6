
# Readings

 - https://grafana.com/docs/k6/latest/testing-guides/test-types/
 - https://grafana.com/docs/k6/latest/testing-guides/api-load-testing/


# Setup

## Run the API on Https

 - Open a terminal and navigate to the directory where your server will be running
cd /path/to/your/server/directory

 - Generate a private key file (key.pem)
openssl genrsa -out key.pem 2048

 - Generate a certificate signing request (CSR) file
openssl req -new -key key.pem -out csr.pem

 - Create a self-signed certificate file (cert.pem)
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

## Self sign problem

```
k6 run --insecure-skip-tls-verify your-script.js
```

```
K6_INSECURE_SKIP_TLS_VERIFY=1 k6 run your-script.js
```

Only use this for development. For production testing, always use valid certificates.

```
--insecure-skip-tls-verify disables all certificate verification, so it's not suitable for security-sensitive testing.
```




