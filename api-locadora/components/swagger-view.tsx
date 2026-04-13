"use client";

import SwaggerUI from "swagger-ui-react";
import { openApiSpec } from "@/lib/openapi";

export function SwaggerView() {
  return <SwaggerUI spec={openApiSpec} docExpansion="list" />;
}
