declare module 'web-vitals' {
    export function getCLS(onReport: (metric: CLSMetric) => void): void;
    export function getFID(onReport: (metric: FIDMetric) => void): void;
    export function getFCP(onReport: (metric: FCPMetric) => void): void;
    export function getLCP(onReport: (metric: LCPMetric) => void): void;
    export function getTTFB(onReport: (metric: TTFBMetric) => void): void;
  }
  