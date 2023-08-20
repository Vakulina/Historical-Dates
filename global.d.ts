declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare namespace JSX {
  interface IntrinsicElements {
    'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      navigation?: string;
      pagination?: string;
      init?:'false'
    };
    'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      lazy?: string;
    };
  }
}
declare module '*.svg' {
  const content: string;
  export default content;
}
