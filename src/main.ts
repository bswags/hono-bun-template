import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"

const app = new Hono()

app.use(cors())
app.use(logger())

/**
 * Health check
 */

app.get("/", (c) => {
  return c.text("gm")
})

export default {
  fetch: app.fetch,
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
}
