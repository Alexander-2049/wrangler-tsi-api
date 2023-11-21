import { Router } from 'itty-router';
import { RouterProps } from './types/RouterProps';
import fetchController from './controllers/fetchController';
import scheduleController from './controllers/scheduleController';
import groupsController from './controllers/groupsController';

const router = Router();

router.get('/fetch', async (request, props: RouterProps) => await fetchController(request, props));
router.get('/schedule', async (request, props: RouterProps) => await scheduleController(request, props));
router.get('/schedule/:group', async (request, props: RouterProps) => await scheduleController(request, props));
router.get('/groups', async (request, props: RouterProps) => await groupsController(request, props));

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
