interface Props {
  text: string;
  light?: boolean;
  center?: boolean;
}

const SectionLabel = ({ text, light = false, center = false }: Props) => (
  <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
    <span className="inline-block w-2 h-2 bg-brand-yellow shrink-0" />
    <span className={`section-label-text ${light ? "text-gray-400" : "text-brand-muted"}`}>{text}</span>
  </div>
);

export default SectionLabel;
