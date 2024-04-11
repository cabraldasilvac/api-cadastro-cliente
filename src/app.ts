import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify'
import { routes } from './routes'

async function app(instance: FastifyInstance, opts: FastifyServerOptions, done: any) {
    instance.get('/', async (req: FastifyRequest, res: FastifyReply) => {
        res.status(200).send({
            hello: 'API Cadastro de Cliente',
        })
    })
    instance.register(routes, { prefix: '/' })
    done()
}

export default app
