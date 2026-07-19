import useReveal from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', className = '', style, children }) {
  const [ref, isVisible] = useReveal();
  const cls = `reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`;

  return (
    <Tag ref={ref} className={cls} style={style}>
      {children}
    </Tag>
  );
}
