import { cdk } from 'projen'

import { preSynthesize, postSynthesize, getSharedOptions } from '../shared'

export class RootProject extends cdk.JsiiProject {
  constructor(options: any = {}) {
    super(
      getSharedOptions({
        defaultReleaseBranch: 'main',
        disableTsconfig: true,
        tsconfigDevFile: 'tsconfig.dev.json',
        author: 'Vlad Cos',
        authorAddress: 'vcosvic@gmail.com',
        jsiiVersion: '~5.0.0',
        name: '@vladcos/projen-base',
        repositoryUrl: 'https://github.com/chetzof/projen-base',
        tsconfigDev: {
          compilerOptions: {},
          include: ['templates/**/*.ts'],
        },
        bundledDeps: [
          'lodash',
          '@types/lodash',
          'type-fest',
          'app-root-path',
          'zod-to-json-schema',
          'zod',
          'replace-in-file',
          // 'vitest',
        ],
        peerDeps: ['projen'],
        deps: ['projen', 'replace-in-file'],
        ...options,
      }),
    )
  }
  override preSynthesize() {
    preSynthesize(this)
    super.preSynthesize()
  }

  override postSynthesize() {
    super.postSynthesize()
    postSynthesize(this)
  }
}
