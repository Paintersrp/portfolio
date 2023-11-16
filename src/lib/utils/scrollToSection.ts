export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (section) {
    const headerOffset = 24;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
