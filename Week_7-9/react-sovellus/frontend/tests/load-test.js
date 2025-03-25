import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  let res = http.post('http://localhost:5000/users', JSON.stringify({ name: 'Test User', email: 'testuser@example.com' }), {
    headers: { 'Content-Type': 'application/json' },
  });
  check(res, { 'status was 201': (r) => r.status == 201 });
  sleep(1);
}