import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function BoltLogoIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Godly"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.25 7H13.0029L6.00293 15L6.75293 9H3L10 1L9.25 7Z" fill="currentColor" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Plus"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8 2V8M8 14V8M8 8H2H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpinnerArcIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M10 2 A8 8 0 1 1 2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TypeIcon(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 2.69697C1 1.75976 1.75976 1 2.69697 1H4.81818C5.75539 1 6.51515 1.75976 6.51515 2.69697V4.81818C6.51515 5.75539 5.75539 6.51515 4.81818 6.51515H2.69697C1.75976 6.51515 1 5.75539 1 4.81818V2.69697Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 11.1818C1 10.2446 1.75976 9.48486 2.69697 9.48486H4.81818C5.75539 9.48486 6.51515 10.2446 6.51515 11.1818V13.303C6.51515 14.2403 5.75539 15 4.81818 15H2.69697C1.75976 15 1 14.2403 1 13.303V11.1818Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.48438 12.2424C9.48438 10.7195 10.719 9.48486 12.242 9.48486C13.7649 9.48486 14.9995 10.7195 14.9995 12.2424C14.9995 13.7654 13.7649 15 12.242 15C10.719 15 9.48438 13.7654 9.48438 12.2424Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.48438 2.69697C9.48438 1.75976 10.2441 1 11.1813 1H13.3026C14.2398 1 14.9995 1.75976 14.9995 2.69697V4.81818C14.9995 5.75539 14.2398 6.51515 13.3026 6.51515H11.1813C10.2441 6.51515 9.48438 5.75539 9.48438 4.81818V2.69697Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StyleIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 6.67569H14.6216" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 4.02704H13.1081" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9.32431H14.6216" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11.973H13.1081" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 1.37839V14.6216" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FontIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <polyline points="2.67 4.67 2.67 2.67 13.33 2.67 13.33 4.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="6" y1="13.33" x2="10" y2="13.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="2.67" x2="8" y2="13.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FrameworkIcon(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.51515 5.45455L4.56967 7.40004C4.23831 7.73137 4.23831 8.26863 4.56967 8.59996L6.51515 10.5455M9.48485 5.45455L11.4303 7.40004C11.7617 7.73137 11.7617 8.26863 11.4303 8.59996L9.48485 10.5455M2.69697 15H13.303C14.2403 15 15 14.2403 15 13.303V2.69697C15 1.75976 14.2403 1 13.303 1H2.69697C1.75976 1 1 1.75976 1 2.69697V13.303C1 14.2403 1.75976 15 2.69697 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HostingIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M1 4.51351C1 3.67762 1.67762 3 2.51351 3H13.4865C14.3224 3 15 3.67762 15 4.51351V8.48649H1V4.51351Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M1 8.48651H15V12.4595C15 13.2954 14.3224 13.973 13.4865 13.973H2.51351C1.67762 13.973 1 13.2954 1 12.4595V8.48651Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
      <path d="M3.8371 10.6621C4.15056 10.6621 4.40467 10.9163 4.40467 11.2297C4.40467 11.5432 4.15056 11.7973 3.8371 11.7973C3.52364 11.7973 3.26953 11.5432 3.26953 11.2297C3.26953 10.9163 3.52364 10.6621ZM3.8371 5.17566C4.15056 5.17566 4.40467 5.42977 4.40467 5.74323C4.40467 6.05668 4.15056 6.31079 3.8371 6.31079C3.52364 6.31079 3.26953 6.05668 3.26953 5.74323C3.26953 5.42977 3.52364 5.17566Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function CmsIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M5.78304 1H9.31831C9.71969 1 10.1047 1.15946 10.3885 1.4433L13.2857 4.34048C13.5695 4.62433 13.729 5.00929 13.729 5.4107V11.2162C13.729 12.0521 13.0514 12.7297 12.2155 12.7297H5.78304C4.94715 12.7297 4.26953 12.0521 4.26953 11.2162V2.51351C4.26953 1.67762 4.94715 1 5.78304 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.4595 12.7297V13.4865C11.4595 14.3224 10.7819 15 9.94595 15H3.51351C2.67762 15 2 14.3224 2 13.4865V4.78378C2 3.94789 2.67762 3.27026 3.51351 3.27026H4.27027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.94531 1V3.27027C9.94531 4.10616 10.6229 4.78378 11.4588 4.78378H13.7291" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AnimationIcon(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.70131 0.602992C9.79337 0.45132 10.0195 0.471093 10.0838 0.636459L10.4013 1.4522C10.4268 1.51787 10.4831 1.56675 10.5517 1.58292L11.4037 1.78382C11.5764 1.82454 11.6275 2.04563 11.4901 2.15795L10.8124 2.712C10.7578 2.7566 10.7287 2.82519 10.7345 2.89541L10.8067 3.7678C10.8214 3.94464 10.6269 4.0615 10.4776 3.96555L9.74122 3.49223C9.68196 3.45413 9.60771 3.44763 9.54271 3.47487L8.73541 3.81312C8.57167 3.88169 8.40048 3.73283 8.44561 3.56122L8.66818 2.71464C8.68608 2.64649 8.66938 2.57389 8.6234 2.52049L8.0522 1.85717C7.93641 1.72271 8.02505 1.51384 8.20223 1.50372L9.07616 1.45383C9.14647 1.44981 9.21035 1.41144 9.24692 1.3512L9.70131 0.602992Z" fill="currentColor" />
      <path d="M4.98497 12.1365C5.04933 11.9711 5.27537 11.9513 5.36747 12.103L5.82181 12.8513C5.85839 12.9115 5.92226 12.9498 5.99261 12.9539L6.86652 13.0038C7.0437 13.0139 7.13233 13.2228 7.01655 13.3572L6.44536 14.0205C6.39939 14.0739 6.38263 14.1465 6.40055 14.2147L6.62314 15.0612C6.66827 15.2328 6.497 15.3817 6.33337 15.3131L5.52602 14.9749C5.46103 14.9476 5.3868 14.9542 5.32752 14.9923L4.59117 15.4656C4.44191 15.5615 4.24741 15.4446 4.26205 15.2678L4.33427 14.3955C4.34008 14.3252 4.31097 14.2566 4.25641 14.212L3.57872 13.658C3.44134 13.5456 3.49238 13.3246 3.66509 13.2838L4.51708 13.0829C4.58566 13.0667 4.64189 13.0179 4.66745 12.9522L4.98497 12.1365Z" fill="currentColor" />
      <path d="M6.25 2.625C6.25 3.24632 5.74633 3.75 5.125 3.75C4.50368 3.75 4 3.24632 4 2.625C4 2.00368 4.50368 1.5 5.125 1.5C5.74633 1.5 6.25 2.00368 6.25 2.625Z" fill="currentColor" />
      <path d="M11.0664 13.625C11.0664 14.2463 10.5627 14.75 9.94141 14.75C9.32008 14.75 8.81641 14.2463 8.81641 13.625C8.81641 13.0037 9.32008 12.5 9.94141 12.5C10.5627 12.5 11.0664 13.0037 11.0664 13.625Z" fill="currentColor" />
      <path d="M10.8748 10.3762L11.2992 5.52603L13.4134 5.711C14.3063 5.78911 14.9668 6.57628 14.8887 7.46916C14.8105 8.36204 14.0234 9.02254 13.1305 8.94445L11.4309 8.79577M1.84544 10.7852L1 5.99042L3.09001 5.62189C3.9727 5.46625 4.81444 6.05564 4.97008 6.9383C5.12572 7.82105 4.53633 8.66273 3.65365 8.81842L1.97344 9.11466M10.3629 8.05775C10.3629 9.40222 9.27297 10.4921 7.92857 10.4921C6.5841 10.4921 5.49419 9.40222 5.49419 8.05775C5.49419 6.71327 6.5841 5.6234 7.92857 5.6234C9.27297 5.6234 10.3629 6.71327 10.3629 8.05775Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StylingIcon(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.93298 13.433 11.5 11.5 11.5C9.56702 11.5 8 9.93298 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
