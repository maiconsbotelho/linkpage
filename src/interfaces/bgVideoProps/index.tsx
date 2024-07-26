

export interface BgVideoProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  children?: React.ReactNode; // Adicionando a propriedade children
}
