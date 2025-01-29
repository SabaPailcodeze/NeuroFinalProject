export interface ButtonProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProjectProps {
  numberCount: string;
  hText: string;
  pDescription: string;
  pTitle: string;
  pProfessio: string;
  image: string;
}

export interface HeadLineTextProps {
  hOneTitle: string;
  pTitle: string;
  strokeWidth?: string;
}

export interface CircleBtnProps {
  text: string;
  color: string;
}

export interface ReadButtonProps {
  text: string;
  onClick?: () => void;
}

export interface StudioServicesProps {
  pNumber: string;
  hText: string;
  top: string;
}
