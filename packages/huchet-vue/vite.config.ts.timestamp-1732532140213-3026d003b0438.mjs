// vite.config.ts
import { resolve } from "node:path";
import Vue from "file:///Users/esoub/dev/p/huchet-vue/node_modules/.pnpm/@vitejs+plugin-vue@5.2.0_vite@5.4.11_@types+node@22.9.3_terser@5.36.0__vue@3.5.13_typescript@5.7.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///Users/esoub/dev/p/huchet-vue/node_modules/.pnpm/vite@5.4.11_@types+node@22.9.3_terser@5.36.0/node_modules/vite/dist/node/index.js";
import Dts from "file:///Users/esoub/dev/p/huchet-vue/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.9.3_rollup@4.27.4_typescript@5.7.2_vite@5.4.11_@types+node@22.9.3_terser@5.36.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/esoub/dev/p/huchet-vue/packages/huchet-vue";
var vite_config_default = defineConfig({
  plugins: [Vue(), Dts({
    tsconfigPath: resolve(__vite_injected_original_dirname, "tsconfig.app.json")
  })],
  build: {
    lib: {
      formats: ["es"],
      name: "huchet-vue",
      fileName: (_, name) => {
        return `${name}.mjs`;
      },
      entry: {
        index: resolve(__vite_injected_original_dirname, "src/index.ts"),
        resolver: resolve(__vite_injected_original_dirname, "src/resolver.ts"),
        nuxt: resolve(__vite_injected_original_dirname, "src/nuxt.ts")
      }
    },
    rollupOptions: {
      external: ["vue", "@nuxt/kit"]
    }
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZXNvdWIvZGV2L3AvaHVjaGV0LXZ1ZS9wYWNrYWdlcy9odWNoZXQtdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZXNvdWIvZGV2L3AvaHVjaGV0LXZ1ZS9wYWNrYWdlcy9odWNoZXQtdnVlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9lc291Yi9kZXYvcC9odWNoZXQtdnVlL3BhY2thZ2VzL2h1Y2hldC12dWUvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgRHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1Z1ZSgpLCBEdHMoe1xuICAgIHRzY29uZmlnUGF0aDogcmVzb2x2ZShfX2Rpcm5hbWUsICd0c2NvbmZpZy5hcHAuanNvbicpLFxuICB9KV0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgICBuYW1lOiAnaHVjaGV0LXZ1ZScsXG4gICAgICBmaWxlTmFtZTogKF8sIG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke25hbWV9Lm1qc2BcbiAgICAgIH0sXG4gICAgICBlbnRyeToge1xuICAgICAgICBpbmRleDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgICAgcmVzb2x2ZXI6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3Jlc29sdmVyLnRzJyksXG4gICAgICAgIG51eHQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL251eHQudHMnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWyd2dWUnLCAnQG51eHQva2l0J10sXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBTGhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSTtBQUFBLElBQ25CLGNBQWMsUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxFQUN0RCxDQUFDLENBQUM7QUFBQSxFQUNGLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsR0FBRyxTQUFTO0FBQ3JCLGVBQU8sR0FBRyxJQUFJO0FBQUEsTUFDaEI7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsUUFDeEMsVUFBVSxRQUFRLGtDQUFXLGlCQUFpQjtBQUFBLFFBQzlDLE1BQU0sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDeEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTyxXQUFXO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
