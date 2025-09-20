import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonMainCta extends Struct.ComponentSchema {
  collectionName: 'components_button_main_ctas';
  info: {
    displayName: 'Main CTA';
    icon: 'rocket';
  };
  attributes: {};
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
      'fechas.fecha-del-evento': FechasFechaDelEvento;
      'fechas.fecha-recurrente': FechasFechaRecurrente;
    }
  }
}
