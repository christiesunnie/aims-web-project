/* eslint-disable @typescript-eslint/no-explicit-any */
import { rest } from 'msw';

import accuralBanks from './data/accrual_banks.json';
import eeRequests from './data/employee_requests.json';
import eeSchedule from './data/employee_schedule.json';

const handlers = [
  // Handles a GET employee read schedule
  rest.get('/api/schedule', (req: any, res: any, ctx: any) =>
    res(ctx.status(200), ctx.delay(), ctx.json(eeSchedule))
  ),

  // Handles a GET employee time requests
  rest.get('/api/time-requests', (req: any, res: any, ctx: any) =>
    res(ctx.status(200), ctx.delay(), ctx.json(eeRequests))
  ),

  // Handles a GET accural banks
  rest.get('/api/accural-banks', (req: any, res: any, ctx: any) =>
    res(ctx.status(200), ctx.delay(), ctx.json(accuralBanks))
  ),
];

export default handlers;
