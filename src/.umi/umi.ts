// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import './core/polyfill';
import '/Users/capoo/React/src/global.less';
import '/Users/capoo/React/src/global.tsx';
import { renderClient } from '/Users/capoo/React/node_modules/@umijs/renderer-react';
import { getRoutes } from './core/route';
import { createPluginManager } from './core/plugin';
import { createHistory } from './core/history';
import Loading from '/Users/capoo/React/src/loading.tsx';
import { ApplyPluginsType } from 'umi';


const publicPath = "/";
const runtimePublicPath = false;

async function render() {
  const pluginManager = createPluginManager();
  const { routes, routeComponents } = await getRoutes(pluginManager);

  // allow user to extend routes
  await pluginManager.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: {
      routes,
      routeComponents,
    },
  });

  const contextOpts = pluginManager.applyPlugins({
    key: 'modifyContextOpts',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });

  const basename = contextOpts.basename || '/';
  const historyType = contextOpts.historyType || 'browser';

  const history = createHistory({
    type: historyType,
    basename,
    ...contextOpts.historyOpts,
  });

  return (pluginManager.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue() {
      const context = {
        routes,
        routeComponents,
        pluginManager,
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        loadingComponent: Loading,
        publicPath,
        runtimePublicPath,
        history,
        historyType,
        basename,
        callback: contextOpts.callback,
      };
      const modifiedContext = pluginManager.applyPlugins({
        key: 'modifyClientRenderOpts',
        type: ApplyPluginsType.modify,
        initialValue: context,
      });
      return renderClient(modifiedContext);
    },
  }))();
}


render();

window.g_umi = {
  version: '4.0.88',
};
