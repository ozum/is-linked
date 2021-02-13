import topPkgDir from "top-pkg-dir";
import { promises as fs } from "fs";
import { join } from "path";
import globalDirs from "global-dirs";

let topPackageName: string;

/**
 * Fetches package name from top-most `package.json`.
 */
async function fetchTopPackageName(): Promise<string> {
  if (topPackageName === undefined) {
    const packagePath = join(await topPkgDir(), "package.json");
    const packageData = JSON.parse(await fs.readFile(packagePath, { encoding: "utf8" }));
    topPackageName = packageData.name;
  }
  return topPackageName;
}

/**
 * Returns whether a module is linked by `npm` or `yarn`. If no module name is provided, top-most package name is used.
 *
 * @param module is the name of the module to check. Defaults to top-most package name.
 * @returns whether module is linked.
 */
export default async function isLinked(module?: string): Promise<boolean> {
  const packageName = module ?? (await fetchTopPackageName());
  try {
    await fs.lstat(join(globalDirs.npm.packages, packageName));
  } catch (npmError) {
    try {
      if (npmError.code === "ENOENT") await fs.lstat(join(globalDirs.yarn.packages, packageName));
      throw npmError;
    } catch (yarnError) {
      if (yarnError.code === "ENOENT") return false;
      throw yarnError;
    }
  }
  return true;
}
