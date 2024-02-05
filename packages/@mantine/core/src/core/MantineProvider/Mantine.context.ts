import { createContext, useContext } from 'react';
import type { MantineColorSchemeManager } from './color-scheme-managers';
import { ConvertCSSVariablesInput } from './convert-css-variables';
import type { MantineColorScheme, MantineTheme } from './theme.types';

interface MantineContextValue {
  colorScheme: MantineColorScheme;
  setColorScheme: (colorScheme: MantineColorScheme) => void;
  clearColorScheme: () => void;
  colorSchemeManager: MantineColorSchemeManager;
  getRootElement: () => HTMLElement | undefined;
  classNamesPrefix: string;
  getStyleNonce?: () => string | undefined;
  cssVariablesResolver?: (theme: MantineTheme) => ConvertCSSVariablesInput;
  cssVariablesSelector: string;
  withStaticClasses: boolean;
}

export const MantineContext = createContext<MantineContextValue | null>(null);

export function useMantineContext() {
  const ctx = useContext(MantineContext);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return ctx;
}

export function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}

export function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}

export function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}

export function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}
