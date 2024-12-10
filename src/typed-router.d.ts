/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...error]': RouteRecordInfo<'/[...error]', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/clients': RouteRecordInfo<'/clients', '/clients', Record<never, never>, Record<never, never>>,
    '/contact': RouteRecordInfo<'/contact', '/contact', Record<never, never>, Record<never, never>>,
    '/GdprPolicy': RouteRecordInfo<'/GdprPolicy', '/GdprPolicy', Record<never, never>, Record<never, never>>,
    '/knowhow': RouteRecordInfo<'/knowhow', '/knowhow', Record<never, never>, Record<never, never>>,
    '/portfolio': RouteRecordInfo<'/portfolio', '/portfolio', Record<never, never>, Record<never, never>>,
    '/project/[id]': RouteRecordInfo<'/project/[id]', '/project/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/services': RouteRecordInfo<'/services', '/services', Record<never, never>, Record<never, never>>,
    '/simulareCredit': RouteRecordInfo<'/simulareCredit', '/simulareCredit', Record<never, never>, Record<never, never>>,
    '/simulator': RouteRecordInfo<'/simulator', '/simulator', Record<never, never>, Record<never, never>>,
    '/sink': RouteRecordInfo<'/sink', '/sink', Record<never, never>, Record<never, never>>,
  }
}