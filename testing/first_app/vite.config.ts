/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      // Whether to include all files, including the untested ones into report.
      all: true,
      // Coverage Providers: "v8" or "istanbul" or your custom provider
      provider: 'v8',
      // Coverage reporters to use
      reporter: ['text', 'html'],
      // Coverage folder location
      reportsDirectory: './tests/unit/coverage',
      // List of files included in coverage as glob patterns
      include: ['src/**'],
      // List of files excluded from coverage as glob patterns.
      exclude: [...coverageConfigDefaults.exclude, 'src/main.tsx', 'src/**/*.d.ts'],
    },
    css: false,
  },
})
