import section from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={section.section}>
      <h2 className={section.title}>{title}</h2>
      {children}
    </section>
  );
};
