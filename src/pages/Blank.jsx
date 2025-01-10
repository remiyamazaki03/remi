export default function Blank() {
  return (
    <span>
      <title>{t("footer.tags.title")}</title>
      <meta name="description" content={t("footer.tags.description")} />
      <meta property="og:title" content={t("footer.tags.title")} />
      <meta property="og:description" content={t("footer.tags.description")} />
      <link rel="canonical" href="https://chameleon-studios.com/contact" />
    </span>
  );
}
