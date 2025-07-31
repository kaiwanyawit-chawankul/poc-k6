// load_test.js
import http from 'k6/http';
import { check, sleep } from 'k6';
// Load config.json at the start of the test
const config = JSON.parse(open('./config.json'));
export const options = {
  // Key configurations for spike in this section
  stages: [
    { duration: '2m', target: 2000 }, // fast ramp-up to a high point
    // No plateau
    { duration: '1m', target: 0 }, // quick ramp-down to 0 users
  ],
};

export default function () {
    const url = `https://localhost:${config.port}/`;
    const urlRes = http.get(url);
    check(urlRes, { 'status returned 200': (r) => r.status == 200 })
    sleep(1);
}
