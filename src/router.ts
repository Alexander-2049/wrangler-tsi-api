import { Router } from 'itty-router';
import { RouterProps } from './types/RouterProps';
import fetchController from './controllers/fetchController';

// now let's create a router (note the lack of "new")
const router = Router();

// GET collection index
router.get('/fetch', async (request, props: RouterProps) => await fetchController(request, props));

// GET item
router.get('/todos/:id', ({ params }) => new Response(`Todo #${params.id}`));

// POST to the collection (we'll use async here)
router.post('/todos', async (request) => {
	const content = await request.json();

	return new Response('Creating Todo: ' + JSON.stringify(content));
});

router.get('/env', (request, props: RouterProps) => new Response(props.env.LOGIN + " " + props.env.PASSWORD));

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
