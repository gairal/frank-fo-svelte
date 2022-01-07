import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

import * as tailwindConfig from "./tailwind.config.cjs";

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
