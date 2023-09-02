import { TracerShim } from "@opentelemetry/shim-opentracing";
import { trace } from '@opentelemetry/api';

export function shim() {
    return new TracerShim(trace.getTracer('opentracing-shim'));
}