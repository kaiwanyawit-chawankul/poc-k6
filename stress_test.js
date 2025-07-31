// load_test.js
import http from 'k6/http';
import { check, sleep } from 'k6';
// Load config.json at the start of the test
const config = JSON.parse(open('./config.json'));

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '10m', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '30m', target: 200 }, // stay at higher 200 users for 30 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
};

export default function () {
    const url = `https://localhost:${config.port}/`;
    const urlRes = http.get(url);
    check(urlRes, { 'status returned 200': (r) => r.status == 200 })
    sleep(1);
}
