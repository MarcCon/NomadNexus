import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      city: Model,
    },

    seeds(server) {
      server.create("city", {
        id: "de8d",
        cityName: "Zaragoza",
        country: "Spain",
        emoji: "🇪🇸",
        date: "2024-03-15T08:29:31.231Z",
        notes: "",
        position: { lat: "41.623655390686395", lng: "-0.8789062500000001" },
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/cities", (schema) => {
        return schema.cities.all();
      });

      this.get("/cities/:id", (schema, request) => {
        let id = request.params.id;
        return schema.city.find(id);
      });

      this.post("/cities", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.city.create(attrs);
      });

      this.delete("/cities/:id", (schema, request) => {
        let id = request.params.id;
        let city = schema.city.find(id);
        city.destroy();
        return {};
      });

      this.passthrough((request) => {
        const whitelist = [/api.bigdatacloud.net/];

        return whitelist.some((regex) => regex.test(request.url));
      });

      this.passthrough();
    },
  });
}
