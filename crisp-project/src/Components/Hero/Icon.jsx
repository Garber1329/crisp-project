import sprite from "../../../public/symbol-defs-hero.svg";

export default function Icon({ name, width, height, className }) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#icon-${name}`}></use>
    </svg>
  );
}