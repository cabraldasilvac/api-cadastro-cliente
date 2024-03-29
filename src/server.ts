import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

// Registre o plugin CORS
app.register(cors)

// Registre suas rotas
app.register(routes)

// Não chame app.listen() diretamente

// Exporte app para uso com Vercel
export default app
