import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonMainCta extends Struct.ComponentSchema {
  collectionName: 'components_button_main_ctas';
  info: {
    displayName: 'Main CTA';
    icon: 'rocket';
  };
  attributes: {};
}

export interface EventosGaleriaDeImagenes extends Struct.ComponentSchema {
  collectionName: 'components_eventos_galeria_de_imagenes';
  info: {
    displayName: 'Galeria de Imagenes';
  };
  attributes: {
    Gallery: Schema.Attribute.Media<'images', true>;
  };
}

export interface EventosHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_eventos_hero_images';
  info: {
    displayName: 'Hero Image';
  };
  attributes: {
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EventosPostEvento extends Struct.ComponentSchema {
  collectionName: 'components_eventos_post_eventos';
  info: {
    displayName: 'Texto';
  };
  attributes: {
    Texto: Schema.Attribute.Blocks;
  };
}

export interface EventosVideo extends Struct.ComponentSchema {
  collectionName: 'components_eventos_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    Video: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::oembed.oembed'>;
  };
}

export interface FechasFechaDelEvento extends Struct.ComponentSchema {
  collectionName: 'components_fechas_fecha_del_eventos';
  info: {
    displayName: 'Fecha del Evento';
  };
  attributes: {
    Fecha: Schema.Attribute.DateTime;
  };
}

export interface FechasFechaRecurrente extends Struct.ComponentSchema {
  collectionName: 'components_fechas_fecha_recurrentes';
  info: {
    displayName: 'Fecha Recurrente';
  };
  attributes: {
    Fecha: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.main-cta': ButtonMainCta;
      'eventos.galeria-de-imagenes': EventosGaleriaDeImagenes;
      'eventos.hero-image': EventosHeroImage;
      'eventos.post-evento': EventosPostEvento;
      'eventos.video': EventosVideo;
      'fechas.fecha-del-evento': FechasFechaDelEvento;
      'fechas.fecha-recurrente': FechasFechaRecurrente;
    }
  }
}
