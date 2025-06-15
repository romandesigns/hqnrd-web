'use client'
import React from 'react'
import clsx from 'clsx'

// Color mapping for Tailwind-safe classes
const colorMap = {
  yellow: 'bg-yellow-400 decoration-yellow-400',
  pink: 'bg-pink-400 decoration-pink-400',
  blue: 'bg-blue-400 decoration-blue-400',
  emerald: 'bg-emerald-400 decoration-emerald-400',
  rose: 'bg-rose-400 decoration-rose-400',
  indigo: 'bg-indigo-400 decoration-indigo-400',
}

// Supported Tailwind decoration styles
const decorationStyleMap = {
  solid: 'decoration-solid',
  double: 'decoration-double',
  dotted: 'decoration-dotted',
  dashed: 'decoration-dashed',
  wavy: 'decoration-wavy',
}

type HighlightType =
  | 'marker'
  | 'blob'
  | 'underline'
  | 'circle'
  | 'zigzag'
  | 'animated'

type DecorationStyle = keyof typeof decorationStyleMap

type HighlightProps = {
  children: React.ReactNode
  type?: HighlightType
  color?: keyof typeof colorMap
  intensity?: 'soft' | 'normal' | 'strong'
  animated?: boolean
  underlineStyle?: DecorationStyle
}

export function Highlight({
  children,
  type = 'marker',
  color = 'yellow',
  intensity = 'normal',
  animated = false,
  underlineStyle = 'solid',
}: HighlightProps) {
  const base = 'relative inline-block'

  const opacityMap = {
    soft: 'opacity-30',
    normal: 'opacity-60',
    strong: 'opacity-100',
  }

  const colorClasses = colorMap[color] ?? colorMap['yellow']
  const bg = colorClasses.split(' ')[0] // bg-color
  const deco = colorClasses.split(' ')[1] // decoration-color
  const decoStyle =
    decorationStyleMap[underlineStyle] ?? decorationStyleMap['solid']

  const styles: Record<string, string> = {
    underline: clsx(
      `underline decoration-4 underline-offset-4 ${deco} ${decoStyle}`,
    ),
    marker: clsx(
      `after:content-[''] after:absolute after:inset-0 ${bg} after:rounded-sm after:-z-10 px-1 py-0.5`,
      opacityMap[intensity],
      animated ? 'after:animate-pulse' : '',
    ),
    blob: clsx(
      `after:content-[''] after:absolute after:inset-0 ${bg} after:rounded-full after:-z-10 px-3 py-1`,
      opacityMap[intensity],
      animated ? 'after:animate-pulse' : '',
    ),
    circle: clsx(
      `after:content-[''] after:absolute after:inset-0 ${bg} after:rounded-full after:-z-10 px-2 py-1`,
      opacityMap[intensity],
      animated ? 'after:animate-pulse' : '',
    ),
    zigzag: clsx(
      `after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1 ${bg} after:-skew-x-12 after:-z-10 px-1 py-0.5`,
      opacityMap[intensity],
      animated ? 'after:animate-pulse' : '',
    ),
    animated: clsx(
      `after:content-[''] after:absolute after:inset-0 ${bg} after:rounded-md after:-z-10 px-2 py-1 after:animate-pulse`,
      opacityMap[intensity],
    ),
  }

  return <span className={clsx(base, styles[type])}>{children}</span>
}
