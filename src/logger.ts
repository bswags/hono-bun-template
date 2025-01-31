import pino from "pino"
import pretty from "pino-pretty"

const stream = pretty({
  levelFirst: true,
  colorize: true,
  ignore: "hostname,pid",
})

export const log =
  process.env.LOCAL === "true" || process.env.DEBUG_LOGGING === "true"
    ? pino({ level: "info" }, stream)
    : pino({ level: "info" })
