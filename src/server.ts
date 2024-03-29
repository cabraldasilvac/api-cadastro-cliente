import Fastity from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const app = Fastity({ logger: true })

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {
    await app.register(cors)
    await app.register(routes)

    try {
        await app.listen({ port: 3333 })
    } catch (err) {
        process.exit(1)
    }
}

start()

export default async (req: any, res: any) => {
    await app.ready()
    app.server.emit('request', req, res)
}
