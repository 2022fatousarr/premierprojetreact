import type React from "react";

export type Logo = {
  src: string;
  alt: string;
};

export interface MenuItem {
  name: string;
  link: string;
}

export interface ButtonProps {
  text: string;
  className?: string;
  link?: string;
}

export interface TitleSectionProps {
  titre: string;
  sousTitre: string;
  description?: string;
}

export interface CardProps {
  title?: string;
  content: string;
  icon: React.ReactNode;
  className?:string;
}


export interface BorderProps{
  title:string;
  border:string;
  content:string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface ImagesTypes {
  url: string;
  alt: string;
  temoignage: string;
}


export interface blogType {
  id: number;
  tag: string;
  title: string;
  description: string;
  src: string;
  link: string;
}