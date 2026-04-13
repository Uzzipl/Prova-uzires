declare module "swagger-ui-react" {
  import { ComponentType } from "react";

  type SwaggerUIProps = {
    spec: object;
    docExpansion?: "list" | "full" | "none";
  };

  const SwaggerUI: ComponentType<SwaggerUIProps>;

  export default SwaggerUI;
}
