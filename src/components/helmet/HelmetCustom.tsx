import { Helmet } from 'react-helmet-async'
import type { IMetaData } from 'src/interfaces/menu.interface'

const HelmetCustom = ({
  titleTab,
  metaData = {
    firstDesc: 'Bienvenido a la página principal de nuestro sitio web.',
    pageName: 'Inicio | Condor',
    secondDescription:
      'Explora nuestra página principal y descubre todo lo que tenemos para ofrecer.',
    urlDir: 'https://condor.com/',
    otherDesc: 'Vista previa del sitio principal',
    twiterDesc: 'Explora Explora Explora.',
  },
}: {
  titleTab: string
  metaData?: IMetaData
}) => {
  return (
    <Helmet>
      <title>{titleTab} </title>
      <meta name="description" content={metaData.firstDesc} />

      {/* Open Graph Metadata */}
      <meta property="og:title" content={metaData.pageName} />
      <meta property="og:description" content={metaData.secondDescription} />
      <meta property="og:url" content={metaData.urlDir} />
      <meta property="og:type" content="website" />

      {/* Imagen miniatura */}
      <meta
        property="og:image"
        content="https://www.shutterstock.com/image-vector/condor-vector-logo-bird-design-600nw-2325064027.jpg"
      />
      <meta property="og:image:alt" content={metaData.otherDesc} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Para Twitter (opcional, pero recomendable) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.pageName} />
      <meta name="twitter:description" content={metaData.twiterDesc} />
      <meta
        name="twitter:image"
        content="https://www.shutterstock.com/image-vector/condor-vector-logo-bird-design-600nw-2325064027.jpg"
      />
    </Helmet>
  )
}

export default HelmetCustom
