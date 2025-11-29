import now from '~build/time'
import { sha, abbreviatedSha, committerDate, lastTag as latestTag, tag } from '~build/git'
import * as meta from '~build/meta'
import { name, version } from '~build/package'
import { readonly } from 'vue'

// poor man's unwrap
const unwrapModule = (obj: any) => JSON.parse(JSON.stringify(obj))

export const useBuildInfos = () => {
  const buildInfo = {
    meta: unwrapModule(meta),
    git: { sha, abbreviatedSha, committerDate, latestTag, tag },
    package: { name, version },
    time: now,
  }

  return readonly(buildInfo)
}
