// #docplaster
// #docregion schematics-imports, schema-imports, workspace
import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';

import { strings, normalize, experimental } from '@angular-devkit/core';
// #enddocregion schematics-imports

import { Schema as MyServiceSchema } from './schema';
// #enddocregion schema-imports

export function myService(options: MyServiceSchema): Rule {
  return (tree: Tree) => {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    // 워크스페이스 설정 파일을 문자열로 변환합니다.
    const workspaceContent = workspaceConfig.toString();

    // 문자열을 JSON 객체로 파싱합니다.
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);
// #enddocregion workspace
// #docregion project-fallback
    if (!options.project) {
      options.project = workspace.defaultProject;
    }
// #enddocregion project-fallback

// #docregion project-info
    const projectName = options.project as string;

    const project = workspace.projects[projectName];

    const projectType = project.projectType === 'application' ? 'app' : 'lib';
// #enddocregion project-info

// #docregion path
    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }
// #enddocregion path

// #docregion template
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name
      }),
      move(normalize(options.path as string))
    ]);
// #enddocregion template

// #docregion chain
    return chain([
      mergeWith(templateSource)
    ]);
// #enddocregion chain
// #docregion workspace
  };
}
